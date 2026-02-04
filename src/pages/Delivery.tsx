import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function Delivery() {
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
          <Badge className="mb-4">Информация для клиентов</Badge>
          <h1 className="text-4xl font-bold mb-8">Условия доставки</h1>

          <Card className="mb-6">
            <CardContent className="p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Общие положения</h2>
                <p className="text-muted-foreground leading-relaxed">
                  ООО «АПК-ИНЖИНИРИНГ» предоставляет услуги доставки металлоконструкций, резервуаров и изделий по Алтайскому краю и другим регионам Российской Федерации. Условия и стоимость доставки определяются индивидуально в зависимости от характеристик заказа, расстояния и способа транспортировки.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Способы доставки</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-xl font-semibold mb-2">Самовывоз</h3>
                    <p className="text-muted-foreground">
                      Вы можете забрать готовую продукцию самостоятельно с нашего склада по адресу: г. Барнаул, 9-й Заводской 62. Самовывоз осуществляется бесплатно в рабочие дни с 8:00 до 17:00 после полной оплаты заказа и предварительного согласования времени получения.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-xl font-semibold mb-2">Доставка автотранспортом компании</h3>
                    <p className="text-muted-foreground">
                      Мы осуществляем доставку собственным или привлеченным автотранспортом по Барнаулу, Алтайскому краю и соседним регионам. Стоимость доставки рассчитывается индивидуально и зависит от веса, габаритов груза и расстояния.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-xl font-semibold mb-2">Доставка транспортной компанией</h3>
                    <p className="text-muted-foreground">
                      Для доставки в отдаленные регионы мы работаем с надежными транспортными компаниями. Доставка осуществляется до терминала транспортной компании в вашем городе или до двери по договоренности.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Стоимость доставки</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Стоимость доставки зависит от следующих факторов:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Вес и габариты изделия;</li>
                  <li>Расстояние до места доставки;</li>
                  <li>Необходимость использования специальной техники;</li>
                  <li>Условия разгрузки на месте;</li>
                  <li>Срочность доставки.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Точная стоимость доставки рассчитывается менеджером после оформления заказа и согласовывается с клиентом до отгрузки.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Сроки доставки</h2>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong>По Барнаулу:</strong> 1-2 рабочих дня после готовности заказа</p>
                  <p><strong>По Алтайскому краю:</strong> 2-5 рабочих дней</p>
                  <p><strong>По России (транспортными компаниями):</strong> от 3 до 14 рабочих дней в зависимости от региона</p>
                </div>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Точные сроки доставки согласовываются индивидуально при оформлении заказа.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Условия приемки груза</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  При получении груза необходимо:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Проверить целостность упаковки;</li>
                  <li>Сверить количество мест с данными в товарно-транспортной накладной;</li>
                  <li>Осмотреть изделия на предмет видимых повреждений;</li>
                  <li>В случае обнаружения повреждений составить акт с представителем транспортной компании или водителем.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Претензии по качеству доставки принимаются только при наличии соответствующих отметок в товарно-транспортной накладной.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Разгрузка</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Разгрузка крупногабаритных и тяжелых изделий осуществляется силами заказчика или может быть организована нашей компанией за дополнительную плату. Необходимость и стоимость услуг по разгрузке обсуждается при оформлении заказа.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Особые условия</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Для крупногабаритных изделий (резервуары, емкости большого объема) и нестандартных металлоконструкций:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Требуется предварительное согласование маршрута доставки;</li>
                  <li>Может потребоваться специальная техника (автокран, манипулятор);</li>
                  <li>Необходимо обеспечить подъезд для крупногабаритного транспорта;</li>
                  <li>Стоимость и сроки рассчитываются индивидуально.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Контактная информация</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Для уточнения условий доставки и расчета стоимости свяжитесь с нами:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p>Телефон: <a href="tel:+79619808985" className="text-primary hover:underline">+7 (961) 980-89-85</a></p>
                  <p>Email: <a href="mailto:azmir2024@bk.ru" className="text-primary hover:underline">azmir2024@bk.ru</a></p>
                  <p>Telegram: <a href="https://t.me/+79619808985" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Написать в мессенджере</a></p>
                  <p>Адрес: г. Барнаул, 9-й Заводской 62</p>
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
