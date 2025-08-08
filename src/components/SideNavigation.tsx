import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const SideNavigation = () => {
  const [activeSection, setActiveSection] = useState('inicio');

  const navItems = [
    { id: 'inicio', label: 'Inicio', color: 'bg-primary' },
    { id: 'productos', label: 'Productos', color: 'bg-secondary' },
    { id: 'nosotros', label: 'Quiénes Somos', color: 'bg-accent' },
    { id: 'contacto', label: 'Contacto', color: 'bg-primary' }
  ];

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block">
      <nav className="flex flex-col space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`
              group relative flex items-center transition-all duration-300 hover:scale-110
              ${activeSection === item.id ? 'scale-110' : ''}
            `}
            aria-label={`Ir a sección ${item.label}`}
          >
            {/* Color indicator */}
            <div 
              className={`
                w-1 h-12 rounded-full transition-all duration-300
                ${item.color}
                ${activeSection === item.id ? 'opacity-100 shadow-lg' : 'opacity-60'}
              `}
            />
            
            {/* Label */}
            <div 
              className={`
                absolute right-6 top-1/2 transform -translate-y-1/2
                bg-background/95 backdrop-blur-sm border border-border/50 rounded-lg
                px-4 py-2 shadow-lg transition-all duration-300
                ${activeSection === item.id 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                }
              `}
            >
              <span className="text-sm font-medium text-foreground whitespace-nowrap">
                {item.label}
              </span>
              
              {/* Arrow */}
              <ChevronRight 
                className={`
                  w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2
                  text-muted-foreground
                  ${activeSection === item.id ? 'text-primary' : ''}
                `} 
              />
            </div>

            {/* Active indicator dot */}
            {activeSection === item.id && (
              <div 
                className={`
                  absolute -left-2 top-1/2 transform -translate-y-1/2
                  w-3 h-3 rounded-full ${item.color} 
                  shadow-lg animate-pulse
                `}
              />
            )}
          </button>
        ))}
      </nav>

      {/* Decorative element */}
      <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent via-background/5 to-transparent rounded-full blur-xl" />
    </div>
  );
};

export default SideNavigation;