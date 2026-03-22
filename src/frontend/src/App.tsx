import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LiveChat } from "@/components/LiveChat";
import { Materials } from "@/components/Materials";
import { Navbar } from "@/components/Navbar";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { VendorPartnership } from "@/components/VendorPartnership";
import { WhyUs } from "@/components/WhyUs";
import { Toaster } from "@/components/ui/sonner";

export default function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Process />
        <Services />
        <Materials />
        <WhyUs />
        <VendorPartnership />
        <Contact />
        <About />
      </main>
      <Footer />
      <LiveChat />
    </>
  );
}
