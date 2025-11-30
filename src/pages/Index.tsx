import { Navbar } from "@/components/Navbar";
import { WelcomeSection } from "@/components/WelcomeSection";
import { EngineeringSection } from "@/components/EngineeringSection";
import { MobilitySection } from "@/components/MobilitySection";
import { ProfessionalSection } from "@/components/ProfessionalSection";
import { ExtracurricularSection } from "@/components/ExtracurricularSection";
import { SportsSection } from "@/components/SportsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <WelcomeSection />
        <EngineeringSection />
        <MobilitySection />
        <ProfessionalSection />
        <ExtracurricularSection />
        <SportsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
