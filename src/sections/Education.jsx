import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionHeading from '../components/SectionHeading';

const EDUCATION_DATA = [
  {
    institution: "Lovely Professional University",
    location: "Punjab, India",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    score: "CGPA: 6.81",
    date: "Aug 2023 - Present"
  },
  {
    institution: "S.N. Public School",
    location: "Lohandi, Mirzapur",
    degree: "Intermediate",
    score: "Percentage: 78%",
    date: "Apr 2021 - Mar 2022"
  },
  {
    institution: "S.N. Public School",
    location: "Lohandi, Mirzapur",
    degree: "Matriculation",
    score: "Percentage: 85.4%",
    date: "Apr 2019 - Mar 2020"
  }
];

const EducationCard = ({ institution, location, degree, score, date, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="glass-effect p-6 md:p-8 rounded-2xl border border-border/50 hover:border-primary/40 transition-all mb-6 group"
  >
    <div className="flex flex-col md:flex-row justify-between mb-4 md:items-start gap-4">
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-blue-200 group-hover:text-blue-300 transition-colors">{institution}</h3>
        <p className="text-textSecondary text-sm md:text-base mt-1">{location}</p>
      </div>
      <div className="shrink-0 self-start">
        <span className="inline-block text-xs md:text-sm font-semibold text-purple-300 bg-purple-900/30 border border-purple-500/20 px-4 py-1.5 rounded-full whitespace-nowrap">
          {date}
        </span>
      </div>
    </div>
    
    <div className="mt-2">
      <p className="text-textMain text-base md:text-lg font-medium">{degree}</p>
      <p className="text-textSecondary text-sm md:text-base mt-2">{score}</p>
    </div>
  </motion.div>
);

export default function Education() {
  return (
    <SectionWrapper id="education" className="relative">
      <SectionHeading 
        title="My Education" 
        subtitle="My academic background and qualifications." 
      />
      
      <div className="max-w-4xl mx-auto w-full mt-12">
        {EDUCATION_DATA.map((edu, idx) => (
          <EducationCard key={idx} index={idx} {...edu} />
        ))}
      </div>
    </SectionWrapper>
  );
}
