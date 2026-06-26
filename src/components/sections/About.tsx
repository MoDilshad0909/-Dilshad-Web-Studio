"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function About() {
  const approaches = [
    "Discovery & Strategy",
    "Premium UI/UX Design",
    "Lightning Fast Development",
    "SEO & Conversion Optimization"
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
              Crafting Digital <span className="text-gradient">Excellence</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm Mo Dilshad, an award-winning UI/UX Designer and Senior Frontend Engineer based in Lucknow, India. I specialize in building premium web applications that don't just look stunning, but perform exceptionally well.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My mission is to help businesses establish a powerful online presence through bespoke digital solutions. I believe every pixel should serve a purpose and every interaction should feel magical.
            </p>
            
            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4">My Approach</h3>
              <ul className="space-y-3">
                {approaches.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <CheckCircle2 className="text-primary h-5 w-5" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full rounded-3xl overflow-hidden glass p-2"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 rounded-3xl mix-blend-overlay" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-secondary">
              {/* Replace with real image in production */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
