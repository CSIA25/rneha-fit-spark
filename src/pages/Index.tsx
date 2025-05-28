
import Navbar from '../components/navigation/Navbar';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Footer from '../components/sections/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <About />
        <Services />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
