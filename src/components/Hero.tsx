import { motion } from "framer-motion";
import { ArrowRight, Code, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),transparent)]" />
      
      {/* Floating glass elements */}
      <div className="absolute top-20 left-10 w-20 h-20 glass rounded-full animate-float opacity-60" />
      <div className="absolute top-40 right-20 w-16 h-16 glass rounded-full float-delayed opacity-40" />
      <div className="absolute bottom-20 left-20 w-24 h-24 glass rounded-full animate-float opacity-50" />
      <div className="absolute bottom-40 right-10 w-12 h-12 glass rounded-full float-delayed opacity-60" />
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center glass px-4 py-2 rounded-full text-sm text-muted-foreground mb-8"
          >
            <Sparkles className="w-4 h-4 mr-2 text-primary" />
            Premium Software Development
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            <span className="gradient-text">Zwe Htet Naing</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Crafting exceptional digital experiences through innovative software solutions 
            and cutting-edge technology
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          >
            <Button 
              size="lg" 
              className="btn-primary-glass group h-14 px-8 text-lg font-medium"
            >
              <Code className="w-5 h-5 mr-2" />
              View My Work
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="glass glass-hover h-14 px-8 text-lg font-medium border-white/20"
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto"
          >
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "3+", label: "Years Experience" },
              { number: "100%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="glass p-6 rounded-2xl glass-hover">
                <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                <div className="text-muted-foreground mt-2">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;