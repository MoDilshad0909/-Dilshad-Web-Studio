"use client";

import { motion } from "framer-motion";
import { ExternalLink, ImageIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "R.S. International School",
    category: "School Website • UI/UX • React",
    description: "Designed and developed a premium, fully responsive website for R.S. International School to establish a strong online presence and simplify the admission enquiry process. Built using real school content, real photographs, and focuses on performance, user experience, and trust-building.",
    features: [
      "Admission Enquiry CTA",
      "WhatsApp Integration",
      "Click-to-Call Functionality",
      "Dynamic School Gallery",
      "Fee Structure",
      "SEO Friendly"
    ],
    tech: ["React", "Vite", "Tailwind CSS", "JavaScript", "Framer Motion", "Lucide React"],
    image: "/projects/rs_school.png",
    demoUrl: "https://www.rsinternationalschool.org/",
    githubUrl: "https://github.com/MoDilshad0909/RS",
    detailsUrl: "/projects/rs-international-school"
  },
  {
    title: "ConfirmAI",
    category: "AI + Machine Learning + NLP",
    description: "An AI-powered fake news detection web application that predicts whether a news article is real or fake using Natural Language Processing and Machine Learning.",
    features: [
      "Real-time prediction",
      "NLP preprocessing",
      "Machine Learning model",
      "Responsive UI",
      "Fast prediction",
      "Clean interface"
    ],
    tech: ["Python", "Flask", "Machine Learning", "Scikit-learn", "NLP", "HTML", "CSS", "JavaScript"],
    image: "/projects/ai_news_app.png",
    demoUrl: "https://confirmai.onrender.com/",
    githubUrl: "https://github.com/MoDilshad0909/ConfirmAI"
  },
  {
    title: "Smiles N’ Braces Dental Clinic",
    category: "Business Website",
    description: "A premium SEO-optimized landing page designed for a dental clinic. Built to generate appointments with modern UI, responsive design, local SEO optimization, and conversion-focused sections.",
    features: [
      "Appointment booking",
      "Responsive design",
      "SEO optimized",
      "Google Maps integration",
      "Mobile friendly",
      "Premium animations"
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/projects/dental_clinic.png",
    demoUrl: "https://doctor-eight-lime.vercel.app/",
    githubUrl: "https://github.com/MoDilshad0909/Doctor-"
  },
  {
    title: "Personal Portfolio",
    category: "Portfolio Website",
    description: "A modern developer portfolio showcasing my skills, projects, and services. Designed with a premium user experience, responsive layout, animations, and SEO optimization.",
    features: [
      "Responsive Design",
      "Modern UI",
      "Dark Mode",
      "SEO Optimized",
      "Smooth Animations",
      "Contact Form"
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "/projects/portfolio.png",
    demoUrl: "https://portfolio-mo-dilshad.vercel.app/",
    githubUrl: "https://github.com/MoDilshad0909/Portfolio"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tighter mb-6"
            >
              Featured <span className="text-gradient">Projects</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              A selection of my recent work. I build digital products that are not only beautiful but also highly functional and performant.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Button variant="outline" className="rounded-full">View All Projects</Button>
          </motion.div>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
            >
              <div className="w-full lg:w-1/2 perspective-1000">
                {project.detailsUrl ? (
                  <Link href={project.detailsUrl} className="block relative aspect-[4/3] rounded-3xl overflow-hidden glass p-2 group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 hover:rotate-1">
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </Link>
                ) : (
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass p-2 group hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 hover:rotate-1">
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="w-full lg:w-1/2 space-y-6">
                <Badge variant="secondary" className="px-3 py-1 rounded-full">{project.category}</Badge>
                <h3 className="text-3xl md:text-4xl font-bold">{project.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                {/* Feature List */}
                {project.features && (
                  <ul className="grid grid-cols-2 gap-y-2 gap-x-4 py-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <span className="text-primary mr-2 font-bold">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-sm font-medium px-3 py-1 rounded-full border border-border bg-secondary/30">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 pt-6">
                  <Link href={project.demoUrl} target="_blank" className={buttonVariants({ className: "rounded-full px-6 hover:shadow-lg hover:shadow-primary/25 transition-all" })}>
                    Live Website <ExternalLink className="ml-2 w-4 h-4" />
                  </Link>
                  <Link href={project.githubUrl} target="_blank" className={buttonVariants({ variant: "outline", className: "rounded-full px-6 glass hover:shadow-lg transition-all" })}>
                    Source Code <FaGithub className="ml-2 w-4 h-4" />
                  </Link>
                  {project.detailsUrl && (
                    <Link href={project.detailsUrl} className={buttonVariants({ variant: "secondary", className: "rounded-full px-6 hover:shadow-lg transition-all" })}>
                      View Screenshots <ImageIcon className="ml-2 w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
