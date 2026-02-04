import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function Cookies() {
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
          <h1 className="text-4xl font-bold mb-8">Политика использования файлов cookie</h1>

          <Card className="mb-6">
            <CardContent className="p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Что такое cookie</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Cookie (куки) — это небольшие текстовые файлы, которые сохраняются на вашем устройстве (компьютере, планшете или мобильном телефоне) при посещении веб-сайтов. Cookie позволяют сайту запомнить ваши действия и предпочтения на определенный период времени, чтобы вам не приходилось вводить их заново при каждом посещении сайта или переходе с одной страницы на другую.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Для чего мы используем cookie</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  ООО «АПК-ИНЖИНИРИНГ» использует файлы cookie на своем сайте для следующих целей:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>Обеспечение работоспособности сайта</strong> — cookie необходимы для базового функционирования сайта;</li>
                  <li><strong>Улучшение пользовательского опыта</strong> — запоминание ваших предпочтений и настроек;</li>
                  <li><strong>Аналитика и статистика</strong> — сбор анонимной информации о посещаемости и использовании сайта;</li>
                  <li><strong>Безопасность</strong> — защита от мошенничества и обеспечение безопасного использования сайта;</li>
                  <li><strong>Персонализация контента</strong> — показ релевантной информации и предложений.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Типы cookie, которые мы используем</h2>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-xl font-semibold mb-2">Необходимые cookie</h3>
                    <p className="text-muted-foreground">
                      Эти файлы cookie необходимы для работы сайта и не могут быть отключены в наших системах. Обычно они устанавливаются только в ответ на ваши действия, равнозначные запросу услуг, такие как настройка параметров конфиденциальности, вход в систему или заполнение форм.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-xl font-semibold mb-2">Функциональные cookie</h3>
                    <p className="text-muted-foreground">
                      Эти файлы cookie позволяют сайту запоминать сделанные вами выборы (например, ваше имя пользователя, язык или регион) и предоставлять расширенные, более персональные функции.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-xl font-semibold mb-2">Аналитические cookie</h3>
                    <p className="text-muted-foreground">
                      Эти файлы cookie позволяют нам подсчитывать посещения и источники трафика, чтобы измерять и улучшать производительность нашего сайта. Они помогают узнать, какие страницы наиболее и наименее популярны, и увидеть, как посетители перемещаются по сайту.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="text-xl font-semibold mb-2">Маркетинговые cookie</h3>
                    <p className="text-muted-foreground">
                      Эти файлы cookie могут устанавливаться через наш сайт нашими рекламными партнерами. Они могут использоваться этими компаниями для создания профиля ваших интересов и показа релевантных объявлений на других сайтах.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Сроки хранения cookie</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Мы используем два типа cookie в зависимости от срока их действия:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>Сеансовые cookie</strong> — временные файлы, которые удаляются после закрытия браузера;</li>
                  <li><strong>Постоянные cookie</strong> — файлы, которые остаются на вашем устройстве в течение определенного времени (обычно до 12 месяцев) или до тех пор, пока вы их не удалите.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Какую информацию собирают cookie</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Файлы cookie могут собирать следующую информацию:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>IP-адрес устройства;</li>
                  <li>Тип и версия браузера;</li>
                  <li>Операционная система;</li>
                  <li>Посещенные страницы сайта;</li>
                  <li>Время, проведенное на сайте;</li>
                  <li>Источник перехода на сайт;</li>
                  <li>Настройки и предпочтения пользователя.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Сторонние cookie</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Некоторые cookie устанавливаются сторонними сервисами, которые размещают свой контент на наших страницах. Мы не контролируем установку этих файлов cookie и рекомендуем ознакомиться с политиками конфиденциальности соответствующих сторонних сервисов для получения дополнительной информации.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Как управлять cookie</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Вы можете контролировать и/или удалять cookie по своему усмотрению. Вы можете:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Удалить все cookie, уже сохраненные на вашем устройстве;</li>
                  <li>Настроить большинство браузеров так, чтобы они блокировали установку cookie;</li>
                  <li>Использовать режим инкогнито или приватный просмотр в браузере.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  <strong>Обратите внимание:</strong> если вы удалите cookie или запретите их использование, некоторые функции сайта могут работать некорректно или быть недоступны.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Как отключить cookie в браузере</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Инструкции по управлению cookie в популярных браузерах:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>Google Chrome:</strong> Настройки → Конфиденциальность и безопасность → Файлы cookie и другие данные сайтов</li>
                  <li><strong>Mozilla Firefox:</strong> Настройки → Приватность и защита → Куки и данные сайтов</li>
                  <li><strong>Safari:</strong> Настройки → Конфиденциальность → Управление данными веб-сайтов</li>
                  <li><strong>Microsoft Edge:</strong> Настройки → Файлы cookie и разрешения сайтов</li>
                  <li><strong>Opera:</strong> Настройки → Дополнительно → Безопасность → Файлы cookie</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. Изменения в политике cookie</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Мы можем периодически обновлять настоящую Политику использования файлов cookie. Любые изменения будут опубликованы на этой странице. Рекомендуем регулярно проверять эту страницу для ознакомления с актуальной информацией о нашей практике использования cookie.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">10. Согласие на использование cookie</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Продолжая использовать наш сайт, вы соглашаетесь с использованием файлов cookie в соответствии с настоящей Политикой. При первом посещении сайта вы увидите уведомление о том, что мы используем cookie. Закрывая это уведомление или продолжая использовать сайт, вы даете согласие на использование cookie.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">11. Контактная информация</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Если у вас есть вопросы относительно использования файлов cookie на нашем сайте, свяжитесь с нами:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Общество с ограниченной ответственностью «АПК-ИНЖИНИРИНГ»</strong></p>
                  <p>ИНН: 2223639429</p>
                  <p>ОГРН: 1222200003080</p>
                  <p>Адрес: 656063, Россия, Алтайский край, г. Барнаул, проезд Заводской 9-Й, д.62, оф. 32</p>
                  <p>Телефон: +7 (961) 980-89-85</p>
                  <p>Email: azmir2024@bk.ru</p>
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
