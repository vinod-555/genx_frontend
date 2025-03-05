import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Cog, ArrowRight, Monitor } from "lucide-react";

const steps = [
  {
    icon: Cog,
    title: "Cost-efficient Components",
    description: "High-quality parts at optimized costs"
  },
  {
    icon: ArrowRight,
    title: "Seamless Integration",
    description: "Software and hardware working in harmony"
  },
  {
    icon: Monitor,
    title: "End-user Experience",
    description: "Intuitive and immersive interaction"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-background/95">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          How It Works
        </motion.h2>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary/20 -translate-y-1/2 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="relative hover:shadow-[0_0_20px_rgba(0,255,0,0.2)] transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
