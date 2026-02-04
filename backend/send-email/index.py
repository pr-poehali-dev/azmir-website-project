import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from pydantic import BaseModel, Field, EmailStr


class ContactRequest(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    email: EmailStr
    phone: str = Field(..., min_length=5, max_length=20)
    message: str = Field(..., min_length=1, max_length=1000)


def handler(event: dict, context) -> dict:
    '''API для отправки заявок с контактной формы на email'''
    method = event.get('httpMethod', 'GET')

    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }

    try:
        data = json.loads(event.get('body', '{}'))
        request = ContactRequest(**data)

        email_user = os.environ.get('EMAIL_USER')
        email_password = os.environ.get('EMAIL_PASSWORD')
        email_to = os.environ.get('EMAIL_TO')

        if not all([email_user, email_password, email_to]):
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Email configuration missing'})
            }

        msg = MIMEMultipart('alternative')
        msg['Subject'] = f'Новая заявка с сайта от {request.name}'
        msg['From'] = email_user
        msg['To'] = email_to

        html_body = f'''
        <html>
          <head></head>
          <body>
            <h2>Новая заявка с сайта</h2>
            <p><strong>Имя:</strong> {request.name}</p>
            <p><strong>Email:</strong> {request.email}</p>
            <p><strong>Телефон:</strong> {request.phone}</p>
            <p><strong>Сообщение:</strong></p>
            <p>{request.message}</p>
          </body>
        </html>
        '''

        text_body = f'''
Новая заявка с сайта

Имя: {request.name}
Email: {request.email}
Телефон: {request.phone}
Сообщение: {request.message}
        '''

        part1 = MIMEText(text_body, 'plain')
        part2 = MIMEText(html_body, 'html')
        msg.attach(part1)
        msg.attach(part2)

        smtp_server = 'smtp.gmail.com' if 'gmail' in email_user.lower() else 'smtp.yandex.ru'
        smtp_port = 587

        with smtplib.SMTP(smtp_server, smtp_port) as server:
            server.starttls()
            server.login(email_user, email_password)
            server.send_message(msg)

        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'success': True, 'message': 'Email sent successfully'})
        }

    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': str(e)})
        }
