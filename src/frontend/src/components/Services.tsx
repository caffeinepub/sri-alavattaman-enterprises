import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, PackageCheck, SortAsc, Truck } from "lucide-react";
import { motion } from "motion/react";

const SERVICES = [
  {
    icon: PackageCheck,
    title: "Plastic Bottle Collection",
    desc: "We run a wide-area collection network for post-consumer and post-industrial PET/HDPE plastic water bottles, ensuring a consistent and high-volume supply.",
    points: [
      "Scheduled vendor pickups",
      "Bulk collection centers",
      "Compliance-first handling",
    ],
  },
  {
    icon: SortAsc,
    title: "Material Sorting & Processing",
    desc: "State-of-the-art sorting and processing facilities separate, wash, and granulate plastics to industry-grade standards, maximizing purity and downstream value.",
    points: [
      "NIR optical sorting",
      "Multi-grade separation",
      "Quality-graded output",
    ],
  },
  {
    icon: Truck,
    title: "Distribution & Logistics",
    desc: "Our logistics network ensures that processed recyclables reach manufacturers on schedule — with full traceability from collection point to delivery.",
    points: [
      "Nationwide delivery network",
      "Real-time tracking",
      "Flexible volume contracts",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-brand-mint">
      <div className="max-w-[1100px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-brand-green uppercase tracking-[0.25em] text-xs font-semibold mb-3">
            What We Offer
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl uppercase text-gray-900">
            Our Services
          </h2>
          <div className="w-16 h-1 bg-brand-green mx-auto mt-4" />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <Card className="h-full shadow-card border-0 hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-full bg-brand-mint flex items-center justify-center mb-3">
                    <svc.icon className="w-6 h-6 text-brand-green" />
                  </div>
                  <CardTitle className="font-display font-bold uppercase text-base tracking-wide text-gray-900">
                    {svc.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {svc.desc}
                  </p>
                  <ul className="space-y-1.5">
                    {svc.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
