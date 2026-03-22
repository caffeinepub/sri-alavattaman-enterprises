import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "url('/assets/generated/hero-recycling.dim_1400x700.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-green-400 uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Sri Alavattaman Enterprises
          </p>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl uppercase tracking-tight leading-tight mb-6">
            Turning Waste
            <br />
            Into Resources
          </h1>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
            Leading collectors and distributors of plastic water bottle
            recyclables. Reliable supply chains for vendors across the region.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#vendor-form">
              <Button
                size="lg"
                className="rounded-full bg-brand-green hover:bg-brand-green-dark text-white uppercase tracking-widest text-sm px-8"
                data-ocid="hero.primary_button"
              >
                Become a Partner
              </Button>
            </a>
            <a href="#services">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-white text-white hover:bg-white hover:text-brand-green uppercase tracking-widest text-sm px-8 bg-transparent"
                data-ocid="hero.secondary_button"
              >
                Our Services
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
        <ChevronRight className="w-6 h-6 rotate-90" />
      </div>
    </section>
  );
}
