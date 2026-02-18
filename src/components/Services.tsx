import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import {
  Users,
  TestTube,
  BookOpen,
  GraduationCap,
  ClipboardCheck,
  Search,
  AlertTriangle,
  Briefcase,
} from 'lucide-react';

export function Services() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const services = [
    { icon: Users, title: 'Site Safety Staffing', description: 'Professional safety personnel for your projects', image: 'https://corrsafety.com/wp-content/uploads/2020/06/safety.jpg' },
    { icon: GraduationCap, title: 'Safety Training', description: 'OSHA 10/30, HAZWOPER, CPR/First Aid, Fall Protection, Confined Space', image: 'https://imgs.search.brave.com/Hzqc6YSvliNuoKNptkBmlDIgTPzybcGK-sm52IAMglE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTk1/NzA3NTYzNC9waG90/by9tYW5hZ2VyLWNv/bGxlYWd1ZS1wZXJm/b3JtaW5nLWNwci1v/bi1hbi1pbmp1cmVk/LWVtcGxveWVlLWx5/aW5nLW9uLXRoZS1n/cm91bmQtaW4tYS13/YXJlaG91c2UuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWtO/ME1idTlkeDN0ZUVQ/U1h5UUFRaWlvZ3d2/OVh4aW91dVhXa1B5/TE55aG89' },
    { icon: Search, title: 'Compliance Auditing', description: 'Regulatory Gap Analysis', image: 'https://imgs.search.brave.com/2YTcXRoeJ-U4JAE9fpTHzRu8RUE1NOuHRWuAB4boyng/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jcnFh/LmluL2ltYWdlcy9z/bGlkZTAzLnBuZw' },
    { icon: BookOpen, title: 'Safety Program Development', description: 'Custom compliance solutions', image: 'https://imgs.search.brave.com/atHIEx56hT3L7u7MHwkHEojE3WTL6L2SLpscSZEdDK8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9iZXMt/Y29ycC5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjUvMDYv/bjhuLW1hbnVmYWN0/dXJpbmctZmVtYWxl/LWNvbnN1bHRhbnQu/anBn' },
    { icon: ClipboardCheck, title: 'Field Safety Services', description: 'Industrial Hygiene Monitoring', image: 'https://images.unsplash.com/photo-1738162837329-2f2a2cdebb5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwc2FmZXR5JTIwZXF1aXBtZW50fGVufDF8fHx8MTc3MTQzNTIyOXww&ixlib=rb-4.1.0&q=80&w=1080' },
    { icon: AlertTriangle, title: 'Hazard Evaluation', description: 'Risk Mitigation Strategies', image: 'https://images.unsplash.com/photo-1628870571159-82001646505b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JrcGxhY2UlMjBoYXphcmQlMjBhc3Nlc3NtZW50fGVufDF8fHx8MTc3MTQzNTIyOXww&ixlib=rb-4.1.0&q=80&w=1080' },
  ];

  return (
    <section id='services' ref={ref} className="py-16 md:py-20 bg-[#A3A2A3]/30 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-green-600 mx-auto rounded-full mb-6" />
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive safety solutions tailored to meet your organization's unique needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-emerald-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />
                <div className="absolute top-4 right-4 w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="absolute inset-0 border-2 border-emerald-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-8 border border-emerald-200"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Additional Services
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 bg-card rounded-lg p-4 shadow-sm">
              <TestTube className="w-6 h-6 text-emerald-600 flex-shrink-0" />
              <span className="text-slate-700 font-medium">Drug Screening Programs</span>
            </div>
            <div className="flex items-center gap-3 bg-card rounded-lg p-4 shadow-sm">
              <Briefcase className="w-6 h-6 text-emerald-600 flex-shrink-0" />
              <span className="text-slate-700 font-medium">General Industry Support</span>
            </div>
            <div className="flex items-center gap-3 bg-card rounded-lg p-4 shadow-sm">
              <ClipboardCheck className="w-6 h-6 text-emerald-600 flex-shrink-0" />
              <span className="text-slate-700 font-medium">Custom Safety Solutions</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
