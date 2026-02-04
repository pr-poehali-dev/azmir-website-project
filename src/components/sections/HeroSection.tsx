import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface HeroSectionProps {
  scrollToSection: (section: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
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
  );
}
