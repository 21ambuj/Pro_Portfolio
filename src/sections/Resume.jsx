import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import { Mail, Phone, Linkedin, Github, Download } from 'lucide-react';
import Button from '../components/Button';

// Top Contact Badges
const ContactBadge = ({ icon: Icon, text, href }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-4 py-2 bg-card/80 border border-border/50 rounded-full hover:border-primary/50 transition-colors cursor-pointer group"
  >
    <Icon size={16} className="text-primary group-hover:text-purple-400 transition-colors" />
    <span className="text-sm font-medium text-textSecondary group-hover:text-textMain">{text}</span>
  </a>
);

// Unified Content Card
const ResumeCard = ({ type, title, subtitle, date, points, tech }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.3 }}
    className="glass-effect p-6 md:p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all mb-6 relative overflow-hidden group"
  >
    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    
    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
      <div>
        <span className="text-xs text-primary font-bold uppercase tracking-wider bg-primary/10 px-2 py-1 rounded-md">{type}</span>
        <h3 className="text-xl md:text-2xl font-black text-textMain mt-3">{title}</h3>
        {subtitle && <p className="text-textSecondary text-sm md:text-base font-medium mt-1">{subtitle}</p>}
      </div>
      <span className="text-sm md:text-base text-primary/80 font-semibold whitespace-nowrap bg-primary/5 px-3 py-1.5 rounded-lg border border-primary/20">{date}</span>
    </div>

    <ul className="space-y-3 mt-6">
      {points.map((point, idx) => (
        <li key={idx} className="text-sm md:text-base text-textSecondary flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 shrink-0" />
          <span className="leading-relaxed">{point}</span>
        </li>
      ))}
    </ul>

    {tech && (
      <div className="mt-6 pt-4 border-t border-border/30">
        <p className="text-xs md:text-sm text-textSecondary">
          <span className="font-semibold text-textMain">Tech: </span> {tech}
        </p>
      </div>
    )}
  </motion.div>
);

const RESUME_DATA = {
  Education: [
    {
      type: "Degree",
      title: "Bachelor of Technology - Computer Science and Engineering",
      subtitle: "Lovely Professional University | CGPA: 6.81",
      date: "Aug 2023 - Present",
      points: [
        "Pursuing core computer science fundamentals including Data Structures, Algorithms, OS, and OOPs.",
        "Actively participating in hackathons and competitive programming."
      ]
    },
    {
      type: "Intermediate",
      title: "Class XII (12th Grade)",
      subtitle: "S.N Public School, Lohandi, Mirzapur | Percentage: 78%",
      date: "Apr 2021 - Mar 2022",
      points: [
        "Completed higher secondary education with a focus on science and mathematics."
      ]
    },
    {
      type: "Matriculation",
      title: "Class X (10th Grade)",
      subtitle: "S.N. Public School, Lohandi, Mirzapur | Percentage: 85.4%",
      date: "Apr 2019 - Mar 2020",
      points: [
        "Built a strong foundation in science, mathematics, and logical reasoning."
      ]
    }
  ],
  Skills: [
    {
      type: "Technical Skills",
      title: "Programming Languages & Core Tech",
      subtitle: "Full Stack Development Arsenal",
      date: "Active",
      points: [
        "Languages: JavaScript, HTML, CSS, Java, Kotlin",
        "Frameworks & Libraries: React.js, Tailwind CSS",
        "Backend & APIs: Node.js, Express.js, REST APIs, MySQL, MongoDB",
        "Core CS Fundamentals: Data Structures & Algorithms (DSA), Operating Systems, Object-Oriented Programming (OOPs)",
        "Tools & Platforms: Git, GitHub, VS Code, Android Studio",
        "Soft Skills: Problem-Solving, Teamwork & Collaboration, Adaptability, Quick Learner"
      ]
    }
  ],
  Projects: [
    {
      type: "Full Stack",
      title: "Apprec AI – Smart AI-Powered Recruitment Platform",
      subtitle: "Personal Project",
      date: "Feb 2026",
      points: [
        "Engineered an AI-powered recruitment platform enabling candidates and recruiters to connect through intelligent job matching, resume parsing, and skill-based similarity analysis.",
        "Built a modern and responsive user interface using React.js, Tailwind CSS, and Framer Motion, enabling seamless navigation and engaging user experience.",
        "Implemented backend services with Node.js, Express.js, and MongoDB, integrating vector-based similarity matching, real-time recruiter messaging with Socket.io, and secure JWT authentication."
      ],
      tech: "React.js, Node.js, Express.js, MongoDB, JavaScript, Tailwind CSS"
    },
    {
      type: "Full Stack",
      title: "Tima – AI Powered Academic Timetable Scheduler",
      subtitle: "Personal Project",
      date: "Dec 2025",
      points: [
        "Developed a full-stack academic timetable scheduling system to automatically generate conflict-free timetables based on faculty availability, subjects, rooms, and sections.",
        "Designed a modern, responsive, and user-friendly interface using React.js and Tailwind CSS.",
        "Integrated role-based authentication using JWT, real-time timetable generation updates with Socket.io, and validation logic to prevent faculty, room, and time-slot conflicts."
      ],
      tech: "React.js, Node.js, Express.js, MongoDB, JavaScript, Tailwind CSS"
    },
    {
      type: "Backend / Desktop",
      title: "Library Management System",
      subtitle: "Personal Project",
      date: "Jul 2025",
      points: [
        "Created a Java-based system to manage book records with add, delete, issue, and return operations.",
        "Applied DSA concepts including linear search, binary search, and sorting for fast book lookup.",
        "Structured role-based workflows for admin and student users with organized data views for information access."
      ],
      tech: "Java, VS Code"
    }
  ],
  Extracurricular: [
    {
      type: "Summer Training",
      title: "Cipher Schools (Software Company)",
      subtitle: "Data Structures and Algorithms",
      date: "Jul 2025",
      points: [
        "Completed training in Data Structures and Algorithms using Java, covering core concepts and problem-solving techniques through structured coursework and guided instruction.",
        "Strengthened programming fundamentals by implementing algorithmic solutions and solving coding problems in Java, improving logical thinking and efficiency."
      ],
      tech: "Java, VS Code"
    },
    {
      type: "Hackathon",
      title: "IIT Bhubaneswar Frontend Hackathon",
      subtitle: "Competitive Event",
      date: "2024",
      points: [
        "Secured a Top 100 position in the IIT Bhubaneswar Frontend Hackathon and received the Final Merit Certificate.",
        "Demonstrated strong UI/UX design and frontend development skills under tight deadlines."
      ]
    },
    {
      type: "Problem Solving",
      title: "Competitive Programming",
      subtitle: "Continuous Learning",
      date: "Ongoing",
      points: [
        "Solved 150+ coding problems across LeetCode, HackerRank, and other competitive programming platforms, strengthening problem-solving and algorithmic logic skills."
      ]
    }
  ],
  Certificates: [
    {
      type: "Certification",
      title: "React & Node Skill Certifications",
      subtitle: "HackerRank",
      date: "Feb 2026",
      points: [
        "Demonstrated proficiency in React.js and Node.js fundamentals and advanced concepts through rigorous assessment."
      ]
    },
    {
      type: "Certification",
      title: "Master Generative AI & Generative AI Tools",
      subtitle: "Infosys",
      date: "Aug 2025",
      points: [
        "Gained comprehensive knowledge of generative AI concepts and practical application of AI tools."
      ]
    },
    {
      type: "Certification",
      title: "Java Programming",
      subtitle: "NeoColab",
      date: "May 2025",
      points: [
        "Certified in core Java programming concepts and object-oriented paradigms."
      ]
    }
  ]
};

const TABS = ['Education', 'Skills', 'Projects', 'Extracurricular', 'Certificates'];

export default function Resume() {
  const [activeTab, setActiveTab] = useState('Education');

  return (
    <SectionWrapper id="resume" className="relative">
      
      {/* Centered Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-black text-textMain tracking-tight">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Resume</span>
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-purple-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto w-full">
        
        {/* Contact Badges */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10">
          <ContactBadge icon={Mail} text="ambuj20maurya@gmail.com" href="mailto:ambuj20maurya@gmail.com" />
          <ContactBadge icon={Phone} text="+91-9369572534" href="tel:+919369572534" />
          <ContactBadge icon={Linkedin} text="LinkedIn" href="https://linkedin.com/in/21ambuj" />
          <ContactBadge icon={Github} text="GitHub" href="https://github.com/21ambuj" />
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-10 p-2 bg-card/40 backdrop-blur-md rounded-2xl md:rounded-full border border-border/50">
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-xl md:rounded-full text-sm font-semibold transition-all duration-300 w-full sm:w-auto ${
                activeTab === tab 
                  ? 'bg-gradient-to-r from-primary to-purple-600 text-white shadow-lg shadow-primary/25 scale-105' 
                  : 'text-textSecondary hover:text-textMain hover:bg-white/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <div key={activeTab}>
              {RESUME_DATA[activeTab].map((item, idx) => (
                <ResumeCard key={idx} {...item} />
              ))}
            </div>
          </AnimatePresence>
        </div>

        {/* Download Button */}
        <div className="flex justify-center mt-12">
          <Button variant="primary" className="px-8 py-4 text-base font-semibold gap-3 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
            <a href="ambujcv.pdf" download className="flex items-center gap-2">
              <Download size={20} />
              Download Full Resume
            </a>
          </Button>
        </div>
        
      </div>
    </SectionWrapper>
  );
}
