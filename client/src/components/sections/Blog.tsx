import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const blogPosts = [
  {
    title: "Solving the Cost and Accessibility Barriers of VR: GenX Reality's Approach",
    description: "Discover how we're making VR technology accessible to everyone through innovative solutions and cost-effective design. Our optimized components and streamlined manufacturing process are revolutionizing VR accessibility.",
    image: "/blog/accessibility.jpg"
  },
  {
    title: "VR for Education: Transforming Learning in Emerging Markets",
    description: "Explore how VR is revolutionizing education, especially in underserved regions. Learn about our initiatives to democratize immersive learning experiences across diverse educational environments.",
    image: "/blog/education.jpg"
  },
  {
    title: "What Makes GenX Reality's Immersive Technology Unique?",
    description: "An in-depth look at our innovative approach to VR hardware and software integration. Discover how our optimized components and streamlined manufacturing create affordable yet powerful VR solutions.",
    image: "/blog/technology.jpg"
  }
];

export default function Blog() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Latest Insights
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.6, 0.05, 0.01, 0.9]
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                perspective: "1000px"
              }}
            >
              <motion.div
                animate={{
                  rotateX: hoveredIndex === index ? 2 : 0,
                  rotateY: hoveredIndex === index ? 2 : 0,
                  scale: hoveredIndex === index ? 1.02 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                <Card className="overflow-hidden h-full hover:shadow-[0_0_20px_rgba(0,255,0,0.2)] transition-shadow duration-300">
                  <div className="h-48 bg-primary/10 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-primary/20">
                      <span className="text-lg">Coming Soon</span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-3">{post.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}