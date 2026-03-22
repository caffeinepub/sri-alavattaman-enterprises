import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="py-20 bg-brand-mint">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-brand-green uppercase tracking-[0.25em] text-xs font-semibold mb-3">
              Our Story
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl uppercase text-gray-900 mb-4">
              About Us
            </h2>
            <div className="w-16 h-1 bg-brand-green mb-6" />
            <p className="text-gray-700 leading-relaxed mb-4">
              Sri Alavattaman Enterprises was founded with a singular mission:
              to build a reliable, sustainable infrastructure for plastic bottle
              recycling across South India. Over 15 years, we have grown from a
              small collection point to a full-service recycling and
              distribution enterprise.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We work at every link of the plastics recycling value chain —
              collecting post-consumer bottles from households, businesses, and
              municipalities; processing them to the highest purity standards;
              and distributing the output to manufacturers who rely on quality
              recycled feedstock.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our commitment to quality, environmental responsibility, and
              vendor relationships has made SAE a trusted name for buyers and
              suppliers alike.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { value: "2008", label: "Founded" },
              { value: "15+", label: "Years of Experience" },
              { value: "500+", label: "Active Vendor Partners" },
              { value: "10K+", label: "Tonnes Processed / Month" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-xl p-6 shadow-card text-center"
              >
                <p className="font-display font-extrabold text-4xl text-brand-green">
                  {stat.value}
                </p>
                <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
