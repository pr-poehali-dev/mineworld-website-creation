import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'contacts'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 via-sky-300 to-green-200">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b-4 border-primary-foreground/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-secondary pixel-corners flex items-center justify-center">
                <span className="text-2xl">⛏️</span>
              </div>
              <h1 className="text-2xl font-bold text-primary-foreground text-shadow-pixel">MINEWORLD</h1>
            </div>
            
            <div className="hidden md:flex gap-2">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'about', label: 'О сервере', icon: 'Info' },
                { id: 'contacts', label: 'Контакты', icon: 'MessageSquare' }
              ].map((item) => (
                <Button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  variant={activeSection === item.id ? 'secondary' : 'ghost'}
                  className={`pixel-corners font-semibold ${
                    activeSection === item.id 
                      ? 'text-secondary-foreground' 
                      : 'text-primary-foreground hover:bg-primary-foreground/20'
                  }`}
                >
                  <Icon name={item.icon as any} className="mr-2" size={18} />
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-float mb-8">
            <div className="inline-block p-8 bg-primary pixel-corners">
              <span className="text-8xl">🎮</span>
            </div>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black text-primary text-shadow-pixel mb-6">
            MINEWORLD
          </h2>
          
          <p className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-shadow-pixel">
            Приватный Minecraft сервер для настоящих игроков
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="pixel-corners text-xl font-bold bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6"
              onClick={() => scrollToSection('about')}
            >
              <Icon name="Play" className="mr-2" size={24} />
              Узнать больше
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="pixel-corners text-xl font-bold border-4 border-primary bg-primary-foreground/90 text-primary hover:bg-primary-foreground px-8 py-6"
              onClick={() => scrollToSection('contacts')}
            >
              <Icon name="Users" className="mr-2" size={24} />
              Присоединиться
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-16 max-w-md mx-auto">
            {[
              { icon: '🌍', title: 'Огромный мир', desc: 'Бесконечные возможности для исследования' }
            ].map((feature, idx) => (
              <Card key={idx} className="pixel-corners bg-card/90 backdrop-blur p-6 border-4 border-border hover:scale-105 transition-transform">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center py-20 px-4 bg-gradient-to-b from-green-200 to-amber-100">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-primary text-shadow-pixel text-center mb-12">
            О СЕРВЕРЕ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="pixel-corners bg-card border-4 border-primary p-8">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-secondary pixel-corners flex items-center justify-center flex-shrink-0">
                  <Icon name="Zap" size={32} className="text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Производительность</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Мощный сервер с высокой производительностью. Никаких лагов, только комфортная игра 24/7.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="pixel-corners bg-card border-4 border-secondary p-8">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-accent pixel-corners flex items-center justify-center flex-shrink-0">
                  <Icon name="Shield" size={32} className="text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Безопасность</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Защита территорий, приватные сундуки, честная администрация. Ваши постройки в безопасности.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="pixel-corners bg-card border-4 border-accent p-8">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-primary pixel-corners flex items-center justify-center flex-shrink-0">
                  <Icon name="Sparkles" size={32} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Уникальные плагины</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Кастомные механики, новые предметы, квесты и ивенты. Играйте в новый Minecraft!
                  </p>
                </div>
              </div>
            </Card>

            <Card className="pixel-corners bg-card border-4 border-chart-5 p-8">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-chart-5 pixel-corners flex items-center justify-center flex-shrink-0">
                  <Icon name="Heart" size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Дружное комьюнити</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Активное сообщество игроков, готовых помочь новичкам. Заводите друзей и играйте вместе!
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="pixel-corners bg-primary/10 border-4 border-primary p-8 text-center">
            <h3 className="text-3xl font-bold mb-4 text-primary">Системные требования</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div>
                <div className="text-4xl mb-2">📦</div>
                <p className="font-semibold text-lg">Версия</p>
                <p className="text-muted-foreground">1.21.5 Fabric</p>
              </div>
              <div>
                <div className="text-4xl mb-2">🎯</div>
                <p className="font-semibold text-lg">Режим</p>
                <p className="text-muted-foreground">Survival / Creative</p>
              </div>
              <div>
                <div className="text-4xl mb-2">👥</div>
                <p className="font-semibold text-lg">Слотов</p>
                <p className="text-muted-foreground">100 игроков</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="contacts" className="min-h-screen flex items-center py-20 px-4 bg-gradient-to-b from-amber-100 to-orange-200">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-black text-primary text-shadow-pixel text-center mb-12">
            КОНТАКТЫ
          </h2>

          <Card className="pixel-corners bg-card border-4 border-primary p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-block p-6 bg-secondary pixel-corners mb-6">
                <Icon name="Server" size={64} className="text-secondary-foreground" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Как подключиться?</h3>
              <p className="text-muted-foreground text-lg mb-6">
                Хотите подключиться? Присылайте свою заявку по кнопке ниже!
              </p>
              
              <Button 
                size="lg"
                className="pixel-corners text-xl font-bold bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6"
                onClick={() => window.open('https://t.me/@the_mort_helper', '_blank')}
              >
                <Icon name="Users" className="mr-2" size={24} />
                Подключиться к серверу
              </Button>
            </div>

            <div className="border-t-4 border-border pt-8 mt-8">
              <h4 className="text-2xl font-bold mb-6 text-center">Наши социальные сети</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
                <Button 
                  variant="outline" 
                  className="pixel-corners border-4 h-auto py-4 hover:scale-105 transition-transform"
                  onClick={() => window.open('https://t.me/+yYeg2uUR9kQ1ZTBi', '_blank')}
                >
                  <div className="flex flex-col items-center gap-2">
                    <Icon name="Send" size={32} />
                    <span className="font-bold">Telegram</span>
                  </div>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="pixel-corners border-4 h-auto py-4 hover:scale-105 transition-transform"
                >
                  <div className="flex flex-col items-center gap-2">
                    <Icon name="Youtube" size={32} />
                    <span className="font-bold">YouTube</span>
                  </div>
                </Button>
              </div>
            </div>

            <div className="text-center mt-8 p-6 bg-accent/10 pixel-corners">
              <p className="text-sm text-muted-foreground">
                По всем вопросам пишите администрации в Telegram
              </p>
            </div>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8 border-t-4 border-primary-foreground/20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-3xl">⛏️</span>
            <p className="text-xl font-bold">MINEWORLD</p>
          </div>
          <p className="text-primary-foreground/80">
            © 2025 Mineworld Server. Приватный Minecraft сервер.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;