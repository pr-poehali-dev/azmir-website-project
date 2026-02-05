import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function Recommendations() {
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
          <h1 className="text-4xl font-bold mb-8">Уведомление об использовании рекомендательных технологий</h1>

          <Card className="mb-6">
            <CardContent className="p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Общие положения</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Настоящее уведомление разработано в соответствии с Федеральным законом от 30.12.2020 № 530-ФЗ «О внесении изменений в Федеральный закон "О защите прав потребителей" и отдельные законодательные акты Российской Федерации» и информирует пользователей о применении рекомендательных технологий на сайте ООО «АПК-ИНЖИНИРИНГ».
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Что такое рекомендательные технологии</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Рекомендательные технологии — это алгоритмы и программные решения, которые автоматически анализируют поведение пользователей на сайте и предоставляют персонализированные рекомендации относительно товаров, услуг и информации, которые могут быть интересны пользователю.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Цели использования рекомендательных технологий</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Мы используем рекомендательные технологии для:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Улучшения пользовательского опыта на сайте;</li>
                  <li>Предоставления персонализированных рекомендаций по продукции и услугам;</li>
                  <li>Показа релевантной информации о металлоконструкциях и резервуарах;</li>
                  <li>Оптимизации процесса выбора продукции;</li>
                  <li>Информирования о специальных предложениях и акциях, соответствующих интересам пользователя.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Какие данные используются</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Для работы рекомендательных технологий могут использоваться следующие данные:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>История просмотра страниц сайта;</li>
                  <li>Информация о заполненных формах и запросах;</li>
                  <li>Данные о выбранных категориях продукции;</li>
                  <li>Техническая информация (тип устройства, браузер, операционная система);</li>
                  <li>Данные cookies и аналогичных технологий;</li>
                  <li>Время, проведенное на различных разделах сайта.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Как работают рекомендательные технологии</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Рекомендательные алгоритмы анализируют поведение пользователей на сайте и на основе этого анализа формируют персонализированные предложения. Система учитывает такие факторы, как просмотренные страницы, отправленные запросы, категории интересующей продукции и другие действия на сайте.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Отключение рекомендательных технологий</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Вы можете отказаться от использования рекомендательных технологий следующими способами:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Отключение cookies в настройках браузера;</li>
                  <li>Использование режима инкогнито (приватный просмотр);</li>
                  <li>Направление запроса на отключение на электронную почту: priority_eng@internet.ru;</li>
                  <li>Использование специальных расширений браузера для блокировки трекеров.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Обратите внимание: отключение рекомендательных технологий может повлиять на функциональность сайта и персонализацию предложений.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Безопасность данных</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Все данные, используемые рекомендательными технологиями, обрабатываются в соответствии с требованиями законодательства Российской Федерации о защите персональных данных. Мы применяем необходимые организационные и технические меры для защиты информации от несанкционированного доступа, изменения, раскрытия или уничтожения.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Изменения в уведомлении</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Мы оставляем за собой право вносить изменения в настоящее уведомление. Актуальная версия всегда доступна на нашем сайте. Рекомендуем периодически проверять данную страницу для ознакомления с возможными изменениями.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. Контактная информация</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  По всем вопросам, связанным с использованием рекомендательных технологий, вы можете обратиться к нам:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Общество с ограниченной ответственностью «АПК-ИНЖИНИРИНГ»</strong></p>
                  <p>ИНН: 2223639429</p>
                  <p>ОГРН: 1222200003080</p>
                  <p>Адрес: 656063, Россия, Алтайский край, г. Барнаул, проезд Заводской 9-Й, д.62, оф. 32</p>
                  <p>Телефон: +7 (961) 980-89-85</p>
                  <p>Email: priority_eng@internet.ru</p>
                </div>
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