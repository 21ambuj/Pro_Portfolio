import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";
import { CheckCircle } from "lucide-react";

export default function Certificates() {
  const certificates = [
    { 
      name: "React Skill Certification", 
      issuer: "HackerRank", 
      date: "Feb 2026",
      image: "c1.png" 
    },
    { 
      name: "Node Skill Certification", 
      issuer: "HackerRank", 
      date: "Feb 2026",
      image: "c2.png" 
    },
    { 
      name: "Master Generative AI & Tools", 
      issuer: "Infosys", 
      date: "Aug 2025",
      image: "c3.png" 
    },
    { 
      name: "Java Programming", 
      issuer: "NeoColab", 
      date: "May 2025",
      image: "c4.png"
    }
  ];

  return (
    <SectionWrapper id="certificates">
      <SectionHeading title="Certifications" subtitle="Professional credentials validating my technical expertise and continuous learning." />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-7xl mx-auto w-full">
        {certificates.map((cert, idx) => (
          <motion.div
            key={idx}
            className="glass-effect rounded-xl overflow-hidden group cursor-default shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(59,130,246,0.15)] border border-white/5 flex flex-col h-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            {/* Image Placeholder */}
            <div className="w-full h-40 bg-card border-b border-border/50 relative overflow-hidden group-hover:border-primary/30 transition-colors">
              <img 
                src={cert.image} 
                alt={cert.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            
            {/* Content Details */}
            <div className="p-6 relative z-10 flex flex-col flex-grow justify-between">
              <div>
                <h3 className="text-lg font-bold mb-2 leading-tight text-textMain group-hover:text-primary transition-colors">{cert.name}</h3>
              </div>
              <div className="flex justify-between items-end mt-4">
                <p className="text-textSecondary text-xs font-semibold uppercase tracking-wider">
                  {cert.issuer}
                </p>
                <span className="text-xs text-primary/70 font-medium bg-primary/10 px-2 py-1 rounded-md">{cert.date}</span>
              </div>
            </div>

            {/* Hover Glow line */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-300"></div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
