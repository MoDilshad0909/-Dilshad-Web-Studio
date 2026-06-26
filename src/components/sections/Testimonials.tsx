"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CEO, TechStart",
    content: "Mo delivered an exceptional website that completely transformed our digital presence. The attention to detail and modern design aesthetic is truly world-class.",
    rating: 5,
  },
  {
    name: "Dr. Shitij Srivastava",
    role: "Founder, Smiles N' Braces",
    content: "Working with Mo was a breeze. He understood exactly what our clinic needed and delivered a premium website that has significantly increased our patient bookings.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Marketing Director, Apex Real Estate",
    content: "The real estate platform Mo built for us is blazing fast and incredibly intuitive. Our lead generation has doubled since the launch. Highly recommended!",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tighter mb-4"
          >
            Client <span className="text-gradient">Testimonials</span>
          </motion.h2>
          <p className="text-lg text-muted-foreground">What people say about my work.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full glass">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-lg mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
