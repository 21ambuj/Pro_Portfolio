import { motion } from "framer-motion";
import React, { useState } from "react";
import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";

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
          <CertCard key={idx} cert={cert} idx={idx} />
        ))}
      </div>
    </SectionWrapper>
  );
}

function CertCard({ cert, idx }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        className="glass-effect rounded-xl overflow-hidden group shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(59,130,246,0.15)] border border-white/5 flex flex-col h-full relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: idx * 0.1 }}
      >
        {/* Image with View overlay */}
        <div className="w-full h-40 bg-card border-b border-border/50 relative overflow-hidden group-hover:border-primary/30 transition-colors">
          <img 
            src={cert.image} 
            alt={cert.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          />
          {/* View button overlay */}
          <div
            onClick={() => setOpen(true)}
            className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          >
            <span className="text-white text-sm font-semibold border border-white/60 px-4 py-1.5 rounded-full backdrop-blur-sm hover:bg-white/20 transition">
              View
            </span>
          </div>
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

      {/* Lightbox Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={cert.image} alt={cert.name} className="w-full h-auto object-contain" />
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 bg-black/70 hover:bg-black text-white rounded-full w-9 h-9 flex items-center justify-center text-lg font-bold transition"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
