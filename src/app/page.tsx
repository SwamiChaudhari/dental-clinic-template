import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStats from "@/components/TrustStats";
import AboutDentist from "@/components/AboutDentist";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Appointment from "@/components/Appointment";
import Insurance from "@/components/Insurance";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStats />
        <AboutDentist />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Appointment />
        <Insurance />
        <FAQ />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
