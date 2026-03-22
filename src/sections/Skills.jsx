import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "HTML", "CSS", "Java", "Kotlin"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Tailwind CSS"]
    },
    {
      title: "Backend & APIs",
      skills: ["Node.js", "Express.js", "MySQL", "MongoDB", "REST APIs"]
    },
    {
      title: "Core CS Fundamentals",
      skills: ["DSA", "OS", "OOPs"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Android Studio"]
    },
    {
      title: "Soft Skills",
      skills: ["Problem-Solving", "Teamwork & Collaboration", "Adaptability", "Quick Learner"]
    }
  ];

  return (
    <SectionWrapper id="skills">
      <SectionHeading title="Technical Arsenal" subtitle="A showcase of technologies I've mastered on my journey as a developer." />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full max-w-6xl mx-auto">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            className="glass-effect rounded-2xl p-6 border border-white/5 hover:border-primary/50 transition-colors group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center group-hover:text-primary transition-colors">
              <span className="w-2 h-2 rounded-full bg-primary mr-3"></span>
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {cat.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium hover:bg-primary/20 hover:border-primary/50 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
