import {
  ChevronRight,
  PackageCheck,
  Recycle,
  SortAsc,
  Truck,
} from "lucide-react";
import { motion } from "motion/react";

const PROCESS_STEPS = [
  {
    icon: PackageCheck,
    step: "01",
    title: "Collection",
    desc: "We collect sorted plastic water bottles from vendors, municipalities, and collection centers across the supply chain.",
  },
  {
    icon: SortAsc,
    step: "02",
    title: "Sorting",
    desc: "Advanced sorting lines separate PET and HDPE materials by color and grade to maximize market value.",
  },
  {
    icon: Recycle,
    step: "03",
    title: "Processing",
    desc: "Bottles are cleaned, shredded, and granulated into flakes or pellets ready for downstream manufacturing.",
  },
  {
    icon: Truck,
    step: "04",
    title: "Distribution",
    desc: "Processed material is packaged and shipped to manufacturers, ensuring timely and reliable delivery.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-[1100px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-brand-green uppercase tracking-[0.25em] text-xs font-semibold mb-3">
            How We Work
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl uppercase text-gray-900">
            Our Process
          </h2>
          <div className="w-16 h-1 bg-brand-green mx-auto mt-4" />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-card hover:shadow-md transition-shadow h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-display font-extrabold text-4xl text-gray-100">
                    {step.step}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-brand-mint flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-brand-green" />
                  </div>
                </div>
                <h3 className="font-display font-bold text-lg uppercase tracking-wide text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
              {i < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 z-10">
                  <ChevronRight className="w-5 h-5 text-brand-green" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
