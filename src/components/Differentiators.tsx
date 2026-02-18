import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { Award, Users, Settings, FileCheck, Star, CheckCircle } from 'lucide-react';
import diffImage from '@/assets/differentiators.png';

export function Differentiators() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const differentiators = [
    { icon: Award, title: 'Certified Leadership', description: 'Owned & operated by a Certified Safety Professional (CSP) with 16+ years of industry experience', color: 'from-blue-500 to-blue-600' },
    { icon: Users, title: 'Field-Proven Experts', description: 'Field-proven EHS consultants across high-risk industries', color: 'from-emerald-500 to-emerald-600' },
    { icon: Settings, title: 'Customizable Programs', description: 'Customizable safety training and site-specific management programs', color: 'from-purple-500 to-purple-600' },
    { icon: FileCheck, title: 'GSA MAS Contract', description: 'Active GSA MAS Contract: 47QRAA25D000N (valid through 2044)', color: 'from-orange-500 to-orange-600' },
    { icon: Star, title: 'Proven Track Record', description: 'Proven record with major clients including SunPower & AIM Mechanical', color: 'from-pink-500 to-pink-600' },
    { icon: CheckCircle, title: 'Compliance Expertise', description: 'Expertise in OSHA, ISO 14001, and API compliance frameworks', color: 'from-teal-500 to-teal-600' },
  ];

  return (
    <section id="differentiators" ref={ref} className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            What Sets <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">Us Apart</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-green-600 mx-auto rounded-full mb-6" />
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Industry-leading expertise and proven results that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={diffImage}
                alt="Safety Professional Welding"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <div className="order-1 lg:order-2 space-y-4">
            {differentiators.map((diff, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-slate-50 rounded-xl p-6 hover:bg-card hover:shadow-lg transition-all duration-300 border border-slate-100"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${diff.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <diff.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">{diff.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{diff.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
