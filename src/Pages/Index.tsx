import Header from "../components/Header";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import About from "../components/About";
import Projects from "../components/Project";
import Testimonials from "../components/Testimonials";
import Features from "../components/Features";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Projects />
      <Stats />
      <Services />
      <About />
      <Testimonials />
      <Features />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;