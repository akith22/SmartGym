import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    setIsMobileOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      // small delay to let the page load before scrolling
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-[0px] left-[0px] w-full z-50 bg-[#211d11]/90 backdrop-blur-md border-b border-[#d49e16]/20">
      <div className="flex items-center justify-between whitespace-nowrap px-[24px] py-[16px] lg:px-[80px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-[12px]">
          <img
            alt="Fitness Sports Center Logo"
            className="h-[32px] w-auto object-contain"
            src="/logo.jpg"
          />
          <h2 className="text-[#f1f5f9] text-[20px] leading-[28px] font-bold tracking-[-0.015em]">
            Fitness Sports Center
          </h2>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-end gap-[32px] items-center">
          <nav className="flex items-center gap-[36px]">
            <button onClick={() => scrollToSection('home')} className="text-[#f1f5f9] hover:text-[#d49e16] text-[14px] leading-[20px] font-medium transition-colors duration-300">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-[#f1f5f9] hover:text-[#d49e16] text-[14px] leading-[20px] font-medium transition-colors duration-300">About</button>
            <button onClick={() => scrollToSection('services')} className="text-[#f1f5f9] hover:text-[#d49e16] text-[14px] leading-[20px] font-medium transition-colors duration-300">Services</button>
            <Link to="/contact" className="text-[#f1f5f9] hover:text-[#d49e16] text-[14px] leading-[20px] font-medium transition-colors duration-300">Contact</Link>
          </nav>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-[9999px] w-[40px] h-[40px] border-2 border-[#d49e16]/30"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA_hxMfjar2QNV1kPQvt6kMwutIC1CvYaIHjX5mjBHmz0MkrFYaNe47ipz_aHsSjRVH6wFTrjaLFT3dnswF0L-6oo0R0seSZsSMdHYmmoC9737x1mJx0neyVbDHqazPVms-QDlcosbB_kKI933C-LTGiICqY0xLyBTXFOO_yRh46Gtafgdne5qn32AHfMbkUfmd4XT-gSFdel2Na_NGpzpGS69uhCOVBWjG_s5qgOjzYyB-YtMbhYdWJoeA6UBJ-_jVUIU_gTtvCs0")' }}
          ></div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-[40px] h-[40px] gap-[6px] group"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle mobile menu"
        >
          <span className={`block w-[24px] h-[2px] bg-[#f1f5f9] transition-all duration-300 ${isMobileOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
          <span className={`block w-[24px] h-[2px] bg-[#f1f5f9] transition-all duration-300 ${isMobileOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-[24px] h-[2px] bg-[#f1f5f9] transition-all duration-300 ${isMobileOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileOpen ? 'max-h-[300px] opacity-100' : 'max-h-[0px] opacity-0'}`}>
        <nav className="flex flex-col bg-[#211d11] border-t border-[#d49e16]/10 px-[24px] pb-[16px] pt-[8px] gap-[4px]">
          <button onClick={() => scrollToSection('home')} className="text-left text-[#f1f5f9] hover:text-[#d49e16] text-[15px] font-medium py-[10px] border-b border-[#d49e16]/10 transition-colors duration-200">Home</button>
          <button onClick={() => scrollToSection('about')} className="text-left text-[#f1f5f9] hover:text-[#d49e16] text-[15px] font-medium py-[10px] border-b border-[#d49e16]/10 transition-colors duration-200">About</button>
          <button onClick={() => scrollToSection('services')} className="text-left text-[#f1f5f9] hover:text-[#d49e16] text-[15px] font-medium py-[10px] border-b border-[#d49e16]/10 transition-colors duration-200">Services</button>
          <Link to="/contact" onClick={() => setIsMobileOpen(false)} className="text-[#f1f5f9] hover:text-[#d49e16] text-[15px] font-medium py-[10px] transition-colors duration-200">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
