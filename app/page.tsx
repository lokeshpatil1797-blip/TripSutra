import Navbar from '@/components/Navbar';
import SpecialOfferBanner from '@/components/SpecialOfferBanner';
import Hero from '@/components/Hero';
import GroupCalculator from '@/components/GroupCalculator';
import WhyGroupTravel from '@/components/WhyGroupTravel';
import About from '@/components/About';
import Destinations from '@/components/Destinations';
import Packages from '@/components/Packages';
import Experiences from '@/components/Experiences';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <SpecialOfferBanner />
      <Navbar />
      <Hero />
      <WhyGroupTravel />
      <GroupCalculator />
      <Packages />
      <About />
      <Destinations />
      <Experiences />
      <Gallery />
      <Testimonials />
      <Blog />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
