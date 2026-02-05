import { Link } from 'react-router-dom';

export default function Footer() {
  return (
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
              <li className="text-white/70">Email: priority_eng@internet.ru</li>
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
  );
}