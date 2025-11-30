import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Calendar } from "lucide-react";

const semesters = [
  {
    title: "Semestre 1 - ENSIAS",
    period: "Sept 2023 - Jan 2024",
    modules: [
      "Business Intelligence Analytics",
      "Algorithmique et structures de données",
      "Architectures des ordinateurs",
      "Éléments de recherche opérationnelle",
      "Éthique, métiers & projet de challenge",
      "Gestion, économie et finance 1",
      "Langue, communication et développement personnel",
      "Statistiques et probabilité appliquée",
    ],
  },
  {
    title: "Semestre 2 - ENSIAS",
    period: "Fév 2024 - Juin 2024",
    modules: [
      "Base de données",
      "Économie, gestion et finance 2",
      "Fondements de l'informatique",
      "Programmation orientée objet",
      "Réseaux et système",
      "Langue, communication et développement personnel 2",
    ],
  },
  {
    title: "Semestre 3 - ENSIAS",
    period: "Sept 2024 - Jan 2025",
    modules: [
      "Administration systèmes",
      "Culture entrepreneuriale",
      "Langues, communication et développement personnel 2i",
      "Machine learning",
      "Modèle TCP/IP architecture client/serveur",
      "Statistiques et analyse de données",
      "Systèmes d'information et modélisation objet",
      "Technologies et développement web",
    ],
  },
  {
    title: "Semestre 4 - ENSIAS",
    period: "Fév 2025 - Juin 2025",
    modules: [
      "Conduite de projets informatiques & processus développement",
      "Data analytics",
      "Databases for BI and Analytics",
      "Langue, communication et développement personnel IV",
      "Management avancé",
      "Module d'ouverture 2",
      "Projet fédérateur de deuxième année",
      "Sécurité et cloud computing",
    ],
  },
  {
    title: "Semestre 5 - ENSEEIHT",
    period: "Sept 2025 - Jan 2026",
    modules: [
      "Soft and Human Skills 3 (English, Spanish, Sport, Careers and Management)",
      "Programmation Fonctionnelle et Traduction des Langages",
      "Théorie des Automates et des Langages, Théorie des Graphes",
      "Génie du Logiciel et des Systèmes",
      "Optimisation et RO",
      "Systèmes concurrents et communicants",
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
