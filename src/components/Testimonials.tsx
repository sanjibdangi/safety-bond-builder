import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: 'I have worked hand and hand with Corr Safety for the last year and have been impressed with the dedication, professionalism and commitment to satisfying our safety needs. Gary Orefice, Dan Mitchell and the rest of the Corr Safety team have been a pleasure to work with and I look forward to working with them far into the future.',
    author: 'Brendan M Rafferty',
    position: 'Area Safety Manager, Safway',
    rating: 5,
  },
  {
    quote: 'I have worked with Dan and Corr Safety for quite a few years now and their dedication to ensuring the safety of my employees astonishes me. He has visited my team multiple times to provide OSHA training for Aerial lifts, forklifts, and toolbox talks regarding various topics.',
    author: 'Ken Piccari',
    position: 'General Manager, Cypress Door and Glass LLC',
    rating: 5,
  },
  {
    quote: 'CORR Safety Professionals was excellent to work with during the updating, revision and development of our Safety Programs, which assisted in the transition to ISNetworld effortless.',
    author: 'Ken Umstead, JR',
    position: 'Safety Director',
    rating: 5,
  },
  {
    quote: 'CORR Safety has been a great partner to work with. They have partnered with SunPower on multiple projects and exceeded expectations.',
    author: 'Brian Bettencourt',
    position: 'Senior Project Manager, SunPower',
    rating: 5,
  },
];

export function Testimonials() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // ⭐ Detect screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // ⭐ Dynamic visible cards
  const visibleTestimonials = isMobile
    ? [testimonials[currentIndex]]
    : [
        testimonials[currentIndex],
        testimonials[(currentIndex + 1) % testimonials.length],
      ];

  return (
    <section id="testimonials" ref={ref} className="py-16 md:py-20 bg-[#A3A2A3]/30"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-green-600 mx-auto rounded-full mb-6" />
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'} gap-8`}>
          {visibleTestimonials.map((testimonial, index) => (
            <motion.div
              key={`${currentIndex}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 h-full relative">
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote size={64} className="text-emerald-600" />
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-slate-700 leading-relaxed mb-6 relative z-10 italic">
                  "{testimonial.quote}"
                </p>

                <div className="border-t border-slate-200 pt-4">
                  <div className="font-bold text-slate-900">{testimonial.author}</div>
                  <div className="text-emerald-600 text-sm font-semibold">{testimonial.position}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Arrows */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors shadow-lg"
          >
            <ChevronRight size={24} />
          </button>
        </div>

      </div>
    </section>
  );
}
