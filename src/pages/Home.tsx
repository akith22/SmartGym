import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <main className="flex-1">
      <Hero />
      <About />
      <Services />
      <CTA />
    </main>
  );
};

export default Home;
