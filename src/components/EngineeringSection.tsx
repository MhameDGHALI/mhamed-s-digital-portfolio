import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Calendar } from "lucide-react";

const semesters = [
  {
    title: "Semestre 1 - ENSIAS",
    period: "Sept 2023 - Jan 2024",
    modules: [
      "Algorithmique et Structures de Données",
      "Programmation Orientée Objet (Java)",
      "Bases de Données Relationnelles",
      "Mathématiques pour l'Informatique",
      "Systèmes d'Exploitation",
    ],
  },
  {
    title: "Semestre 2 - ENSIAS",
    period: "Fév 2024 - Juin 2024",
    modules: [
      "Business Intelligence",
      "Data Warehousing",
      "Statistiques et Probabilités",
      "Développement Web (HTML/CSS/JS)",
      "Réseaux Informatiques",
    ],
  },
  {
    title: "Semestre 3 - ENSIAS",
    period: "Sept 2024 - Jan 2025",
    modules: [
      "Machine Learning",
      "Big Data Technologies",
      "Data Mining",
      "Python pour la Data Science",
      "Visualisation de Données",
    ],
  },
  {
    title: "Semestre 4 - ENSEEIHT",
    period: "Sept 2025 - Jan 2026",
    modules: [
      "High Performance Computing (HPC)",
      "Calcul Parallèle",
      "Architecture des Supercalculateurs",
      "Optimisation Numérique",
      "Cloud Computing",
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
            Formation d'Ingénieur
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Parcours <span className="text-gradient">Académique</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez les modules et compétences acquises au fil de ma formation
            en ingénierie informatique spécialisée en Business Intelligence,
            Analytics, HPC et Big Data.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
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
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar size={14} />
                  {semester.period}
                </div>
              </div>

              <ul className="space-y-3">
                {semester.modules.map((module, moduleIndex) => (
                  <li
                    key={moduleIndex}
                    className="flex items-start gap-3 text-foreground/80"
                  >
                    <BookOpen
                      size={16}
                      className="text-accent mt-1 flex-shrink-0"
                    />
                    <span className="text-sm">{module}</span>
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
