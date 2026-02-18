import { Shield, Phone, Mail, MapPin } from 'lucide-react';

const navLinks = [
  { id: 'about', label: 'About Us' },
  { id: 'services', label: 'Services' },
  { id: 'differentiators', label: 'Why Choose Us' },
  { id: 'performance', label: 'Past Performance' },
  { id: 'team', label: 'Our Team' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

const services = [
  'Site Safety Staffing',
  'Safety Training',
  'Compliance Auditing',
  'Program Development',
  'Hazard Assessment',
  'Custom Safety Solutions',
];

export function Footer() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Branding */}
          <div className="sm:col-span-2 lg:col-span-1">
            <button onClick={() => scrollToSection('hero')} className="flex items-center space-x-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <div className="text-left">
                <div className="font-bold text-white leading-tight">CORR SAFETY</div>
                <div className="text-emerald-400 text-xs font-semibold tracking-wider">PROFESSIONALS</div>
              </div>
            </button>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Providing an unmatched level of safety management that produces a measurable difference since 2018.
            </p>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full w-fit">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-medium text-emerald-400">GSA Contract: 47QRAA25D000N</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm hover:text-emerald-400 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-sm hover:text-emerald-400 transition-colors duration-200"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">2 Market Street, West Chester, PA 19380</span>
              </li>
              <li>
                <a href="tel:+16102231946" className="flex items-center gap-3 hover:text-emerald-400 transition-colors">
                  <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm">(610) 223-1946</span>
                </a>
              </li>
              <li>
                <a href="mailto:dmitchell@corrsafety.com" className="flex items-center gap-3 hover:text-emerald-400 transition-colors">
                  <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm break-all sm:break-normal">dmitchell@corrsafety.com</span>
                </a>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-slate-700/60">
              <p className="text-xs text-slate-400 mb-1">Point of Contact</p>
              <p className="text-sm font-medium text-white">Dan Mitchell</p>
              <p className="text-xs text-slate-400 mt-0.5">CAGE Code: 8LX95 | UEI: ZS6CGJFSHLA8</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} Corr Safety Professionals Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <span>Self-Certified Small Disadvantaged Business</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Founded 2018</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
