import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import {
  MapPin, Phone, Mail, Globe, Building2, FileText, Award,
} from 'lucide-react';
import { ContactForm } from './ContactForm';

export function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const contactInfo = [
    { icon: Building2, label: 'CAGE Code', value: '8LX95' },
    { icon: FileText, label: 'UEI', value: 'ZS6CGJFSHLA8' },
    { icon: Phone, label: 'Phone', value: '(610) 223-1946', link: 'tel:+16102231946' },
    { icon: Mail, label: 'Email', value: 'dmitchell@corrsafety.com', link: 'mailto:dmitchell@corrsafety.com' },
    { icon: Globe, label: 'Website', value: 'www.corrsafety.com', link: 'https://www.corrsafety.com' },
    { icon: MapPin, label: 'Address', value: '2 Market Street, West Chester, PA 19380' },
  ];

  const certifications = [
    'Certified Safety Professional (CSP) ownership',
    'Self-Certified Small Disadvantaged Business',
  ];

  const naicsCodes = ['541620(P)', '541330', '541611', '541690', '561320', '611430', '541990', '561210', '561990', '562910', '611699', '926150', '611710', '541715', '238990'];
  const pscCodes = ['R425', 'R408', 'U099', 'H122', 'H149', 'H341', 'S216', 'Q999', 'Z2NZ', 'F103', 'F108', 'B510', 'F999', 'M112', 'J099'];

  return (
    <section id="contact" ref={ref} className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-slate-900">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-green-600 mx-auto rounded-full mb-6" />
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to elevate your safety standards? Contact us today
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-card rounded-2xl p-8 border border-slate-200 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-slate-900">Send Us a Message</h3>
            <ContactForm />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 mb-8"
            >
              <div className="bg-card rounded-2xl p-8 border border-slate-200 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-slate-900">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-500 mb-1">{info.label}</div>
                        {info.link ? (
                          <a href={info.link} className="text-slate-900 hover:text-emerald-600 transition-colors font-medium break-all sm:break-normal">
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-slate-900 font-medium">{info.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-slate-200 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Point of Contact</h3>
                <div className="text-lg">
                  <span className="text-slate-600">POC:</span>{' '}
                  <span className="text-slate-900 font-semibold">Dan Mitchell</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="bg-card rounded-2xl p-8 border border-slate-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="text-emerald-600" size={24} />
                  <h3 className="text-2xl font-bold text-slate-900">Certifications</h3>
                </div>
                <ul className="space-y-2">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start gap-2 text-slate-700">
                      <span className="text-emerald-600 mt-1">•</span>
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-slate-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="text-emerald-600" size={24} />
                  <h3 className="text-2xl font-bold text-slate-900">NAICS Codes</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {naicsCodes.map((code, index) => (
                    <span key={index} className="px-3 py-1 bg-slate-100 rounded-lg text-sm font-mono text-slate-700 border border-slate-200">
                      {code}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-slate-200 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="text-emerald-600" size={24} />
                  <h3 className="text-2xl font-bold text-slate-900">PSC Codes</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {pscCodes.map((code, index) => (
                    <span key={index} className="px-3 py-1 bg-slate-100 rounded-lg text-sm font-mono text-slate-700 border border-slate-200">
                      {code}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 pt-8 border-t border-slate-300 text-center"
        >
          <p className="text-slate-600">
            © 2026 Corr Safety Professionals Inc. All rights reserved. | Founded 2018 | GSA MAS Contract: 47QRAA25D000N
          </p>
        </motion.div>
      </div>
    </section>
  );
}
