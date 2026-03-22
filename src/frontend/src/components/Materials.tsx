import { motion } from "motion/react";

const MATERIAL_TYPES = [
  {
    code: "PET #1",
    name: "Polyethylene Terephthalate",
    use: "Clear beverage bottles, water bottles",
    color: "Clear / Light Blue",
  },
  {
    code: "HDPE #2",
    name: "High-Density Polyethylene",
    use: "Opaque water jugs, caps",
    color: "White / Translucent",
  },
  {
    code: "PP #5",
    name: "Polypropylene",
    use: "Bottle caps, closures",
    color: "Various",
  },
];

export function Materials() {
  return (
    <section id="materials" className="py-20 bg-white">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand-green uppercase tracking-[0.25em] text-xs font-semibold mb-3">
              What We Accept
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl uppercase text-gray-900 mb-4">
              Materials
            </h2>
            <div className="w-16 h-1 bg-brand-green mb-6" />
            <p className="text-gray-600 leading-relaxed mb-4">
              Sri Alavattaman Enterprises specialises in the collection and
              processing of plastic water bottle recyclables. We accept a range
              of resin codes and work with vendors to ensure clean, high-quality
              feedstock enters our supply chain.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our team provides vendor guidance on sorting requirements,
              contamination standards, and bale specifications to maximise the
              value of your material.
            </p>
            <div className="space-y-3">
              {MATERIAL_TYPES.map((mat) => (
                <div
                  key={mat.code}
                  className="flex items-start gap-4 p-4 rounded-lg bg-brand-mint border border-green-100"
                >
                  <span className="font-display font-bold text-brand-green text-sm min-w-[60px]">
                    {mat.code}
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">
                      {mat.name}
                    </p>
                    <p className="text-gray-500 text-xs mt-0.5">
                      {mat.use} · {mat.color}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/assets/generated/materials-pet-bottles.dim_600x400.jpg"
                alt="PET plastic water bottles for recycling"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                { value: "500+", label: "Vendor Partners" },
                { value: "99%", label: "Purity Rate" },
                { value: "10K+", label: "Tonnes / Month" },
                { value: "15+", label: "Years Experience" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-brand-mint rounded-xl p-4 text-center"
                >
                  <p className="font-display font-bold text-3xl text-brand-green">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-600 mt-1 uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
