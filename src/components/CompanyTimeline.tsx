import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { Calendar, Rocket, Award, TrendingUp } from 'lucide-react';

export function CompanyTimeline() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const milestones = [
    { year: '2018', icon: Rocket, title: 'Company Founded', description: 'Corr Safety Professionals established in Pennsylvania', color: 'from-blue-500 to-blue-600' },
    { year: '2020', icon: Award, title: 'CSP Certification', description: 'Achieved Certified Safety Professional leadership', color: 'from-emerald-500 to-emerald-600' },
    { year: '2023', icon: TrendingUp, title: 'GSA Contract Awarded', description: 'Secured GSA MAS Contract 47QRAA25D000N', color: 'from-purple-500 to-purple-600' },
    { year: '2026', icon: Calendar, title: 'Continued Excellence', description: 'Leading industry safety standards and innovation', color: 'from-orange-500 to-orange-600' },
  ];

  return (
    <section ref={ref} className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-slate-900 mb-4">Our Journey</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-600 to-green-600 mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-600 to-green-600 rounded-full" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-card rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                    <div className="inline-block px-4 py-1 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-full text-sm font-bold mb-3">
                      {milestone.year}
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{milestone.title}</h4>
                    <p className="text-slate-600">{milestone.description}</p>
                  </div>
                </div>

                <div className="relative flex-shrink-0">
                  <div className={`w-16 h-16 bg-gradient-to-br ${milestone.color} rounded-full flex items-center justify-center shadow-lg z-10 relative`}>
                    <milestone.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${milestone.color} rounded-full animate-ping opacity-20`} />
                </div>

                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
