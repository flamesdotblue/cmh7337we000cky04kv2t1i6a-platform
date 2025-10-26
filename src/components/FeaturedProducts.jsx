import React from "react";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Essentials Tee — Silence Black",
    price: 699,
    front: "https://images.unsplash.com/photo-1618354691438-c3d567c6ad0e?q=80&w=1200&auto=format&fit=crop",
    back: "https://images.unsplash.com/photo-1618354691831-c6a232b1b3ac?q=80&w=1200&auto=format&fit=crop",
    tag: "Essentials",
  },
  {
    id: 2,
    name: "Core Tee — Whisper White",
    price: 799,
    front: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=1200&auto=format&fit=crop",
    back: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop",
    tag: "Core",
  },
  {
    id: 3,
    name: "Luxe Tee — Deep Grey",
    price: 899,
    front: "https://images.unsplash.com/photo-1520975922284-5f5737c3e0fa?q=80&w=1200&auto=format&fit=crop",
    back: "https://images.unsplash.com/photo-1520975940463-84fb9f2f63cd?q=80&w=1200&auto=format&fit=crop",
    tag: "Luxe",
  },
  {
    id: 4,
    name: "Limited — Blood Red Stitch",
    price: 999,
    front: "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1200&auto=format&fit=crop",
    back: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=1200&auto=format&fit=crop",
    tag: "Limited Edition",
  },
];

const ProductCard = ({ p }) => {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="group relative rounded-xl overflow-hidden bg-zinc-900/40 border border-white/10 backdrop-blur-sm"
    >
      <div className="relative aspect-[4/5]">
        <img
          src={p.front}
          alt={p.name}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
          loading="lazy"
        />
        <img
          src={p.back}
          alt={p.name + ' back'}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 pointer-events-none shadow-[0_0_0_0_rgba(255,215,0,0)] group-hover:shadow-[0_0_40px_0_rgba(255,215,0,0.12)] transition-shadow duration-500" />
        <div className="absolute left-3 top-3 text-[10px] uppercase tracking-widest bg-white text-black px-2 py-1 rounded-full">
          {p.tag}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-white/90">{p.name}</h3>
          <span className="text-sm text-amber-300 font-semibold">₹{p.price}</span>
        </div>
        <p className="mt-1 text-[11px] text-white/50">240 GSM cotton · Handstitched label</p>
        <button className="mt-3 w-full rounded-lg bg-white text-black text-sm py-2 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)]">
          Quick View
        </button>
      </div>
    </motion.a>
  );
};

const FeaturedProducts = () => {
  return (
    <section id="shop" className="relative px-6 md:px-10 lg:px-16 py-16 md:py-24 bg-black">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-red-900/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-yellow-900/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Featured T-Shirts</h2>
            <p className="text-sm text-white/60 mt-1">Essentials / Core / Luxe / Limited Edition</p>
          </div>
          <div className="hidden md:flex gap-2 text-[11px] uppercase tracking-widest text-white/50">
            <span>₹699</span>
            <span>·</span>
            <span>₹799</span>
            <span>·</span>
            <span>₹899</span>
            <span>·</span>
            <span>₹999</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
