import { Link } from 'react-router-dom';
import { Trophy, Camera, Play } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#151515] py-16 border-t border-white/5">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
               <div className="w-8 h-8 bg-[#fbbf24]/10 rounded flex items-center justify-center">
                 <div className="w-5 h-5 bg-accent rounded-sm"></div>
               </div>
              <span className="text-lg font-bold tracking-tight text-white">Fitness Sports Center</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              The ultimate destination for those who demand excellence from their training. Elite coaching, premium equipment, and a results-driven environment.
            </p>
          </div>
          
          <div className="lg:ml-auto">
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/#programs" className="text-gray-400 hover:text-accent text-sm transition-colors">Our Programs</Link></li>
              <li><Link to="/#coaches" className="text-gray-400 hover:text-accent text-sm transition-colors">Coaches</Link></li>
              <li><Link to="/#pricing" className="text-gray-400 hover:text-accent text-sm transition-colors">Pricing Plans</Link></li>
              <li><Link to="/#gallery" className="text-gray-400 hover:text-accent text-sm transition-colors">Gym Gallery</Link></li>
            </ul>
          </div>
          
          <div className="lg:ml-auto">
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/privacy" className="text-gray-400 hover:text-accent text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-accent text-sm transition-colors">Terms of Service</Link></li>
              <li><Link to="/rules" className="text-gray-400 hover:text-accent text-sm transition-colors">Member Rules</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-accent text-sm transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 text-xs">
            © 2024 Fitness Sports Center. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-gray-400 hover:text-accent hover:bg-white/5 transition-colors">
              <Trophy size={16} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-gray-400 hover:text-accent hover:bg-white/5 transition-colors">
              <Camera size={16} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-gray-400 hover:text-accent hover:bg-white/5 transition-colors">
              <Play size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
