import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function Offer() {
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
          <h1 className="text-4xl font-bold mb-8">Публичная оферта</h1>

          <Card className="mb-6">
            <CardContent className="p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Общие положения</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Настоящий документ является официальным предложением (публичной офертой) Общества с ограниченной ответственностью «АПК-ИНЖИНИРИНГ» (далее — Продавец) заключить договор поставки металлоконструкций, резервуаров и сопутствующих изделий (далее — Товар) на условиях, изложенных ниже, любому физическому или юридическому лицу (далее — Покупатель).
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  В соответствии со статьей 437 Гражданского кодекса Российской Федерации, в случае принятия изложенных ниже условий и оформления заявки на приобретение Товара, физическое или юридическое лицо, производящее акцепт этой оферты, становится Покупателем.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Предмет договора</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Продавец обязуется передать в собственность Покупателя Товар, а Покупатель обязуется принять Товар и оплатить его в порядке и на условиях, предусмотренных настоящей офертой.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Ассортимент Товара представлен на сайте и включает:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mt-2">
                  <li>Металлоконструкции различного назначения;</li>
                  <li>Резервуары и емкости;</li>
                  <li>Изделия из металла по индивидуальным проектам;</li>
                  <li>Сварочные работы и монтаж.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Порядок заключения договора</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Договор между Продавцом и Покупателем считается заключенным с момента:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Оформления Покупателем заявки на сайте или через иные каналы связи;</li>
                  <li>Получения Покупателем подтверждения заявки от Продавца;</li>
                  <li>Подписания коммерческого предложения или договора поставки.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Принятие Покупателем условий настоящей оферты осуществляется путем оформления заявки и означает полное и безоговорочное согласие Покупателя со всеми условиями оферты.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Цена товара</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Цена каждой позиции Товара указывается в коммерческом предложении, выставленном Продавцом по результатам согласования технического задания. Цена указывается в рублях Российской Федерации и может включать или не включать стоимость доставки в зависимости от условий конкретной сделки.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Продавец оставляет за собой право изменять цены на Товар без предварительного уведомления. При этом цена на заказанный и согласованный Товар изменению не подлежит.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Порядок оплаты</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Оплата Товара производится одним из следующих способов:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Безналичный расчет на основании выставленного счета (для юридических лиц и ИП);</li>
                  <li>Наличный расчет при получении (по согласованию);</li>
                  <li>Предоплата в размере 50-100% от суммы заказа.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Конкретные условия оплаты согласовываются с менеджером при оформлении заказа и указываются в договоре или коммерческом предложении.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Сроки изготовления и поставки</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Сроки изготовления Товара определяются индивидуально в зависимости от сложности и объема заказа и указываются в договоре или коммерческом предложении. Стандартные сроки изготовления составляют от 5 до 30 рабочих дней с момента внесения предоплаты и утверждения технического задания.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Условия доставки подробно описаны в разделе «Условия доставки» на сайте компании.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Права и обязанности Продавца</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Продавец обязуется:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Изготовить Товар надлежащего качества в согласованные сроки;</li>
                  <li>Передать Покупателю Товар в соответствии с условиями договора;</li>
                  <li>Предоставить всю необходимую документацию на Товар;</li>
                  <li>Обеспечить соблюдение технологии изготовления и требований безопасности.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4 mb-4">
                  Продавец имеет право:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Изменять условия настоящей оферты;</li>
                  <li>Отказать в исполнении заказа в случае непредоставления полной информации;</li>
                  <li>Приостановить изготовление Товара при нарушении сроков оплаты.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Права и обязанности Покупателя</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Покупатель обязуется:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Предоставить полную и достоверную информацию для изготовления Товара;</li>
                  <li>Произвести оплату в порядке и сроки, установленные договором;</li>
                  <li>Принять Товар в согласованные сроки;</li>
                  <li>Обеспечить условия для разгрузки Товара при доставке.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4 mb-4">
                  Покупатель имеет право:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Получить Товар надлежащего качества;</li>
                  <li>Получить полную информацию о характеристиках Товара;</li>
                  <li>Отказаться от Товара до момента его изготовления с возмещением фактических расходов Продавца.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. Гарантии качества</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Продавец гарантирует качество Товара при соблюдении условий эксплуатации, транспортировки и хранения. Гарантийный срок устанавливается индивидуально в зависимости от типа Товара и указывается в сопроводительной документации.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Претензии по качеству принимаются в течение гарантийного срока при наличии документов, подтверждающих приобретение Товара у Продавца.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">10. Ответственность сторон</h2>
                <p className="text-muted-foreground leading-relaxed">
                  За неисполнение или ненадлежащее исполнение обязательств по настоящей оферте стороны несут ответственность в соответствии с законодательством Российской Федерации. Продавец не несет ответственности за неисполнение обязательств, вызванное форс-мажорными обстоятельствами.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">11. Конфиденциальность и защита персональных данных</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Продавец обязуется не разглашать персональную информацию Покупателя третьим лицам, за исключением случаев, предусмотренных законодательством. Подробная информация о порядке обработки персональных данных изложена в Политике конфиденциальности на сайте компании.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">12. Разрешение споров</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Все споры и разногласия, возникающие при исполнении настоящего договора, решаются путем переговоров. В случае невозможности достижения согласия споры разрешаются в судебном порядке в соответствии с законодательством Российской Федерации.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">13. Срок действия оферты</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Настоящая оферта вступает в силу с момента размещения на сайте и действует до момента отзыва Продавцом.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">14. Реквизиты Продавца</h2>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Общество с ограниченной ответственностью «АПК-ИНЖИНИРИНГ»</strong></p>
                  <p>ИНН: 2223639429, КПП: 222301001</p>
                  <p>ОГРН: 1222200003080</p>
                  <p>Юридический адрес: 656063, Россия, Алтайский край, г. Барнаул, проезд Заводской 9-Й, д.62, оф. 32</p>
                  <p>Фактический адрес: г. Барнаул, 9-й Заводской 62</p>
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