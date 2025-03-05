import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/95 border-t border-primary/20 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
            <Link href="/">
              <a className="text-xl font-bold text-primary hover:text-primary/80 transition-colors">
                GenX Reality
              </a>
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} GenX Reality. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <div className="space-x-4">
              <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#innovations" className="text-sm text-muted-foreground hover:text-primary transition-colors">Innovations</a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>

          {/* Location */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              Making VR Accessible Worldwide
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
