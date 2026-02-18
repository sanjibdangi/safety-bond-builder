import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { Shield, Award, Target, TrendingUp } from 'lucide-react';
import { CompanyTimeline } from './CompanyTimeline';

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const features = [
    { icon: Shield, title: 'Expert Protection', description: 'Comprehensive EHS solutions' },
    { icon: Award, title: 'Certified Team', description: 'Led by CSPs with proven expertise' },
    { icon: Target, title: 'Compliance Focus', description: 'OSHA, ISO, and API standards' },
    { icon: TrendingUp, title: 'Continuous Growth', description: 'Driving operational improvement' },
  ];

  return (
    <section id="about" ref={ref} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">Corr Safety</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-green-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card rounded-2xl p-8 shadow-xl border border-slate-100">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <span className="font-semibold text-emerald-600">Corr Safety Professionals Inc</span>, founded in{' '}
                <span className="font-semibold">2018</span> and based in{' '}
                <span className="font-semibold">Pennsylvania</span>, provides expert Environmental, Health, and Safety
                (EHS) solutions for construction, energy, and industrial sectors.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Led by Certified Safety Professionals (CSPs), the firm specializes in site safety staffing, training,
                technical audits, compliance program development, and hazard assessments, helping clients manage risk
                and ensure regulatory compliance.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                The company supports <span className="font-semibold text-emerald-600">OSHA 1910/1926</span>,{' '}
                <span className="font-semibold text-emerald-600">ISO 14001</span>, and{' '}
                <span className="font-semibold text-emerald-600">API standards</span>, delivering practical,
                data-driven safety strategies that foster strong safety cultures.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-6 text-white hover:scale-105 transition-transform duration-300"
              >
                <feature.icon className="w-10 h-10 mb-4" />
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-emerald-100 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <CompanyTimeline />
      </div>
    </section>
  );
}
