import { Button } from "@/components/ui/button";
import { Menu, Recycle, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Our Process", href: "#process" },
  { label: "Services", href: "#services" },
  { label: "Materials", href: "#materials" },
  { label: "Contact Us", href: "#contact" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? "shadow-md" : "shadow-sm"}`}
    >
      <div className="max-w-[1100px] mx-auto px-4 flex items-center justify-between h-16">
        <a
          href="#home"
          className="flex items-center gap-2"
          data-ocid="nav.link"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-green">
            <Recycle className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="font-display font-extrabold text-xl text-brand-green leading-none">
              SAE
            </span>
            <p className="text-[10px] text-gray-500 leading-none mt-0.5 tracking-wide">
              Sri Alavattaman Enterprises
            </p>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-brand-green transition-colors"
              data-ocid="nav.link"
            >
              {link.label}
            </a>
          ))}
          <a href="#vendor-form">
            <Button
              className="rounded-full bg-brand-green hover:bg-brand-green-dark text-white uppercase text-xs tracking-widest px-5"
              data-ocid="nav.primary_button"
            >
              Get a Quote
            </Button>
          </a>
        </nav>

        <button
          type="button"
          className="lg:hidden p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-3 gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-gray-700 hover:text-brand-green py-1"
                  data-ocid="nav.link"
                >
                  {link.label}
                </a>
              ))}
              <Button
                className="w-full rounded-full bg-brand-green hover:bg-brand-green-dark text-white uppercase text-xs tracking-widest"
                onClick={() => {
                  setMenuOpen(false);
                  document
                    .getElementById("vendor-form")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get a Quote
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
