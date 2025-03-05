import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ThreeScene from "../ThreeScene";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <ThreeScene />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="text-4xl md:text-6xl font-bold mb-4 font-montserrat text-white"
        >
          GenX Reality: Making AR/VR Accessible and Affordable for All
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="text-xl md:text-2xl mb-6 text-muted-foreground"
        >
          Unlocking the Transformative Potential of AR/VR Through Innovation and Accessibility
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="text-lg mb-8 max-w-3xl mx-auto text-muted-foreground/80"
        >
          GenX Reality is dedicated to breaking down the cost and accessibility barriers that prevent widespread VR adoption. 
          Our low-cost, high-performance VR headsets are designed to revolutionize industries like education, healthcare, training, and more.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.6, 0.05, 0.01, 0.9] }}
        >
          <Button
            size="lg"
            className="bg-background/10 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]"
          >
            Explore Our Solutions
          </Button>
        </motion.div>
      </div>
    </section>
  );
}