const Footer = () => {
  return (
    <footer className="border-t border-[#3d3623] bg-[#211d11] pt-[64px] pb-[32px] mt-auto w-full">
      <div className="max-w-[1280px] mx-auto px-[16px] md:px-[40px] grid grid-cols-1 md:grid-cols-4 gap-[48px] mb-[48px]">
        <div className="col-span-1 md:col-span-2 flex flex-col gap-[16px]">
          <div className="flex items-center gap-[12px] text-[#d49e16] mb-[24px]">
            <span className="material-symbols-outlined text-[30px] leading-[36px]">fitness_center</span>
            <h2 className="text-[#f1f5f9] text-[20px] leading-[28px] font-bold tracking-tight">Fitness Sports Center</h2>
          </div>
          <p className="text-[#c8b993] max-w-[448px]">
            The ultimate destination for those who demand excellence from their training. Elite coaching, premium equipment, and a results-driven environment.
          </p>
        </div>
        <div>
          <h4 className="text-[#f1f5f9] font-bold mb-[24px]">Quick Links</h4>
          <ul className="space-y-[16px] text-[#c8b993] text-[14px] leading-[20px]">
            <li><a className="hover:text-[#d49e16]" href="#">Our Programs</a></li>
            <li><a className="hover:text-[#d49e16]" href="#">Coaches</a></li>
            <li><a className="hover:text-[#d49e16]" href="#">Pricing Plans</a></li>
            <li><a className="hover:text-[#d49e16]" href="#">Gym Gallery</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[#f1f5f9] font-bold mb-[24px]">Support</h4>
          <ul className="space-y-[16px] text-[#c8b993] text-[14px] leading-[20px]">
            <li><a className="hover:text-[#d49e16]" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-[#d49e16]" href="#">Terms of Service</a></li>
            <li><a className="hover:text-[#d49e16]" href="#">Member Rules</a></li>
            <li><a className="hover:text-[#d49e16]" href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto px-[16px] md:px-[40px] pt-[32px] border-t border-[#3d3623]/50 flex flex-col md:flex-row justify-between items-center gap-[16px]">
        <p className="text-[#c8b993] text-[12px] leading-[16px]">© 2024 Fitness Sports Center. All rights reserved. Built for performance.</p>
        <div className="flex gap-[24px]">
          <a className="text-[#c8b993] hover:text-[#d49e16]" href="#"><span className="material-symbols-outlined">social_leaderboard</span></a>
          <a className="text-[#c8b993] hover:text-[#d49e16]" href="#"><span className="material-symbols-outlined">camera_enhance</span></a>
          <a className="text-[#c8b993] hover:text-[#d49e16]" href="#"><span className="material-symbols-outlined">smart_display</span></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
