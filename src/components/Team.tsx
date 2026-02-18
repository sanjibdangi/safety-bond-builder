import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { Linkedin, Mail } from 'lucide-react';

export function Team() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  // ⭐ Images coming from PUBLIC folder
  const teamMembers = [
    { name: 'John Correale, CSP', role: 'CEO', image: '/john.png' },
    { name: 'Joe Whalen, CSP', role: 'VP of Operations', image: '/joe.png' },
    { name: 'Mike Shanline, SMS', role: 'VP of Business Development', image: '/mike.png' },
  ];

  return (
    <section id="team" ref={ref} className="py-24 bg-background scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Leadership{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
              Team
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-green-600 mx-auto rounded-full mb-6" />
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Industry veterans committed to excellence in safety management
          </p>
        </motion.div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100">
                
                <div className="relative overflow-hidden bg-slate-100 aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors">
                      <Linkedin size={18} />
                    </button>
                    <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors">
                      <Mail size={18} />
                    </button>
                  </div>
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-emerald-600 font-semibold">
                    {member.role}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          <div className="bg-card rounded-xl p-6 text-center shadow-lg border border-slate-100">
            <div className="text-3xl font-bold text-emerald-600 mb-2">CSP</div>
            <div className="text-slate-600">Certified Safety Professionals</div>
          </div>
          <div className="bg-card rounded-xl p-6 text-center shadow-lg border border-slate-100">
            <div className="text-3xl font-bold text-emerald-600 mb-2">50+</div>
            <div className="text-slate-600">Combined Years Experience</div>
          </div>
          <div className="bg-card rounded-xl p-6 text-center shadow-lg border border-slate-100">
            <div className="text-3xl font-bold text-emerald-600 mb-2">24/7</div>
            <div className="text-slate-600">Support Available</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
