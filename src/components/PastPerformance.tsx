import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { Building2, Sun, Wrench } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

export function PastPerformance() {
  const [ref, isInView] = useInView();

  const projects = [
    { icon: Building2, title: 'Commercial Construction', value: 150, suffix: '+', description: 'Major projects completed', iconBg: 'bg-emerald-500/10', iconColor: 'text-emerald-500' },
    { icon: Sun, title: 'Solar & Renewable Energy', value: 75, suffix: '+', description: 'Clean energy sites managed', iconBg: 'bg-amber-500/10', iconColor: 'text-amber-500' },
    { icon: Wrench, title: 'Industrial & Infrastructure', value: 200, suffix: '+', description: 'Critical facilities secured', iconBg: 'bg-blue-500/10', iconColor: 'text-blue-500' },
  ];

  const industries = [
    'High-Rise Construction', 'Data Centers', 'Solar Farms', 'Manufacturing Plants',
    'Hospitals & Healthcare', 'Educational Facilities', 'Transportation Infrastructure', 'Oil & Gas Operations',
  ];

  return (
    <section id="performance" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Past Performance
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Proven track record across diverse industries and project scales
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-slate-50 backdrop-blur-sm border border-slate-200 rounded-2xl p-8 text-center hover:border-emerald-500 hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${project.iconBg} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${project.iconColor}`} />
                </div>
                <div className="mb-4">
                  <div className="flex items-center justify-center gap-1">
                    <AnimatedCounter
                      end={project.value}
                      duration={2000}
                      className="text-5xl font-bold text-slate-900"
                    />
                    <span className="text-5xl font-bold text-emerald-600">{project.suffix}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600">{project.description}</p>
              </motion.div>
            );
          })}
        </div>

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
