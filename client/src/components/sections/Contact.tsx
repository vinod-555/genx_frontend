import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MessageCircle, Phone, Instagram } from "lucide-react";
import { SiX } from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "contact@genxreality.com",
    href: "mailto:contact@genxreality.com"
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+1 (555) 123-4567",
    href: "tel:+15551234567"
  },
  {
    icon: MessageCircle,
    title: "Social Media",
    content: "Follow us for updates",
    href: "#"
  }
];

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com",
    label: "GitHub"
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com",
    label: "LinkedIn"
  },
  {
    icon: Instagram,
    href: "https://instagram.com",
    label: "Instagram"
  },
  {
    icon: SiX,
    href: "https://x.com",
    label: "X (Twitter)"
  },
  {
    icon: Mail,
    href: "mailto:contact@genxreality.com",
    label: "Email"
  }
];

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Get in Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="prose prose-invert max-w-none mb-8"
            >
              <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
              <p className="text-muted-foreground">
                Have questions about our VR solutions? We'd love to hear from you. 
                Send us a message and we'll respond as soon as possible.
              </p>
            </motion.div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-[0_0_20px_rgba(0,255,0,0.1)] transition-all duration-300">
                    <CardContent className="p-4 flex items-center space-x-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium">{item.title}</h4>
                        <a
                          href={item.href}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.content}
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Social Media Links */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary/10 rounded-lg text-muted-foreground hover:text-primary transition-colors duration-300 hover:shadow-[0_0_15px_rgba(0,255,0,0.2)] group"
                    title={social.label}
                  >
                    <social.icon className={`w-6 h-6 ${social.label === 'X (Twitter)' ? 'fill-current' : ''}`} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-card rounded-lg p-6 shadow-lg hover:shadow-[0_0_30px_rgba(0,255,0,0.1)] transition-all duration-500"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="transition-all duration-300 focus:border-primary focus:ring-1 focus:ring-primary hover:border-primary/50 shadow-none hover:shadow-[0_0_10px_rgba(0,255,0,0.1)]" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="email" 
                          className="transition-all duration-300 focus:border-primary focus:ring-1 focus:ring-primary hover:border-primary/50 shadow-none hover:shadow-[0_0_10px_rgba(0,255,0,0.1)]" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          className="min-h-[150px] transition-all duration-300 focus:border-primary focus:ring-1 focus:ring-primary hover:border-primary/50 shadow-none hover:shadow-[0_0_10px_rgba(0,255,0,0.1)]" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,0,0.3)] hover:scale-[1.02]"
                >
                  Send Message
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}