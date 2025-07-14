import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"]
    },
    {
      title: "Mobile",
      skills: ["React Native", "Flutter", "iOS", "Android", "Expo"]
    },
    {
      title: "Tools & Cloud",
      skills: ["AWS", "Docker", "Kubernetes", "Git", "Figma"]
    }
  ];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
      {/* Background elements */}
      <div className="absolute top-10 left-1/4 w-24 h-24 glass rounded-full animate-float opacity-20" />
      <div className="absolute bottom-10 right-1/4 w-20 h-20 glass rounded-full float-delayed opacity-30" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Technical</span> Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies and frameworks 
            to bring your vision to life with precision and efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl glass-hover group"
            >
              <h3 className="text-2xl font-semibold mb-6 gradient-text">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-200"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground/90 font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <h3 className="text-3xl font-bold text-center mb-16">
            Professional <span className="gradient-text">Journey</span>
          </h3>
          
          <div className="max-w-4xl mx-auto">
            {[
              {
                year: "2024",
                title: "Senior Full Stack Developer",
                company: "Freelance & Consulting",
                description: "Leading end-to-end development projects with focus on scalable architecture and modern tech stacks."
              },
              {
                year: "2023",
                title: "Full Stack Developer",
                company: "Tech Startup",
                description: "Built scalable web applications and mobile apps serving thousands of users daily."
              },
              {
                year: "2022",
                title: "Software Developer",
                company: "Digital Agency",
                description: "Developed custom software solutions and improved development workflows."
              }
            ].map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-center mb-12 last:mb-0"
              >
                <div className="glass p-8 rounded-3xl glass-hover flex-1">
                  <div className="flex items-start space-x-6">
                    <div className="glass px-4 py-2 rounded-xl">
                      <span className="text-primary font-bold">{experience.year}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2">{experience.title}</h4>
                      <p className="text-primary font-medium mb-3">{experience.company}</p>
                      <p className="text-muted-foreground leading-relaxed">
                        {experience.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;