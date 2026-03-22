import SectionWrapper from "../components/SectionWrapper";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { Bot, CalendarClock, Library } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Apprec AI – Smart AI-Powered Recruitment Platform",
      description: "Engineered an AI-powered recruitment platform enabling candidates and recruiters to connect through intelligent job matching, resume parsing, and skill-based similarity analysis.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      features: ["Semantic Skill Matching", "Real-time Messaging", "Secure JWT Authentication"],
      role: "Full Stack Developer",
      githubLink: "https://github.com/21ambuj",
      demoLink: "https://apprec-ai.onrender.com/",
      icon: Bot
    },
    {
      title: "Tima – AI Powered Academic Timetable Scheduler",
      description: "Developed a full-stack academic timetable scheduling system to automatically generate conflict-free timetables based on faculty availability, subjects, rooms, and sections.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      features: ["Conflict validation", "Socket.io real-time updates", "Role-based JWT access"],
      role: "Full Stack Developer",
      githubLink: "https://github.com/21ambuj",
      icon: CalendarClock
    },
    {
      title: "Library Management System",
      description: "Created a Java-based system to manage book records with add, delete, issue, and return operations, structuring role-based workflows for admin and student users.",
      tech: ["Java", "DSA"],
      features: ["Linear & binary search", "Sorting algorithms", "Role-based workflows"],
      role: "Software Developer",
      githubLink: "https://github.com/21ambuj",
      icon: Library
    }
  ];

  return (
    <SectionWrapper id="projects">
      <SectionHeading title="Featured Projects" subtitle="A selection of my best work, spanning web applications, AI integration, and robust algorithms." />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full max-w-7xl mx-auto">
        {projects.map((proj, idx) => (
          <ProjectCard 
            key={proj.title}
            {...proj}
            delay={idx * 0.15}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
