import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Calendar } from "lucide-react";

const semesters = [
  {
    title: "Preparatory Classes (CPGE) - Lycée Moulay Idriss",
    period:"Sep 2021 - Jun 2023",
    modules: [
      "Advanced Mathematics",
      "Advanced Physics",
      "Computer Science",
      "French - English Translation",
      "Chemistry",
      "Engineering Sciences",
    ],
  },
  {
    title: "Semester 1 - ENSIAS",
    period: "Sep 2023 - Jan 2024",
    modules: [
      "Business Intelligence Analytics",
      "Algorithms and Data Structures",
      "Computer Architecture",
      "Operations Research Fundamentals",
      "Ethics, Careers & Challenge Project",
      "Management, Economics and Finance 1",
      "Language, Communication and Personal Development",
      "Applied Statistics and Probability",
    ],
  },
  {
    title: "Semester 2 - ENSIAS",
    period: "Feb 2024 - Jun 2024",
    modules: [
      "Databases",
      "Economics, Management and Finance 2",
      "Foundations of Computer Science",
      "Object-Oriented Programming",
      "Networks and Systems",
      "Language, Communication and Personal Development 2",
    ],
  },
  {
    title: "Semester 3 - ENSIAS",
    period: "Sep 2024 - Jan 2025",
    modules: [
      "Systems Administration",
      "Entrepreneurial Culture",
      "Language, Communication and Personal Development 3",
      "Machine Learning",
      "TCP/IP Model and Client/Server Architecture",
      "Statistics and Data Analysis",
      "Information Systems and Object Modeling",
      "Web Technologies and Development",
    ],
  },
  {
    title: "Semester 4 - ENSIAS",
    period: "Feb 2025 - Jun 2025",
    modules: [
      "IT Project Management & Development Processes",
      "Data analytics",
      "Databases for BI and Analytics",
      "Language, Communication and Personal Development 4",
      "Advanced Management",
      "Elective Module 2",
      "Second-Year Capstone Project",
      "Security and Cloud Computing",
    ],
  },
  {
    title: "Semester 5 - ENSEEIHT",
    period: "Sep 2025 - Jan 2026",
    modules: [
      "Soft and Human Skills 3 (English, Spanish, Sport, Careers and Management)",
      "Functional Programming and Language Translation",
      "Automata and Language Theory, Graph Theory",
      "Software and Systems Engineering",
      "Optimization and Operations Research",
      "Concurrent and Communicating Systems",
    ],
  },
  {
    title: "Semester 6 - ENSEEIHT",
    period: "Feb 2026 - Jun 2026",
    modules: [
      "Soft and Human Skills 3 (English, Spanish, Sport, Careers and Management)",
      "Concurrent and Communicating Applications, Databases",
      "Advanced Linear Algebra",
      "Control and Multiresolution Analysis",
      "Geometric Modeling",
      "Machine Learning and Optimization",
    ],
  },
  {
    title: "Semester 7 - ENSEEIHT",
    period: "Sep 2026 - Jan 2027",
    modules: [
      "Soft and Human Skills 3 (English, Careers and Management)",
      "Distributed Systems and Security",
      "Advanced Statistical Machine Learning",
      "High Performance Scientific Computing",
      "Inverse Problems",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const EngineeringSection = () => {
  return (
    <section id="engineering" className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <GraduationCap size={18} />
            Engineering Degree
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Academic <span className="text-gradient">Background</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Modules and skills acquired throughout my computer engineering
            studies, specialized in Business Intelligence, Analytics, HPC and
            Big Data.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {semesters.map((semester, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card rounded-xl p-6 shadow-card hover-lift border border-border"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground">
                  {semester.title}
                </h3>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                <Calendar size={14} />
                {semester.period}
              </div>

              <ul className="space-y-2">
                {semester.modules.map((module, moduleIndex) => (
                  <li
                    key={moduleIndex}
                    className="flex items-start gap-2 text-foreground/80"
                  >
                    <BookOpen
                      size={14}
                      className="text-accent mt-1 flex-shrink-0"
                    />
                    <span className="text-xs">{module}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
