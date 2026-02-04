import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('main');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            <div className="flex items-center gap-2 md:gap-3">
              <img 
                src="https://cdn.poehali.dev/files/cc19966e-ea49-4313-a7a5-26515815899c.jpg" 
                alt="АЗМИР" 
                className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover"
              />
              <div>
                <h1 className="text-lg md:text-2xl font-bold text-foreground">АЗМИР</h1>
                <p className="text-xs text-muted-foreground hidden sm:block">Алтайский завод металлоизделий и резервуаров</p>
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
            <div className="flex items-center gap-4">
              <Button className="hidden md:inline-flex">Получить расчет</Button>
              <button 
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Меню"
              >
                <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed right-0 top-0 h-full w-64 bg-white shadow-xl">
            <div className="p-6">
              <div className="flex justify-end mb-8">
                <button onClick={() => setMobileMenuOpen(false)}>
                  <Icon name="X" size={24} />
                </button>
              </div>
              <nav className="flex flex-col gap-4">
                {['main', 'products', 'production', 'about', 'projects', 'certificates', 'contacts'].map((section) => (
                  <button
                    key={section}
                    onClick={() => {
                      scrollToSection(section);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-left text-lg font-medium transition-colors hover:text-primary py-2 ${
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
                <Button className="mt-4" onClick={() => { scrollToSection('contacts'); setMobileMenuOpen(false); }}>
                  Получить расчет
                </Button>
              </nav>
            </div>
          </div>
        </div>
      )}

      <section id="main" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.poehali.dev/projects/8271d54d-0227-4d97-b2fe-d1436ae54530/files/3657098c-a8e4-4b81-ae91-1bea4d83f43d.jpg"
            alt="Производство"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary">С 2005 года на рынке</Badge>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Производство металлоконструкций полного цикла
            </h1>
            <p className="text-base md:text-xl text-gray-200 mb-6 md:mb-8">
              Проектирование, изготовление и монтаж резервуаров, технологических емкостей и металлоконструкций
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button size="default" className="text-base md:text-lg px-6 md:px-8 w-full sm:w-auto" onClick={() => scrollToSection('contacts')}>
                Заказать расчет
              </Button>
              <Button size="default" variant="outline" className="text-base md:text-lg px-6 md:px-8 bg-white/10 border-white text-white hover:bg-white/20 w-full sm:w-auto" onClick={() => scrollToSection('production')}>
                Наши проекты
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12 pt-8 md:pt-12 border-t border-white/20">
              <div className="animate-fade-in" style={{animationDelay: '0.2s', opacity: 0}}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1000+</div>
                <div className="text-gray-300 text-sm md:text-base">Выполненных заказов</div>
              </div>
              <div className="animate-fade-in" style={{animationDelay: '0.4s', opacity: 0}}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-gray-300 text-sm md:text-base">Контроль качества</div>
              </div>
              <div className="animate-fade-in" style={{animationDelay: '0.6s', opacity: 0}}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-gray-300 text-sm md:text-base">Готовы к вашему заказу</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-12 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <Badge className="mb-4">Наша продукция</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Что мы производим</h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный цикл производства от проектирования до монтажа
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
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

      <section id="production" className="py-12 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="animate-slide-in-left" style={{opacity: 0}}>
              <Badge className="mb-4">Производственная база</Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Современное производство</h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-slide-in-right mt-8 md:mt-0" style={{opacity: 0}}>
              <img
                src="https://cdn.poehali.dev/projects/8271d54d-0227-4d97-b2fe-d1436ae54530/files/88cea3f6-625c-4010-a9bd-dd6a67c8a645.jpg"
                alt="Сварка металлоконструкций"
                className="rounded-lg w-full h-48 md:h-64 object-cover"
              />
              <img
                src="https://cdn.poehali.dev/projects/8271d54d-0227-4d97-b2fe-d1436ae54530/files/8f65624d-f1b3-4995-8748-188c7601c134.jpg"
                alt="Резка металла"
                className="rounded-lg w-full h-48 md:h-64 object-cover sm:mt-4 md:mt-8"
              />
              <img
                src="https://cdn.poehali.dev/projects/8271d54d-0227-4d97-b2fe-d1436ae54530/files/a1963d93-7ba5-40ea-bfb0-582826ea1e64.jpg"
                alt="Сварочный процесс"
                className="rounded-lg w-full h-48 md:h-64 object-cover"
              />
              <img
                src="https://cdn.poehali.dev/projects/8271d54d-0227-4d97-b2fe-d1436ae54530/files/52853e38-0ffc-40b1-acca-2362357dc0b1.jpg"
                alt="Сборка резервуаров"
                className="rounded-lg w-full h-48 md:h-64 object-cover sm:mt-4 md:mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-12 md:py-24 bg-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in" style={{opacity: 0}}>
            <Badge className="mb-4 bg-white/20 text-white border-white/30">О компании</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">АЗМИР — надежный партнер в металлообработке</h2>
            <p className="text-base md:text-lg text-white/90 mb-6 md:mb-8">
              Мы — команда профессионалов, которая специализируется на производстве качественных 
              металлоконструкций и резервуаров. Каждый заказ получает максимум внимания.
            </p>
            <p className="text-base md:text-lg text-white/90">
              Наша команда — это опытные специалисты, которые гарантируют 
              надежность каждого шва и соблюдение всех технологических норм.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="py-12 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-in" style={{opacity: 0}}>
            <Badge className="mb-4">Портфолио</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Реализованные проекты</h2>
            <p className="text-base md:text-xl text-muted-foreground">Наши клиенты доверяют нам крупные проекты</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
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

      <section id="certificates" className="py-12 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-in" style={{opacity: 0}}>
            <Badge className="mb-4">Сертификация</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Качество подтверждено</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {certificates.map((cert, index) => (
              <Card key={index} className="animate-slide-in-left" style={{animationDelay: `${index * 0.1}s`, opacity: 0}}>
                <CardContent className="p-4 md:p-6 flex items-center gap-3 md:gap-4">
                  <Icon name="Award" size={24} className="text-primary flex-shrink-0" />
                  <span className="text-sm md:text-lg">{cert}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-12 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="animate-slide-in-left" style={{opacity: 0}}>
              <Badge className="mb-4">Свяжитесь с нами</Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Получить коммерческое предложение</h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
                Оставьте заявку и наш менеджер свяжется с вами для расчета стоимости
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Phone" className="text-primary mt-1" size={20} />
                  <div>
                    <div className="font-semibold">+7 (961) 980-89-85</div>
                    <div className="text-sm text-muted-foreground">Пн-Пт: 8:00 - 17:00</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" className="text-primary mt-1" size={20} />
                  <div>
                    <div className="font-semibold">azmir2024@bk.ru</div>
                    <div className="text-sm text-muted-foreground">Ответим в течение часа</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" className="text-primary mt-1" size={20} />
                  <div>
                    <div className="font-semibold">г. Барнаул, 9-й Заводской 62</div>
                    <div className="text-sm text-muted-foreground">Алтайский край, Россия</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Send" className="text-primary mt-1" size={20} />
                  <div>
                    <a href="https://t.me/+79619808985" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-primary transition-colors">Написать в Telegram</a>
                    <div className="text-sm text-muted-foreground">Быстрая связь в мессенджере</div>
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
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <Checkbox id="consent" className="mt-1" />
                      <label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                        Я согласен на <Link to="/consent" className="text-primary hover:underline">обработку персональных данных</Link>
                      </label>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Checkbox id="privacy" className="mt-1" />
                      <label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                        Я ознакомлен с <Link to="/privacy" className="text-primary hover:underline">политикой конфиденциальности</Link>
                      </label>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Checkbox id="recommendations" className="mt-1" />
                      <label htmlFor="recommendations" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                        Я ознакомлен с <Link to="/recommendations" className="text-primary hover:underline">использованием рекомендательных технологий</Link>
                      </label>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Checkbox id="offer" className="mt-1" />
                      <label htmlFor="offer" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                        Я согласен с условиями <Link to="/offer" className="text-primary hover:underline">публичной оферты</Link>
                      </label>
                    </div>
                  </div>
                  
                  <Button className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
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
              <h4 className="font-semibold mb-4">Документы</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/privacy" className="text-white/70 hover:text-white transition-colors">Политика конфиденциальности</Link></li>
                <li><Link to="/consent" className="text-white/70 hover:text-white transition-colors">Согласие на обработку данных</Link></li>
                <li><Link to="/recommendations" className="text-white/70 hover:text-white transition-colors">Рекомендательные технологии</Link></li>
                <li><Link to="/cookies" className="text-white/70 hover:text-white transition-colors">Политика использования cookie</Link></li>
                <li><Link to="/offer" className="text-white/70 hover:text-white transition-colors">Публичная оферта</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/requisites" className="text-white/70 hover:text-white transition-colors">Реквизиты компании</Link></li>
                <li><Link to="/delivery" className="text-white/70 hover:text-white transition-colors">Условия доставки</Link></li>
                <li className="text-white/70">Телефон: +7 (961) 980-89-85</li>
                <li className="text-white/70">Email: azmir2024@bk.ru</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8">
            <div className="text-center text-sm text-white/60 mb-4">
              © 2024 ООО «АПК-ИНЖИНИРИНГ». Все права защищены.
            </div>
            <div className="text-center text-xs text-white/50">
              ИНН: 2223639429 | ОГРН: 1222200003080 | г. Барнаул, 9-й Заводской 62
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;