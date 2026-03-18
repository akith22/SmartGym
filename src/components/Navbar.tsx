import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#d49e16]/20 px-[24px] py-[16px] lg:px-[80px] bg-[#211d11] sticky top-[0px] z-50">
      <Link to="/" className="flex items-center gap-[16px] text-[#d49e16]">
        <div className="w-[32px] h-[32px]">
          <img 
            alt="Fitness Sports Center Logo" 
            className="w-full h-full object-contain" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoX4FktdFvQTsa3uT7vVctSHuxBXU30HezGiu5m7oQZuMjNPfeFqsWjQ0rsZM5jTLTTkhu5CJheWlZNHO8EjOUytRDFAhWXgz-K-EL1cNEChjGeWLy7BRxgaH0DYNqC_rByaeDSwlMLulBLVI4dDr9_3CxPgCNqMj5-QOCCRC9G63moM_vZYcYYeQPxFLpsMnlwWAl2WbU2Egq36RyryDrDXsdP6EK0RyMY_A9UHBotlc6oMY8RZ0Uzi3T2YP7PxV2nG6wNFCyjeY" 
          />
        </div>
        <h2 className="text-[#f1f5f9] text-[20px] leading-[28px] font-bold tracking-[-0.015em]">
          Fitness Sports Center
        </h2>
      </Link>
      <div className="flex flex-1 justify-end gap-[32px]">
        <nav className="hidden md:flex items-center gap-[36px]">
          <Link to="/" className="text-[#f1f5f9] hover:text-[#d49e16] text-[14px] leading-[20px] font-medium transition-colors">Home</Link>
          <a href="#about" className="text-[#f1f5f9] hover:text-[#d49e16] text-[14px] leading-[20px] font-medium transition-colors">About</a>
          <a href="#services" className="text-[#f1f5f9] hover:text-[#d49e16] text-[14px] leading-[20px] font-medium transition-colors">Services</a>
          <Link to="/contact" className="text-[#f1f5f9] hover:text-[#d49e16] text-[14px] leading-[20px] font-medium transition-colors">Contact</Link>
        </nav>
        <div className="flex items-center gap-[16px]">
          <button className="bg-[#d49e16] text-[#211d11] px-[16px] py-[8px] rounded-[8px] text-[14px] leading-[20px] font-bold md:hidden">Join</button>
          <div 
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-[9999px] w-[40px] h-[40px] border-2 border-[#d49e16]/30" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA_hxMfjar2QNV1kPQvt6kMwutIC1CvYaIHjX5mjBHmz0MkrFYaNe47ipz_aHsSjRVH6wFTrjaLFT3dnswF0L-6oo0R0seSZsSMdHYmmoC9737x1mJx0neyVbDHqazPVms-QDlcosbB_kKI933C-LTGiICqY0xLyBTXFOO_yRh46Gtafgdne5qn32AHfMbkUfmd4XT-gSFdel2Na_NGpzpGS69uhCOVBWjG_s5qgOjzYyB-YtMbhYdWJoeA6UBJ-_jVUIU_gTtvCs0")' }}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
