import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('main');

  const products = [
    {
      title: 'Резервуары',
      description: 'Вертикальные и горизонтальные резервуары для хранения нефтепродуктов, воды и химических веществ',
      capacity: 'от 5 до 5000 м³',
      icon: 'Container'
    },
    {
      title: 'Металлоконструкции',
      description: 'Каркасы зданий, фермы, балки, колонны из стали различных марок',
      capacity: 'любой сложности',
      icon: 'Grid3x3'
    },
    {
      title: 'Технологические емкости',
      description: 'Изготовление емкостей для пищевой и химической промышленности',
      capacity: 'от 1 до 200 м³',
      icon: 'Factory'
    },
    {
      title: 'Силосы и бункеры',
      description: 'Силосы и бункеры для хранения сыпучих материалов: зерна, цемента, комбикормов',
      capacity: 'от 10 до 1000 м³',
      icon: 'Warehouse'
    },
    {
      title: 'Водонапорные башни',
      description: 'Проектирование и изготовление водонапорных башен для систем водоснабжения',
      capacity: 'от 15 до 500 м³',
      icon: 'Droplet'
    },
    {
      title: 'Нестандартное оборудование',
      description: 'Проектирование и производство уникальных металлических изделий по чертежам заказчика',
      capacity: 'под заказ',
      icon: 'Settings'
    }
  ];

  const projects = [
    { name: 'Нефтебаза Барнаул', year: 2023, type: 'Резервуарный парк 25000 м³' },
    { name: 'Завод Сибирь', year: 2023, type: 'Металлоконструкции цеха' },
    { name: 'Агрокомплекс Алтай', year: 2022, type: 'Зернохранилище' },
    { name: 'ООО Химпром', year: 2022, type: 'Технологические емкости' }
  ];

  const certificates = [
    'ISO 9001:2015 - Система менеджмента качества',
    'Разрешение Ростехнадзора на производство оборудования',
    'Сертификат соответствия ГОСТ',
    'СРО на проектирование и монтаж'
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/cc19966e-ea49-4313-a7a5-26515815899c.jpg" 
                alt="АЗМИР" 
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h1 className="text-2xl font-bold text-foreground">АЗМИР</h1>
                <p className="text-xs text-muted-foreground">Алтайский завод металлоизделий и резервуаров</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              {['main', 'products', 'production', 'about', 'projects', 'certificates', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {section === 'main' && 'Главная'}
                  {section === 'products' && 'Продукция'}
                  {section === 'production' && 'Производство'}
                  {section === 'about' && 'О компании'}
                  {section === 'projects' && 'Проекты'}
                  {section === 'certificates' && 'Сертификаты'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </nav>
            <Button className="hidden md:inline-flex">Получить расчет</Button>
          </div>
        </div>
      </header>

      <section id="main" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.poehali.dev/projects/8271d54d-0227-4d97-b2fe-d1436ae54530/files/3657098c-a8e4-4b81-ae91-1bea4d83f43d.jpg"
            alt="Производство"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary">С 2005 года на рынке</Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Производство металлоконструкций полного цикла
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Проектирование, изготовление и монтаж резервуаров, технологических емкостей и металлоконструкций
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-lg px-8" onClick={() => scrollToSection('contacts')}>
                Заказать расчет
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white text-white hover:bg-white/20" onClick={() => scrollToSection('production')}>
                Наши проекты
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/20">
              <div className="animate-fade-in" style={{animationDelay: '0.2s', opacity: 0}}>
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <div className="text-gray-300">Выполненных заказов</div>
              </div>
              <div className="animate-fade-in" style={{animationDelay: '0.4s', opacity: 0}}>
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-gray-300">Контроль качества</div>
              </div>
              <div className="animate-fade-in" style={{animationDelay: '0.6s', opacity: 0}}>
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-gray-300">Готовы к вашему заказу</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4">Наша продукция</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что мы производим</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный цикл производства от проектирования до монтажа
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary hover:-translate-y-2 animate-fade-in" style={{animationDelay: `${index * 0.1}s`, opacity: 0}}>
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={product.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <Badge variant="secondary">{product.capacity}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="production" className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left" style={{opacity: 0}}>
              <Badge className="mb-4">Производственная база</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Современное производство</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Автоматизированное производство с использованием современного оборудования. Каждое изделие проходит 
                тщательный контроль на всех этапах производства, что гарантирует индивидуальный подход и максимальное качество.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold">Сварка высшего класса</div>
                    <div className="text-sm text-muted-foreground">Сертифицированные мастера</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold">Индивидуальный подход</div>
                    <div className="text-sm text-muted-foreground">Гибкость производства под нестандартные задачи</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold">Контроль на каждом этапе</div>
                    <div className="text-sm text-muted-foreground">Проверка качества швов и геометрии изделий</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-slide-in-right" style={{opacity: 0}}>
              <img
                src="https://cdn.poehali.dev/projects/8271d54d-0227-4d97-b2fe-d1436ae54530/files/88cea3f6-625c-4010-a9bd-dd6a67c8a645.jpg"
                alt="Сварка металлоконструкций"
                className="rounded-lg w-full h-64 object-cover"
              />
              <img
                src="https://cdn.poehali.dev/projects/8271d54d-0227-4d97-b2fe-d1436ae54530/files/8f65624d-f1b3-4995-8748-188c7601c134.jpg"
                alt="Резка металла"
                className="rounded-lg w-full h-64 object-cover mt-8"
              />
              <img
                src="https://cdn.poehali.dev/projects/8271d54d-0227-4d97-b2fe-d1436ae54530/files/a1963d93-7ba5-40ea-bfb0-582826ea1e64.jpg"
                alt="Сварочный процесс"
                className="rounded-lg w-full h-64 object-cover"
              />
              <img
                src="https://cdn.poehali.dev/projects/8271d54d-0227-4d97-b2fe-d1436ae54530/files/52853e38-0ffc-40b1-acca-2362357dc0b1.jpg"
                alt="Сборка резервуаров"
                className="rounded-lg w-full h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in" style={{opacity: 0}}>
            <Badge className="mb-4 bg-white/20 text-white border-white/30">О компании</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">АЗМИР — надежный партнер в металлообработке</h2>
            <p className="text-lg text-white/90 mb-8">
              Мы — небольшая команда профессионалов, которая специализируется на изготовлении качественных 
              металлоконструкций и резервуаров. Каждый заказ получает максимум внимания.
            </p>
            <p className="text-lg text-white/90">
              Наша команда — это опытные сварщики с сертификатами НАКС, которые гарантируют 
              надежность каждого шва и соблюдение всех технологических норм.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in" style={{opacity: 0}}>
            <Badge className="mb-4">Портфолио</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Реализованные проекты</h2>
            <p className="text-xl text-muted-foreground">Наши клиенты доверяют нам крупные проекты</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{animationDelay: `${index * 0.15}s`, opacity: 0}}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{project.name}</h3>
                      <p className="text-muted-foreground">{project.type}</p>
                    </div>
                    <Badge variant="outline">{project.year}</Badge>
                  </div>
                  <div className="flex items-center gap-2 text-primary">
                    <Icon name="MapPin" size={16} />
                    <span className="text-sm">Алтайский край</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="certificates" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in" style={{opacity: 0}}>
            <Badge className="mb-4">Сертификация</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Качество подтверждено</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {certificates.map((cert, index) => (
              <Card key={index} className="animate-slide-in-left" style={{animationDelay: `${index * 0.1}s`, opacity: 0}}>
                <CardContent className="p-6 flex items-center gap-4">
                  <Icon name="Award" size={24} className="text-primary flex-shrink-0" />
                  <span className="text-lg">{cert}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slide-in-left" style={{opacity: 0}}>
              <Badge className="mb-4">Свяжитесь с нами</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Получить коммерческое предложение</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Оставьте заявку и наш менеджер свяжется с вами в течение 30 минут для расчета стоимости
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Phone" className="text-primary mt-1" size={20} />
                  <div>
                    <div className="font-semibold">+7 (3852) 123-45-67</div>
                    <div className="text-sm text-muted-foreground">Пн-Пт: 8:00 - 17:00</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" className="text-primary mt-1" size={20} />
                  <div>
                    <div className="font-semibold">info@azmir-altai.ru</div>
                    <div className="text-sm text-muted-foreground">Ответим в течение часа</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-primary mt-1" size={20} />
                  <div>
                    <div className="font-semibold">г. Барнаул, Индустриальная 25</div>
                    <div className="text-sm text-muted-foreground">Алтайский край, Россия</div>
                  </div>
                </div>
              </div>
            </div>
            <Card className="animate-slide-in-right" style={{opacity: 0}}>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input placeholder="Иван Иванов" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="ivan@company.ru" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Что вас интересует?</label>
                    <Textarea placeholder="Опишите ваш проект..." rows={4} />
                  </div>
                  <Button className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/cc19966e-ea49-4313-a7a5-26515815899c.jpg" 
                  alt="АЗМИР" 
                  className="h-8 w-8 rounded-full object-cover"
                />
                <span className="text-xl font-bold">АЗМИР</span>
              </div>
              <p className="text-white/70 text-sm">
                Алтайский завод металлоизделий и резервуаров
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукция</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Резервуары</li>
                <li>Металлоконструкции</li>
                <li>Технологические емкости</li>
                <li>Нестандартное оборудование</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>О заводе</li>
                <li>Производство</li>
                <li>Проекты</li>
                <li>Сертификаты</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>+7 (3852) 123-45-67</li>
                <li>info@azmir-altai.ru</li>
                <li>г. Барнаул</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            © 2024 АЗМИР. Все права защищены. Алтайский завод металлоизделий и резервуаров.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;