import { motion } from "framer-motion";
import { Zap, Shield, Palette, Smartphone } from "lucide-react";

const About = () => {
  const services = [
    {
      icon: Zap,
      title: "Full Stack Development",
      description: "End-to-end web applications with modern frameworks and scalable architecture."
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed with user-centered design principles."
    },
    {
      icon: Shield,
      title: "DevOps & Cloud",
      description: "Secure, scalable cloud infrastructure and automated deployment solutions."
    }
  ];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
      {/* Background elements */}
      <div className="absolute top-20 right-10 w-32 h-32 glass rounded-full animate-float opacity-30" />
      <div className="absolute bottom-20 left-10 w-28 h-28 glass rounded-full float-delayed opacity-20" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="gradient-text">My Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I specialize in creating digital solutions that blend cutting-edge technology 
            with exceptional user experience. Every project is crafted with precision and passion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl glass-hover group"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 glass rounded-2xl group-hover:glow transition-all duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3 group-hover:gradient-text transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glass p-12 rounded-3xl max-w-4xl mx-auto">
            <blockquote className="text-2xl sm:text-3xl font-light text-foreground/90 italic leading-relaxed">
              "Excellence is not a skill, it's an attitude. Every line of code, 
              every pixel, every user interaction is an opportunity to create something remarkable."
            </blockquote>
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="font-semibold text-lg gradient-text">Zwe Htet Naing</div>
              <div className="text-muted-foreground">Software Developer & Digital Craftsman</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;