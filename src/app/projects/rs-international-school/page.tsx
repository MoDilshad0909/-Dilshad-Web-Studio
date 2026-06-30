"use client";

import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2, MonitorSmartphone, Globe, LayoutDashboard, MessageCircle, Phone, ArrowLeft } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const features = [
  { icon: <MonitorSmartphone className="w-5 h-5" />, title: "Fully Responsive Design" },
  { icon: <CheckCircle2 className="w-5 h-5" />, title: "Admission Enquiry CTA" },
  { icon: <MessageCircle className="w-5 h-5" />, title: "WhatsApp Integration" },
  { icon: <Phone className="w-5 h-5" />, title: "Click-to-Call Functionality" },
  { icon: <LayoutDashboard className="w-5 h-5" />, title: "Dynamic School Gallery" },
  { icon: <Globe className="w-5 h-5" />, title: "SEO Friendly & Fast Loading" }
];

const technologies = ["React", "Vite", "Tailwind CSS", "JavaScript", "Framer Motion", "Lucide React", "Vercel"];

const galleryImages = [
  "/projects/rs_school.png",
  "/projects/rs_school.png",
  "/projects/rs_school.png",
  "/projects/rs_school.png"
];

export default function RSProjectPage() {
  return (
    <div className="pt-32 pb-24 relative min-h-screen">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link href="/#projects" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <Badge variant="secondary" className="px-3 py-1 rounded-full text-sm">School Website • UI/UX • React</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              R.S. International School
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Designed and developed a premium, fully responsive website for R.S. International School to establish a strong online presence and simplify the admission enquiry process.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="https://www.rsinternationalschool.org/" target="_blank" className={buttonVariants({ className: "rounded-full px-8 py-6 text-lg hover:shadow-lg hover:shadow-primary/25 transition-all" })}>
                Visit Live Website <ExternalLink className="ml-2 w-5 h-5" />
              </Link>
              <Link href="https://github.com/MoDilshad0909/RS" target="_blank" className={buttonVariants({ variant: "outline", className: "rounded-full px-8 py-6 text-lg glass hover:shadow-lg transition-all" })}>
                View GitHub <FaGithub className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative aspect-video rounded-3xl overflow-hidden glass p-2 shadow-2xl"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src="/projects/rs_school.png"
                alt="R.S. International School Homepage"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Challenge & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl"
          >
            <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-destructive mr-3 mt-1">•</span>
                No official modern website or online branding
              </li>
              <li className="flex items-start">
                <span className="text-destructive mr-3 mt-1">•</span>
                Limited and manual admission enquiry process
              </li>
              <li className="flex items-start">
                <span className="text-destructive mr-3 mt-1">•</span>
                Need for a responsive, trustworthy, and premium online presence
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass p-8 rounded-3xl border-primary/20"
          >
            <h2 className="text-2xl font-bold mb-4">The Solution</h2>
            <p className="text-muted-foreground leading-relaxed">
              Transformed the school's digital presence into a modern, responsive, and premium experience. Integrated real school assets, founder information, facilities, and dynamic galleries. Implemented direct communication channels like WhatsApp and Click-to-Call to streamline parent enquiries and build trust instantly.
            </p>
          </motion.div>
        </div>

        {/* Features & Technologies */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built with modern technologies to ensure a seamless experience across all devices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-2xl flex items-center hover:-translate-y-1 transition-transform"
              >
                <div className="bg-primary/10 text-primary p-3 rounded-full mr-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold">{feature.title}</h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {technologies.map((tech, i) => (
              <Badge key={i} variant="outline" className="px-4 py-2 text-sm rounded-full glass">
                {tech}
              </Badge>
            ))}
          </motion.div>
        </div>

        {/* Gallery Section */}
        <div id="gallery" className="mb-24 scroll-mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Project Gallery</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A glimpse into the premium UI and responsive layouts of the school website.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryImages.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative aspect-video rounded-3xl overflow-hidden glass p-2 group"
              >
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                <div className="relative w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src={src}
                    alt={`Gallery Image ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Ready to start your project?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto relative z-10">
            Let's build something amazing together. I'm currently available for freelance work.
          </p>
          <div className="relative z-10">
            <Link href="/#contact" className={buttonVariants({ size: "lg", className: "rounded-full px-8 py-6 text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all" })}>
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
