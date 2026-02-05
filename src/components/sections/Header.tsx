import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  activeSection: string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  scrollToSection: (section: string) => void;
}

export default function Header({ activeSection, mobileMenuOpen, setMobileMenuOpen, scrollToSection }: HeaderProps) {
  return (
    <>
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
              <Button className="hidden md:inline-flex" onClick={() => scrollToSection('contacts')}>Получить расчет</Button>
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
    </>
  );
}