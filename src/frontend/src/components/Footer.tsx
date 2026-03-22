import {
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Recycle,
  Twitter,
} from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Our Process", href: "#process" },
  { label: "Services", href: "#services" },
  { label: "Materials", href: "#materials" },
  { label: "Contact Us", href: "#contact" },
  { label: "About", href: "#about" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const utm = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  );
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-[1100px] mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center">
              <Recycle className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-display font-bold text-xl text-white">
                SAE
              </span>
              <p className="text-[10px] text-gray-400 leading-none mt-0.5">
                Sri Alavattaman Enterprises
              </p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-400">
            Leading collectors and distributors of plastic water bottle
            recyclables since 2008.
          </p>
          <div className="flex gap-3 mt-5">
            {[
              {
                icon: Facebook,
                label: "Facebook",
                href: "https://facebook.com",
              },
              { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
              {
                icon: Linkedin,
                label: "LinkedIn",
                href: "https://linkedin.com",
              },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-full bg-gray-700 hover:bg-brand-green flex items-center justify-center transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display font-bold text-white uppercase tracking-wide text-sm mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold text-white uppercase tracking-wide text-sm mb-4">
            Services
          </h4>
          <ul className="space-y-2">
            {[
              "Plastic Bottle Collection",
              "Material Sorting",
              "Processing & Granulation",
              "Distribution & Logistics",
              "Vendor Onboarding",
            ].map((s) => (
              <li key={s}>
                <span className="text-sm text-gray-400">{s}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-bold text-white uppercase tracking-wide text-sm mb-4">
            Contact
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm text-gray-400">
              <MapPin className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
              112/123, Ottraivadai Street, Sorakayapet, Pallipattu Tk,
              Thiruvallur Dt - 631208
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-400">
              <Phone className="w-4 h-4 text-brand-green" />
              94440 10383 / 96779 60618
            </li>
            <li className="flex items-center gap-2 text-sm text-gray-400">
              <Mail className="w-4 h-4 text-brand-green" />
              srialavattaman@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="max-w-[1100px] mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <span>
            &copy; {year} Sri Alavattaman Enterprises. All rights reserved.
          </span>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${utm}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            Built with ❤️ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
