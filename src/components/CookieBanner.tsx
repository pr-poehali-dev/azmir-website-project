import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieAccepted = localStorage.getItem('cookieAccepted');
    if (!cookieAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieAccepted', 'false');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-in-up">
      <Card className="max-w-4xl mx-auto shadow-2xl border-2">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <Icon name="Cookie" size={32} className="text-primary flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-2">Мы используем файлы cookie</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Этот сайт использует файлы cookie для улучшения работы и повышения эффективности сайта. 
                Продолжая использовать наш сайт, вы соглашаетесь с использованием файлов cookie в соответствии с нашей{' '}
                <Link to="/cookies" className="text-primary hover:underline font-medium">
                  Политикой использования cookie
                </Link>.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button onClick={handleAccept} size="sm">
                  Принять
                </Button>
                <Button onClick={handleDecline} variant="outline" size="sm">
                  Отклонить
                </Button>
                <Link to="/cookies">
                  <Button variant="ghost" size="sm">
                    Подробнее
                  </Button>
                </Link>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleDecline}
              className="flex-shrink-0"
            >
              <Icon name="X" size={20} />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
