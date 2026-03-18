import { Dumbbell, Users, Activity, Apple, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Users size={20} className="text-accent" />,
    title: 'Personal Training',
    desc: 'One-on-one elite coaching focused on your specific mechanical needs and performance goals.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop',
  },
  {
    icon: <Dumbbell size={20} className="text-accent" />,
    title: 'Strength Training',
    desc: 'Advanced weightlifting and powerlifting programs designed to build raw power and solid foundation.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop',
  },
  {
    icon: <Activity size={20} className="text-accent" />,
    title: 'Cardio Programs',
    desc: 'High-intensity endurance training to maximize metabolic rate and improve cardiovascular efficiency.',
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=2069&auto=format&fit=crop',
  },
  {
    icon: <Apple size={20} className="text-accent" />,
    title: 'Nutrition Guidance',
    desc: 'Custom meal and fuel plans tailored to your biometric data and training volume.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-primary px-4 sm:px-6 lg:px-8">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="heading-primary mb-4 text-3xl md:text-5xl">Our Premium Services</h2>
            <p className="text-gray-400 max-w-2xl text-lg">
              Tailored performance programs designed to help you dominate your fitness goals. From heavy lifts to precision nutrition, we have everything you need to succeed.
            </p>
          </div>
          <Link to="/#services" className="flex items-center gap-2 text-accent font-bold hover:gap-3 transition-all whitespace-nowrap">
            View All Services <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-secondary rounded-2xl overflow-hidden border border-white/5 hover:border-accent/40 hover:-translate-y-2 transition-all duration-300 group flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  {service.icon}
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow text-left">
                  {service.desc}
                </p>
                <Link to="/#services" className="text-accent text-sm font-bold uppercase tracking-wider flex items-center gap-1 hover:gap-2 transition-all group-hover:text-amber-400 w-fit">
                  LEARN MORE &rsaquo;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
