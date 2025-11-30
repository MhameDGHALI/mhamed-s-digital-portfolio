import { motion } from "framer-motion";
import { Users, Trophy, Lightbulb, ImageIcon } from "lucide-react";

const activities = [
  {
    title: "Responsable Cellule Projet",
    organization: "Fintech Club",
    description:
      "Coordination des membres pour participer à des hackathons et proposer des idées innovantes dans le domaine de la Fintech.",
    icon: Lightbulb,
    color: "accent",
  },
  {
    title: "Responsable Cellule Jeux Culturels",
    organization: "Olympiades ENSIAS",
    description:
      "Organisation des activités de la journée, encadrement des équipes et animation des événements pour garantir leur succès.",
    icon: Trophy,
    color: "primary",
  },
  {
    title: "Membre du Club Enactus",
    organization: "ENSIAS",
    description:
      "Gestion du sponsoring, établissement de partenariats et recherche de financements pour soutenir les activités et événements.",
    icon: Users,
    color: "accent",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export const ExtracurricularSection = () => {
  return (
    <section id="extracurricular" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Users size={18} />
            Engagement
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Activités <span className="text-gradient">Parascolaires</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mon engagement associatif et mes responsabilités au sein de clubs
            étudiants.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card rounded-xl p-6 shadow-card border border-border hover-lift"
            >
              <div
                className={`w-12 h-12 rounded-lg ${
                  activity.color === "accent" ? "bg-accent/10" : "bg-primary/10"
                } flex items-center justify-center mb-4`}
              >
                <activity.icon
                  className={
                    activity.color === "accent" ? "text-accent" : "text-primary"
                  }
                  size={24}
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {activity.title}
              </h3>
              <p className="text-sm text-accent mb-3">{activity.organization}</p>
              <p className="text-sm text-muted-foreground">
                {activity.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Photo Gallery Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-xl p-8 shadow-card border border-border"
        >
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <ImageIcon className="text-accent" size={24} />
            Galerie Photos
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className="aspect-square bg-secondary rounded-lg border-2 border-dashed border-border flex items-center justify-center hover:border-accent transition-colors cursor-pointer"
              >
                <div className="text-center">
                  <ImageIcon className="text-muted-foreground mx-auto mb-2" size={32} />
                  <p className="text-xs text-muted-foreground">Photo {index}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4 text-center">
            Ajoutez vos photos d'activités parascolaires ici
          </p>
        </motion.div>
      </div>
    </section>
  );
};
