import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Differentiators } from '@/components/Differentiators';
import { PastPerformance } from '@/components/PastPerformance';
import { Team } from '@/components/Team';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { FloatingCTA } from '@/components/FloatingCTA';
import { PageLoader } from '@/components/PageLoader';

const Index = () => {
  return (
    <>
      <PageLoader />
      <div className="min-h-screen bg-background">
        <Navigation />
        <Hero />
        <About />
        <Services />
        <Differentiators />
        <PastPerformance />
        <Team />
        <Testimonials />
        <Contact />
        <FloatingCTA />
      </div>
    </>
  );
};

export default Index;
