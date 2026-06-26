"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { question: "How long does it take to build a website?", answer: "A standard landing page takes about 1-2 weeks. A complete premium website takes 3-4 weeks. Complex web applications depend on the scope." },
  { question: "Do you provide SEO optimization?", answer: "Yes, every website I build includes technical SEO optimization, proper schema markup, semantic HTML, and fast loading speeds to ensure you rank well on Google." },
  { question: "Will my website be mobile-friendly?", answer: "Absolutely. I design mobile-first, ensuring your website looks and works flawlessly on all devices, from smartphones to large desktop monitors." },
  { question: "Do you offer website maintenance?", answer: "Yes, I offer ongoing support and maintenance packages to keep your website secure, updated, and performing at its best." },
  { question: "Can I update the content myself?", answer: "Yes, for premium websites, I integrate an easy-to-use Content Management System (CMS) like Sanity or WordPress so you can easily update text and images." },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tighter mb-4"
          >
            Frequently Asked <span className="text-gradient">Questions</span>
          </motion.h2>
          <p className="text-lg text-muted-foreground">Everything you need to know about working with me.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-6 md:p-8 rounded-3xl"
        >
          <Accordion className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50 py-2">
                <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-primary transition-colors text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
