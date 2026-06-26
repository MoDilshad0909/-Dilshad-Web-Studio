import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-bold text-2xl tracking-tighter">
                Mo Dilshad<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              A premium freelance web developer crafting high-end digital experiences that convert visitors into loyal clients.
            </p>
            <div className="flex gap-4">
              <Link href="https://github.com/MoDilshad0909" target="_blank" className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors">
                <FaGithub className="w-5 h-5" />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors">
                <FaTwitter className="w-5 h-5" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</Link></li>
              <li><Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</Link></li>
              <li><Link href="#process" className="text-muted-foreground hover:text-foreground transition-colors">Process</Link></li>
              <li><Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About Me</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Contact</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:dilshad88878@gmail.com" className="hover:text-foreground transition-colors">dilshad88878@gmail.com</a>
              </li>
              <li>Lucknow, Uttar Pradesh, India</li>
              <li>Available for Freelance Projects</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Mo Dilshad. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
