import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-scroll';
import SectionWrapper from "../components/SectionWrapper";
import Button from "../components/Button";
import { Download, Rocket } from "lucide-react";

export default function Hero() {
  // Generate some random floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));

  return (
    <SectionWrapper id="hero" className="min-h-[90vh] pt-32 lg:pt-40 relative overflow-hidden flex items-center">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-primary/30 blur-[1px]"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: ["0%", "-100%", "0%"],
              x: ["0%", "50%", "0%"],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear",
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-5xl mx-auto">
        
        {/* Profile Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
          className="relative group cursor-pointer mb-2"
        >
          {/* Animated Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-blue-400 rounded-full blur opacity-50 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-500"></div>
          
          {/* Image Container */}
          <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-card bg-background overflow-hidden flex items-center justify-center shadow-2xl">
            {/* Replace src with your real photo path (e.g. src="/profile.jpg") */}
            <img 
              src="profile.jpg" 
              alt="Ambuj Maurya" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 bg-white"
            />
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 50 }}
          className="text-4xl md:text-5xl lg:text-7xl font-black leading-[1.2] tracking-tight"
        >
        
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-purple-600 animate-gradient-x">
            Ambuj Kumar Maurya
          </span>
        </motion.h1>

        {/* Typewriter Subheadline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-3xl lg:text-4xl text-textSecondary font-semibold h-10 mt-2"
        >
          <Typewriter
            words={['Full Stack Developer', 'Android App Developer', 'Problem Solver', 'Tech Enthusiast']}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={2500}
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-base md:text-lg text-textSecondary max-w-2xl font-light leading-relaxed mt-4"
        >
 Passionate about building scalable web and mobile applications, delivering elegant, intuitive, and high-performance solutions to real-world problems.</motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto"
        >
          <Link to="projects" smooth={true} duration={500} offset={-80} className="w-full sm:w-auto mt-2">
            <Button variant="primary" className="w-full sm:w-auto px-6 py-3 text-base font-semibold gap-2 group relative overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] transition-all">
              <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
              View Projects 
              <Rocket size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </Link>
          
          <Button variant="outline" className="w-full sm:w-auto px-6 py-3 text-base font-semibold gap-2 text-textMain border-textSecondary/30 hover:border-textMain hover:bg-white/5 transition-all group mt-2">
            <a href="ambujcv.pdf" download>Download Resume</a>
            <Download size={18} className="group-hover:translate-y-1 transition-transform" />
          </Button>
        </motion.div>

      </div>
    </SectionWrapper>
  );
}
