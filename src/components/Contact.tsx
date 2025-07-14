import { motion } from "framer-motion";
import { Mail, MessageCircle, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Drop me a line anytime",
      action: "zwehtetnaing@email.com",
      href: "mailto:zwehtetnaing@email.com"
    },
    {
      icon: MessageCircle,
      title: "Let's Chat",
      description: "Schedule a consultation",
      action: "Book a Call",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com",
      color: "hover:text-white"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-40 h-40 glass rounded-full animate-float opacity-20" />
      <div className="absolute bottom-20 right-10 w-32 h-32 glass rounded-full float-delayed opacity-30" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Let's Create Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to bring your vision to life? I'm here to help you build 
            exceptional software solutions that make a difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Methods */}
          <div className="space-y-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-3xl glass-hover group"
              >
                <div className="flex items-start space-x-6">
                  <div className="p-4 glass rounded-2xl group-hover:glow">
                    <method.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">{method.title}</h3>
                    <p className="text-muted-foreground mb-6">{method.description}</p>
                    <Button 
                      asChild
                      className="btn-primary-glass group/btn"
                    >
                      <a href={method.href}>
                        {method.action}
                        <ArrowUpRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-12 rounded-3xl glass-hover"
          >
            <div className="text-center">
              <div className="glass w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 animate-float">
                <MessageCircle className="w-12 h-12 text-primary" />
              </div>
              
              <h3 className="text-3xl font-bold mb-6">
                Ready to Start Your <span className="gradient-text">Project</span>?
              </h3>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Let's discuss your ideas and turn them into reality. 
                I'm excited to hear about your next project and explore 
                how we can work together.
              </p>
              
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="btn-primary-glass w-full h-14 text-lg font-medium"
                >
                  Start a Conversation
                  <ArrowUpRight className="w-5 h-5 ml-2" />
                </Button>
                
                <div className="flex justify-center space-x-6 pt-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      className={`glass p-4 rounded-2xl glass-hover transition-colors ${social.color}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-12 border-t border-white/10"
        >
          <p className="text-muted-foreground">
            © 2024 Zwe Htet Naing. Crafted with passion and precision.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;