"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { openWhatsApp } from "@/lib/whatsapp";

const plans = [
  {
    name: "Landing Page",
    price: "₹6,000",
    description: "Perfect for personal brands and single product showcases.",
    features: ["Single Page Design", "Responsive Layout", "Contact Form", "Basic SEO", "1 Week Delivery"],
    popular: false,
    whatsappMessage: "Hi, I'm interested in the ₹6,000 Landing Page package.",
  },
  {
    name: "Premium Website",
    price: "₹12,000",
    description: "Ideal for businesses wanting a complete digital presence.",
    features: ["Up to 10 Pages", "Premium Design", "CMS Integration", "Advanced SEO", "Performance Optimized", "3 Weeks Delivery"],
    popular: true,
    whatsappMessage: "Hi, I'm interested in the ₹12,000 Premium Website package.",
  },
  {
    name: "Custom Web App",
    price: "Custom",
    description: "For complex platforms and scalable applications.",
    features: ["Full-Stack Next.js", "Database Integration", "User Authentication", "Dashboard & Admin", "API Integration", "Custom Timeline"],
    popular: false,
    whatsappMessage: "Hi, I need a custom web application. Let's discuss.",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tighter mb-4"
          >
            Transparent <span className="text-gradient">Pricing</span>
          </motion.h2>
          <p className="text-lg text-muted-foreground">Invest in a premium digital presence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`relative h-full flex flex-col glass ${plan.popular ? 'border-primary shadow-2xl shadow-primary/20 scale-105 z-10' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center pt-10 pb-4">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm h-10">{plan.description}</p>
                  <div className="mt-6 font-bold text-4xl">{plan.price}</div>
                </CardHeader>
                <CardContent className="flex-1 pt-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="rounded-full bg-primary/20 p-1">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-6 pb-10">
                  <Button
                    onClick={() => openWhatsApp(plan.whatsappMessage)}
                    className={cn(
                      plan.popular ? "" : "bg-transparent text-primary hover:bg-primary/10 border border-primary",
                      "w-full rounded-full h-12"
                    )}
                  >
                    Choose Plan
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
