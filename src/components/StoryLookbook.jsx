import React from "react";
import { motion } from "framer-motion";

const StoryLookbook = () => {
  return (
    <div className="w-full">
      {/* Brand Story */}
      <section className="relative overflow-hidden bg-black">
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover opacity-30"
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1520975843573-9f4b39f5e02a?q=80&w=1600&auto=format&fit=crop"
          >
            <source
              src="https://videos.pexels.com/video-files/3913454/3913454-uhd_2560_1440_24fps.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-semibold"
          >
            WHAT’S UNSAID DEFINES YOU.
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-white/70 leading-relaxed max-w-3xl"
          >
            Born from the quiet between words, UNSAID is a study of restraint and feeling. Our silhouettes are minimal, our fabrics deliberate, our message subtle yet undeniable. For those who carry depth in silence and wear their truth without noise.
          </motion.p>
        </div>
      </section>

      {/* Lookbook */}
      <section id="lookbook" className="px-6 md:px-10 lg:px-16 py-16 md:py-24 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <h3 className="text-2xl md:text-3xl font-semibold">Lookbook</h3>
            <p className="text-sm text-white/60 mt-1">Not everything needs to be spoken. Some stories are worn.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1520975922284-5f5737c3e0fa?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=1200&auto=format&fit=crop",
            ].map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="relative overflow-hidden rounded-xl border border-white/10"
              >
                <img src={src} alt="Lookbook" className="h-72 md:h-80 w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StoryLookbook;
