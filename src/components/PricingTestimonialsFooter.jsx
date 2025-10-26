import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const tiers = [
  {
    name: "Essentials",
    price: 699,
    features: ["240 GSM cotton", "Classic fit", "Eco-friendly packaging"],
    accent: "from-white/10 to-white/5",
  },
  {
    name: "Core",
    price: 799,
    features: ["240 GSM premium cotton", "Refined collar", "Handstitched label"],
    accent: "from-yellow-200/10 to-yellow-200/5",
  },
  {
    name: "Luxe",
    price: 899,
    features: ["Ultra-combed cotton", "Signature hem detail", "Soft touch finish"],
    accent: "from-gray-200/10 to-gray-200/5",
  },
  {
    name: "Limited Edition",
    price: 999,
    features: ["Edition stitch in blood red", "Serialized tag", "Premium dye"],
    accent: "from-red-300/10 to-red-300/5",
  },
];

const testimonials = [
  {
    name: "Aarav",
    text: "Feels like wearing confidence. Minimal and powerful.",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Meera",
    text: "The fabric and fit are insane. Silence, but make it fashion.",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Zayn",
    text: "Zero logos shouting. Just presence.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
  },
];

const PricingTestimonialsFooter = () => {
  return (
    <div className="bg-black">
      {/* Pricing */}
      <section className="px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <h3 className="text-2xl md:text-3xl font-semibold">Pricing & Quality</h3>
            <p className="text-sm text-white/60 mt-1">Four tiers. One philosophy.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tiers.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`rounded-xl border border-white/10 bg-gradient-to-b ${t.accent} p-5`}
              >
                <div className="flex items-baseline justify-between">
                  <h4 className="text-lg font-semibold">{t.name}</h4>
                  <span className="text-amber-300 font-semibold">₹{t.price}</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/50" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-5 w-full rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white/90 transition-all duration-300 hover:bg-white hover:text-black">
                  Explore {t.name}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials / Street Shots */}
      <section className="px-6 md:px-10 lg:px-16 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold">Voices of the Street</h3>
              <p className="text-sm text-white/60 mt-1">Black & white to color — confidence revealed.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-xl overflow-hidden border border-white/10 bg-zinc-900/40"
              >
                <div className="relative h-56">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="absolute inset-0 h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1 text-amber-300">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-white/80">“{t.text}”</p>
                  <p className="mt-2 text-xs text-white/50">— {t.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-white" />
            <span className="text-lg font-bold tracking-wide">UNSAID</span>
          </div>
          <div className="text-center md:text-left text-sm text-white/70">
            UNSAID — The power of silence.
          </div>
          <nav className="flex flex-wrap justify-center gap-4 text-sm text-white/70">
            <a href="#shop" className="hover:text-white">Shop</a>
            <a href="#" className="hover:text-white">About</a>
            <a href="#" className="hover:text-white">Contact</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a>
            <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-white">X</a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="hover:text-white">TikTok</a>
          </nav>
        </div>
        <div className="px-6 md:px-10 lg:px-16 pb-8 text-center text-[11px] uppercase tracking-widest text-white/40">
          © {new Date().getFullYear()} UNSAID. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default PricingTestimonialsFooter;
