"use client";

import { motion } from "framer-motion";

const steps = [
  { title: "Discovery", desc: "Understanding your brand, audience, and goals." },
  { title: "Planning", desc: "Creating a strategic roadmap and architecture." },
  { title: "Wireframing", desc: "Designing the blueprint and user journey." },
  { title: "UI Design", desc: "Crafting a premium, pixel-perfect visual identity." },
  { title: "Development", desc: "Writing clean, optimized, and scalable code." },
  { title: "Testing", desc: "Rigorous quality assurance across all devices." },
  { title: "Deployment", desc: "Launching your new digital experience to the world." },
  { title: "Support", desc: "Ongoing maintenance to keep you ahead of the curve." },
];

export function Process() {
  return (
    <section id="process" className="py-24 relative overflow-hidden bg-secondary/10">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tighter mb-4"
          >
            Development <span className="text-gradient">Process</span>
          </motion.h2>
          <p className="text-lg text-muted-foreground">A proven methodology for delivering excellence.</p>
        </div>

        <div className="relative border-l border-border/50 ml-4 md:ml-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="mb-10 ml-8 md:ml-12 relative"
            >
              <div className="absolute -left-10 md:-left-14 top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
              <div className="glass p-6 rounded-2xl inline-block w-full max-w-lg hover:border-primary/30 transition-colors">
                <span className="text-xs font-bold text-primary tracking-widest uppercase mb-2 block">Step 0{index + 1}</span>
                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
