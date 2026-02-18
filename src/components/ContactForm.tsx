import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', phone: '', service: '', message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-emerald-50 border-2 border-emerald-500 rounded-2xl p-12 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        >
          <CheckCircle size={64} className="text-emerald-600 mx-auto mb-4" />
        </motion.div>
        <h3 className="text-2xl font-bold text-emerald-900 mb-2">Thank You!</h3>
        <p className="text-emerald-700">
          We've received your message and will get back to you within 24 hours.
        </p>
      </motion.div>
    );
  }

  const inputClassName = "w-full px-4 py-3 bg-card border border-slate-300 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
          <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className={inputClassName} placeholder="John Doe" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
          <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className={inputClassName} placeholder="john@company.com" />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">Company Name</label>
          <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className={inputClassName} placeholder="Your Company" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={inputClassName} placeholder="(555) 123-4567" />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">Service Interested In</label>
        <select id="service" name="service" value={formData.service} onChange={handleChange} className={inputClassName}>
          <option value="">Select a service</option>
          <option value="site-safety">Site Safety Staffing</option>
          <option value="training">Safety Training</option>
          <option value="auditing">Compliance Auditing</option>
          <option value="program-development">Safety Program Development</option>
          <option value="hazard-evaluation">Hazard Evaluation</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message *</label>
        <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className={`${inputClassName} resize-none`} placeholder="Tell us about your safety needs..." />
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-lg font-semibold text-lg hover:from-emerald-500 hover:to-emerald-600 transition-all duration-300 shadow-xl hover:shadow-emerald-500/50 flex items-center justify-center gap-2"
      >
        <span>Send Message</span>
        <Send size={20} />
      </motion.button>
    </form>
  );
}
