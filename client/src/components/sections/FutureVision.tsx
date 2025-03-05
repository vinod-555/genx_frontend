import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Brain, Globe } from "lucide-react";

const milestones = [
  {
    year: "2024",
    icon: Calendar,
    title: "Market Launch",
    description: "Launch of our first consumer-ready VR headset with breakthrough affordability",
    achievements: [
      "Initial product release",
      "Educational partnership program",
      "Developer SDK launch"
    ]
  },
  {
    year: "2025",
    icon: Brain,
    title: "AI Integration",
    description: "Enhanced AI capabilities for improved user experience and content creation",
    achievements: [
      "Advanced machine learning features",
      "Automated content optimization",
      "Personalized learning paths"
    ]
  },
  {
    year: "2026",
    icon: Globe,
    title: "Global Impact",
    description: "Expanding our reach to emerging markets and diverse sectors",
    achievements: [
      "Worldwide distribution network",
      "Cross-platform ecosystem",
      "Industry-specific solutions"
    ]
  }
];

export default function FutureVision() {
  return (
    <section id="future-vision" className="py-20 bg-background/95 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-50" />

      <div className="container mx-auto px-4 relative">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Future Vision
        </motion.h2>

        <div className="grid gap-16 relative">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.21, 0.45, 0.06, 0.9]
              }}
              className="relative"
            >
              {/* Connecting lines */}
              {index < milestones.length - 1 && (
                <div className="absolute left-[50%] top-full h-16 w-px bg-gradient-to-b from-primary/50 to-transparent" />
              )}

              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                {/* Year marker */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.3 }}
                  className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center relative group"
                >
                  <milestone.icon className="w-8 h-8 text-primary absolute" />
                  <motion.div
                    className="absolute inset-0 rounded-full border border-primary"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <span className="text-xl font-bold text-primary">{milestone.year}</span>
                </motion.div>

                {/* Content card */}
                <motion.div
                  className="flex-1"
                  whileHover={{ scale: 1.02, rotateX: 2, rotateY: index % 2 === 0 ? 2 : -2 }}
                  style={{ perspective: "1000px" }}
                >
                  <Card className="group hover:shadow-[0_0_30px_rgba(0,255,0,0.2)] transition-all duration-500 border border-primary/20 backdrop-blur-sm bg-background/80">
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {milestone.description}
                      </p>
                      <ul className="space-y-2">
                        {milestone.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ x: index % 2 === 0 ? -20 : 20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + (i * 0.1) }}
                            className="flex items-center gap-2 text-muted-foreground"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          ))}

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium rounded-lg group bg-primary/10 text-primary"
            >
              <span className="relative z-10">Join Our Journey</span>
              <motion.div
                className="absolute inset-0 rounded-lg bg-primary"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 0.1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-0 rounded-lg border border-primary"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [1, 0, 1]
                }}
                transition={{
                  duration: 3, //Corrected typo here.  'J' was likely a typo.
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}