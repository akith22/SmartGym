const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image / Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'linear-gradient(to bottom, rgba(15,15,15,0.7), rgba(15,15,15,0.9)), url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop")',
        }}
      />
      
      <div className="relative section-container text-center flex flex-col items-center z-10 w-full">
        <span className="text-accent uppercase tracking-[0.2em] text-sm font-bold mb-6">
          Push Your Limits
        </span>
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight text-white">
          Transform Your <br />
          <span className="text-accent">Strength</span>
        </h1>
        
        <p className="subheading max-w-2xl mt-4 mb-10 mx-auto">
          Experience professional-grade training and state-of-the-art facilities designed for those who demand elite results.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button className="btn-primary">
            Join Now
          </button>
          <button className="btn-outline">
            View Programs
          </button>
        </div>
        
        <div className="mt-20 flex flex-wrap items-center justify-center gap-12 md:gap-24">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-accent mb-1">24/7</h3>
            <p className="text-xs text-gray-400 uppercase tracking-wider">Access</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-accent mb-1">50+</h3>
            <p className="text-xs text-gray-400 uppercase tracking-wider">Coaches</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-accent mb-1">15K</h3>
            <p className="text-xs text-gray-400 uppercase tracking-wider">Members</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
