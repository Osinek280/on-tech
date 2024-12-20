import Accessories from "@/components/accessories";
import Comparison from "@/components/comparison";
import ContactForm from "@/components/contactForm";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import PricingCalculator from "@/components/PricingCalculator";
import { classicCaps, classicConnectors, softlineCaps, softlineConnectors } from "@/constants";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Comparison />
      <Accessories title="Akcesoria dla Classic" connectors={classicConnectors} caps={classicCaps} />
      <Accessories title="Akcesoria dla Classic" connectors={softlineConnectors} caps={softlineCaps} />
      <PricingCalculator />
      <ContactForm />
      <Footer />
    </div>
  );
}