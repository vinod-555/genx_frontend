import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Glasses, Brain, Cpu } from "lucide-react";

const features = [
  {
    icon: Glasses,
    title: "Low-Cost, High-Performance VR",
    description: "Advanced display technology at an accessible price point"
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Smart processing for enhanced user experiences"
  },
  {
    icon: Cpu,
    title: "Superior Thermal Efficiency",
    description: "Optimized hardware design for extended usage"
  }
];

export default function Innovations() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Innovations & Product Showcase
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-[0_0_20px_rgba(0,255,0,0.2)] transition-all duration-300 h-full">
                <CardHeader>
                  <feature.icon className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-x-4"
          >
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg transition-all hover:scale-105">
              Request a Demo
            </button>
            <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6 py-3 rounded-lg transition-all hover:scale-105">
              Pre-Order Now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
