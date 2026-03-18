import { Link, useLocation } from 'react-router-dom';
import { User, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // According to design home_page: Home | About | Services | Contact | User Icon
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Services', path: '/#services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-primary/95 backdrop-blur-md border-b border-white/5 py-4">
      <div className="section-container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#fbbf24]/10 rounded flex items-center justify-center">
            <div className="w-6 h-6 bg-accent rounded-sm opacity-90 group-hover:scale-105 transition-transform duration-300"></div>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Fitness Sports Center</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`hover:text-accent transition-colors ${
                location.pathname === link.path && !link.path.includes('#') ? 'text-accent' : 'text-gray-300'
              }`}
              onClick={() => {
                if(link.path.includes('#')) {
                   const element = document.getElementById(link.path.split('#')[1]);
                   if(element) element.scrollIntoView({behavior: 'smooth'});
                }
              }}
            >
              {link.name}
            </Link>
          ))}
          
          <button className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent hover:bg-accent hover:text-primary transition-colors duration-300">
            <User size={18} />
          </button>
        </div>

        <button 
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-secondary py-4 px-6 border-b border-white/5 shadow-soft">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-300 hover:text-accent font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button className="btn-primary mt-4 w-full text-center">
              Login / Profile
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
