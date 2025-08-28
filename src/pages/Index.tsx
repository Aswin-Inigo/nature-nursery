import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PlantSection from "@/components/PlantSection";
import PlantCare from "@/components/PlantCare";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PlantSection />
        <PlantCare />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
