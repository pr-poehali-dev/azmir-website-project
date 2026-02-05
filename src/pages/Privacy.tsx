import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function Privacy() {
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
          <h1 className="text-4xl font-bold mb-8">Политика обработки персональных данных</h1>

          <Card className="mb-6">
            <CardContent className="p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Общие положения</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Настоящая Политика обработки персональных данных (далее — Политика) разработана в соответствии с Федеральным законом от 27.07.2006 №152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных ООО «АПК-ИНЖИНИРИНГ» (далее — Оператор).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Основные понятия</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>Персональные данные</strong> — любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу (субъекту персональных данных).</li>
                  <li><strong>Обработка персональных данных</strong> — любое действие или совокупность действий, совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными.</li>
                  <li><strong>Конфиденциальность персональных данных</strong> — обязательное для соблюдения Оператором требование не допускать их распространения без согласия субъекта персональных данных.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Цели обработки персональных данных</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Оператор обрабатывает персональные данные в следующих целях:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Предоставление информации о товарах и услугах;</li>
                  <li>Обработка заявок и запросов;</li>
                  <li>Заключение и исполнение договоров;</li>
                  <li>Информирование о специальных предложениях и акциях;</li>
                  <li>Улучшение качества обслуживания.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Состав персональных данных</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Оператор может обрабатывать следующие персональные данные:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Фамилия, имя, отчество;</li>
                  <li>Номер телефона;</li>
                  <li>Адрес электронной почты;</li>
                  <li>Информация о компании (наименование, ИНН);</li>
                  <li>Адрес доставки;</li>
                  <li>Сведения о заказах и запросах.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Правовые основания обработки</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Оператор обрабатывает персональные данные на основании:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Согласия субъекта персональных данных;</li>
                  <li>Договоров, стороной которых является субъект персональных данных;</li>
                  <li>Законодательства Российской Федерации.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Меры защиты персональных данных</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Оператор принимает необходимые правовые, организационные и технические меры для защиты персональных данных от неправомерного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий третьих лиц.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Права субъекта персональных данных</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Субъект персональных данных имеет право:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Получать информацию об обработке своих персональных данных;</li>
                  <li>Требовать уточнения персональных данных;</li>
                  <li>Требовать удаления персональных данных;</li>
                  <li>Отозвать согласие на обработку персональных данных;</li>
                  <li>Обжаловать действия Оператора в уполномоченный орган по защите прав субъектов персональных данных.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Контактная информация</h2>
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