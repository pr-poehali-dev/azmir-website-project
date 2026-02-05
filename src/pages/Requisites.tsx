import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function Requisites() {
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
          <Badge className="mb-4">Информация о компании</Badge>
          <h1 className="text-4xl font-bold mb-8">Реквизиты компании</h1>

          <Card className="mb-6">
            <CardContent className="p-8">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-6">Полное наименование</h2>
                  <p className="text-lg text-muted-foreground">
                    Общество с ограниченной ответственностью «АПК-ИНЖИНИРИНГ»
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-6">Сокращенное наименование</h2>
                  <p className="text-lg text-muted-foreground">
                    ООО «АПК-ИНЖИНИРИНГ»
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-6">Юридический адрес</h2>
                  <p className="text-lg text-muted-foreground">
                    656063, Россия, Алтайский край, г. Барнаул, проезд Заводской 9-Й, д.62, оф. 32
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-6">Банковские реквизиты</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-2">ИНН</p>
                      <p className="text-lg font-semibold">2223639429</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-2">КПП</p>
                      <p className="text-lg font-semibold">222301001</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-2">ОГРН</p>
                      <p className="text-lg font-semibold">1222200003080</p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-6">Контактная информация</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Icon name="Phone" className="text-primary mt-1" size={24} />
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">Телефон</p>
                        <a href="tel:+79619808985" className="text-lg font-semibold hover:text-primary transition-colors">
                          +7 (961) 980-89-85
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Icon name="Mail" className="text-primary mt-1" size={24} />
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">Электронная почта</p>
                        <a href="mailto:priority_eng@internet.ru" className="text-lg font-semibold hover:text-primary transition-colors">
                          priority_eng@internet.ru
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Icon name="MapPin" className="text-primary mt-1" size={24} />
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">Фактический адрес</p>
                        <p className="text-lg font-semibold">г. Барнаул, 9-й Заводской 62</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Icon name="Send" className="text-primary mt-1" size={24} />
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">Telegram</p>
                        <a 
                          href="https://t.me/+79619808985" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-lg font-semibold hover:text-primary transition-colors"
                        >
                          Написать в мессенджере
                        </a>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="pt-6 border-t">
                  <h2 className="text-2xl font-bold mb-4">Режим работы</h2>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong>Понедельник - Пятница:</strong> 8:00 - 17:00</p>
                    <p><strong>Суббота - Воскресенье:</strong> Выходной</p>
                  </div>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}