import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface Product {
  title: string;
  description: string;
  capacity: string;
  icon: string;
}

interface Project {
  name: string;
  year: number;
  type: string;
}

interface MainSectionsProps {
  products: Product[];
  projects: Project[];
  certificates: string[];
}

export default function MainSections({ products, projects, certificates }: MainSectionsProps) {
  const { toast } = useToast();
  const [consentPrivacy, setConsentPrivacy] = useState(false);
  const [consentData, setConsentData] = useState(false);
  const [consentRecommendations, setConsentRecommendations] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const isFormValid = consentPrivacy && consentData && consentRecommendations && formData.name && formData.phone && formData.email && formData.message;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isFormValid || isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://functions.poehali.dev/ae31ec2d-d314-4604-8e50-66f563e1cf83', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        toast({
          title: 'Заявка отправлена!',
          description: 'Мы свяжемся с вами в ближайшее время'
        });
        
        setFormData({ name: '', phone: '', email: '', message: '' });
        setConsentPrivacy(false);
        setConsentData(false);
        setConsentRecommendations(false);
      } else {
        throw new Error(result.error || 'Failed to send');
      }
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: 'Не удалось отправить заявку. Попробуйте позже или позвоните нам.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
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
                    <div className="font-semibold">priority_eng@internet.ru</div>
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
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input 
                      placeholder="Иван Иванов" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input 
                      placeholder="+7 (___) ___-__-__" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input 
                      type="email" 
                      placeholder="ivan@company.ru" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Что вас интересует?</label>
                    <Textarea 
                      placeholder="Опишите ваш проект..." 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <Checkbox 
                        id="consent" 
                        className="mt-1" 
                        checked={consentData}
                        onCheckedChange={(checked) => setConsentData(checked as boolean)}
                      />
                      <label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                        Я согласен на <Link to="/consent" className="text-primary hover:underline">обработку персональных данных</Link>
                      </label>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Checkbox 
                        id="privacy" 
                        className="mt-1" 
                        checked={consentPrivacy}
                        onCheckedChange={(checked) => setConsentPrivacy(checked as boolean)}
                      />
                      <label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                        Я ознакомлен с <Link to="/privacy" className="text-primary hover:underline">политикой конфиденциальности</Link>
                      </label>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <Checkbox 
                        id="recommendations" 
                        className="mt-1" 
                        checked={consentRecommendations}
                        onCheckedChange={(checked) => setConsentRecommendations(checked as boolean)}
                      />
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
                  
                  <Button className="w-full" size="lg" type="submit" disabled={!isFormValid || isSubmitting}>
                    {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}