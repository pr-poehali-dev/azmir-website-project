import { useState, useEffect } from 'react';
import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import MainSections from '@/components/sections/MainSections';
import Footer from '@/components/sections/Footer';

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

  useEffect(() => {
    document.title = 'Производство металлоконструкций | Резервуары и емкости под ключ | Азмир';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Производство металлоконструкций с 2005 года: резервуары, технологические емкости, стальные конструкции. Проектирование, изготовление, монтаж. Контроль качества 100%. Заказать расчет.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header 
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
      />
      
      <HeroSection scrollToSection={scrollToSection} />
      
      <MainSections 
        products={products}
        projects={projects}
        certificates={certificates}
      />
      
      <Footer />
    </div>
  );
};

export default Index;