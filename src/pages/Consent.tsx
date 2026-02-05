import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function Consent() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <Icon name="ArrowLeft" size={20} className="mr-2" />
          Назад
        </Button>

        <div className="max-w-4xl mx-auto">
          <Badge className="mb-4">Юридические документы</Badge>
          <h1 className="text-4xl font-bold mb-8">Согласие на обработку персональных данных</h1>

          <Card className="mb-6">
            <CardContent className="p-8 space-y-6">
              <section>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Я, действуя свободно, своей волей и в своем интересе, а также подтверждая свою дееспособность, даю свое согласие Обществу с ограниченной ответственностью «АПК-ИНЖИНИРИНГ» (далее — Оператор) на обработку своих персональных данных со следующими условиями:
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">1. Данное Согласие дается на обработку персональных данных</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Согласие распространяется на следующую информацию:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Фамилия, имя, отчество;</li>
                  <li>Контактный телефон;</li>
                  <li>Адрес электронной почты;</li>
                  <li>Наименование организации;</li>
                  <li>Информация о заказах и запросах;</li>
                  <li>Иные данные, предоставленные мной при заполнении форм на сайте.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Цели обработки персональных данных</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Персональные данные обрабатываются Оператором в целях:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Обработки заявок и запросов на предоставление информации;</li>
                  <li>Заключения и исполнения договоров на поставку продукции и оказание услуг;</li>
                  <li>Информирования о новых товарах, услугах, специальных предложениях и акциях;</li>
                  <li>Проведения маркетинговых исследований;</li>
                  <li>Улучшения качества обслуживания клиентов;</li>
                  <li>Выполнения обязательств перед третьими лицами.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Способы обработки персональных данных</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Оператор осуществляет обработку персональных данных следующими способами:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Сбор, запись, систематизация, накопление, хранение;</li>
                  <li>Уточнение (обновление, изменение);</li>
                  <li>Извлечение, использование, передача (распространение, предоставление, доступ);</li>
                  <li>Обезличивание, блокирование, удаление, уничтожение персональных данных.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Обработка персональных данных осуществляется как с использованием средств автоматизации, так и без использования таких средств.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Передача персональных данных третьим лицам</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Оператор имеет право передавать персональные данные третьим лицам в следующих случаях:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Субъект персональных данных выразил согласие на такие действия;</li>
                  <li>Передача предусмотрена российским или иным применимым законодательством;</li>
                  <li>Передача необходима для исполнения договора, стороной которого является субъект персональных данных;</li>
                  <li>Передача осуществляется партнерам Оператора для выполнения обязательств перед субъектом персональных данных.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Срок действия согласия</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Настоящее согласие действует с момента его предоставления и до момента его отзыва субъектом персональных данных. Согласие может быть отозвано путем направления письменного заявления на электронную почту Оператора: priority_eng@internet.ru или почтовый адрес: 656063, Россия, Алтайский край, г. Барнаул, проезд Заводской 9-Й, д.62, оф. 32.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Права субъекта персональных данных</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Я проинформирован о своих правах:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Получать информацию, касающуюся обработки моих персональных данных;</li>
                  <li>Требовать уточнения, блокирования или уничтожения персональных данных;</li>
                  <li>Отозвать согласие на обработку персональных данных;</li>
                  <li>Обжаловать действия или бездействие Оператора в уполномоченный орган по защите прав субъектов персональных данных или в судебном порядке.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Контактная информация Оператора</h2>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Общество с ограниченной ответственностью «АПК-ИНЖИНИРИНГ»</strong></p>
                  <p>ИНН: 2223639429, КПП: 222301001</p>
                  <p>ОГРН: 1222200003080</p>
                  <p>Адрес: 656063, Россия, Алтайский край, г. Барнаул, проезд Заводской 9-Й, д.62, оф. 32</p>
                  <p>Телефон: +7 (961) 980-89-85</p>
                  <p>Email: priority_eng@internet.ru</p>
                </div>
              </section>

              <section className="pt-6 border-t">
                <p className="text-muted-foreground leading-relaxed">
                  Подтверждаю, что ознакомлен с положениями Федерального закона от 27.07.2006 №152-ФЗ «О персональных данных», права и обязанности в области защиты персональных данных мне разъяснены.
                </p>
              </section>

              <section>
                <p className="text-sm text-muted-foreground">
                  Дата последнего обновления: {new Date().toLocaleDateString('ru-RU')}
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}