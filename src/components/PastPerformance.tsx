import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';

export function PastPerformance() {
  const [ref, isInView] = useInView();

  const industries = [
    'High-Rise Construction', 'Data Centers', 'Solar Farms', 'Manufacturing Plants',
    'Hospitals & Healthcare', 'Educational Facilities', 'Transportation Infrastructure', 'Oil & Gas Operations',
  ];

  const performanceCards = [
    {
      logo: "/gsa.png",
      title: "General Services Administration (FAS)",
      description:
        "Provided safety and engineering support services under GSA MAS contract.",
    },
    {
      logo: "/sunpower.png",
      title: "SunPower Corporation",
      description:
        "Delivered on-site safety management for renewable energy projects, including training and daily oversight.",
    },
    {
      logo: "/aim.png",
      title: "AIM Mechanical Services, LLC",
      description:
        "Developed HSE manuals, delivered training, and provided long-term field safety audits and compliance support.",
    },
  ];

  return (
    <section id='performance' ref={ref} className="py-16 md:py-20 bg-[#A3A2A3]/30 scroll-mt-24">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Past <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">Performance</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Proven track record across diverse industries and project scales
          </p>
        </motion.div>

        {/* ⭐ PERFORMANCE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {performanceCards.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="
                group
                bg-white
                border border-slate-200
                rounded-2xl
                p-8
                text-center
                shadow-md
                transition-all duration-300
                hover:shadow-2xl hover:-translate-y-1
                active:scale-95
              "
            >
              {/* Logo */}
              <div className="flex justify-center mb-6">
                <img
                  src={item.logo}
                  alt={item.title}
                  className="
                    w-28 h-28
                    rounded-full
                    object-cover
                    transition-all duration-500

                    md:grayscale
                    md:group-hover:grayscale-0

                    group-hover:scale-105
                  "
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-emerald-700 mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-slate-700 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Industry Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-emerald-50 to-emerald-100 border border-emerald-200 rounded-2xl p-8 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Industry Expertise
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                className="bg-card border border-emerald-200 rounded-lg px-4 py-3 text-center text-slate-700 hover:border-emerald-500 hover:text-emerald-600 hover:shadow-md transition-all duration-300"
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
