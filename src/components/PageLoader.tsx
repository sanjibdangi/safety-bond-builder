import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900"
        >
          <div className="text-center">

            {/* ⭐ LOGO WITH GREEN CIRCLE LOADER */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative mb-10 flex justify-center"
            >
              {/* rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="absolute w-32 h-32 rounded-full border-4 border-emerald-400 border-t-transparent"
              />

              {/* logo image */}
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-2xl">
                <img
                  src="/favicon.png"
                  alt="logo"
                  className="w-16 h-16 object-contain"
                />
              </div>
            </motion.div>

            {/* ⭐ BRAND TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="tracking-wide"
            >
              <h2 className="text-3xl font-extrabold">
                <span className="text-white">CORR </span>
                <span className="text-emerald-400">SAFETY</span>
              </h2>
              <p className="text-white font-semibold tracking-[0.4em] text-sm mt-1">
                PROFESSIONALS
              </p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 w-64 h-1 bg-slate-700 rounded-full overflow-hidden mx-auto"
            >
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className="h-full bg-gradient-to-r from-emerald-400 to-green-400"
              />
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
