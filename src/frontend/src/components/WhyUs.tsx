import { CheckCircle2, DollarSign, Headphones, Leaf } from "lucide-react";
import { motion } from "motion/react";

const VALUE_PROPS = [
  {
    icon: CheckCircle2,
    title: "Reliability",
    desc: "Consistent supply and delivery schedules you can count on. We maintain buffer stock and backup logistics to meet commitments.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    desc: "Every kilogram we process reduces landfill burden. Our operations are certified and aligned with circular economy goals.",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    desc: "Market-linked pricing with transparent volume discounts. We work with vendors on long-term contracts that benefit both parties.",
  },
  {
    icon: Headphones,
    title: "Vendor Support",
    desc: "Dedicated account managers, 24-hour response SLA, and onboarding support for new supplier partners.",
  },
];

export function WhyUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1100px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-brand-green uppercase tracking-[0.25em] text-xs font-semibold mb-3">
            Our Advantage
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl uppercase text-gray-900">
            Why Work With Us
          </h2>
          <div className="w-16 h-1 bg-brand-green mx-auto mt-4" />
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Trusted by vendors across the region for our professionalism,
            consistency, and commitment to sustainable recycling.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUE_PROPS.map((vp, i) => (
            <motion.div
              key={vp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 rounded-xl border border-gray-100 hover:border-green-200 hover:bg-green-50/30 transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-brand-mint flex items-center justify-center mx-auto mb-4 group-hover:bg-green-100 transition-colors">
                <vp.icon className="w-7 h-7 text-brand-green" />
              </div>
              <h3 className="font-display font-bold uppercase tracking-wide text-gray-900 mb-2">
                {vp.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{vp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
