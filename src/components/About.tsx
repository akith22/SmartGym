import { CheckCircle2, Dumbbell } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-primary">
      <div className="section-container flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <span className="inline-block px-4 py-1.5 rounded-full border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-6">
            Our Mission
          </span>
          <h2 className="heading-primary mb-6">
            Pushing Limits, <br />
            <span className="text-accent">Defining Strength</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            At Fitness Sports Center, our mission is to empower individuals to reach their peak physical potential through elite coaching, state-of-the-art facilities, and a community driven by strength and discipline. We don't just provide a gym; we provide a high-performance environment where athletes and enthusiasts alike transform their ambition into reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-accent" size={24} />
              <span className="font-bold text-white">Certified Elite Coaches</span>
            </div>
            <div className="flex items-center gap-3">
              <Dumbbell className="text-accent" size={24} />
              <span className="font-bold text-white">Pro-Grade Equipment</span>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 w-full relative">
          <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full transform -translate-x-1/2 -translate-y-1/2 mt-20 ml-20" />
          <img 
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop" 
            alt="Athletes training" 
            className="rounded-2xl shadow-soft object-cover w-full h-[600px] border border-white/5 relative z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
