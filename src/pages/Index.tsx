import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import UpcomingDrives from "@/components/UpcomingDrives";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <div id="services">
          <Services />
        </div>
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <div id="upcoming-drives">
          <UpcomingDrives />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
