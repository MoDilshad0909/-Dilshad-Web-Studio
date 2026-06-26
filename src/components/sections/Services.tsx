"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, Search, Zap, MessageSquare, Briefcase } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Premium Websites",
    description: "Custom-designed, high-performance websites for businesses that want to stand out.",
    icon: <Monitor className="w-8 h-8 text-primary" />,
  },
  {
    title: "Web Applications",
    description: "Complex, scalable web applications built with modern technologies like Next.js and React.",
    icon: <Briefcase className="w-8 h-8 text-primary" />,
  },
  {
    title: "SEO Optimization",
    description: "Advanced technical SEO to rank your website higher on Google and attract organic traffic.",
    icon: <Search className="w-8 h-8 text-primary" />,
  },
  {
    title: "Speed Optimization",
    description: "Lightning-fast load times (95+ PageSpeed) for better user experience and conversions.",
    icon: <Zap className="w-8 h-8 text-primary" />,
  },
  {
    title: "Responsive Design",
    description: "Flawless experiences across all devices—mobile, tablet, and desktop.",
    icon: <Smartphone className="w-8 h-8 text-primary" />,
  },
  {
    title: "AI Chatbot Integration",
    description: "Smart, automated customer support to engage visitors 24/7 and boost leads.",
    icon: <MessageSquare className="w-8 h-8 text-primary" />,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tighter mb-6"
          >
            Premium <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            I provide end-to-end web development solutions tailored to elevate your brand and drive measurable business growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full glass hover:border-primary/50 transition-colors duration-300 group">
                <CardHeader>
                  <div className="mb-4 p-3 rounded-2xl bg-secondary/50 inline-block w-fit group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
