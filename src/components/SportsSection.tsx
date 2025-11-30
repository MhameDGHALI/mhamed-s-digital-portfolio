import { motion } from "framer-motion";
import { Dribbble, Waves, CircleDot, Activity } from "lucide-react";

const sports = [
  {
    name: "Football",
    icon: Dribbble,
    description: "Sport d'équipe pratiqué régulièrement",
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "Natation",
    icon: Waves,
    description: "Pour le cardio et la détente",
    color: "from-blue-500 to-cyan-600",
  },
  {
    name: "Billard",
    icon: CircleDot,
    description: "Sport de précision et de stratégie",
    color: "from-amber-500 to-orange-600",
  },
];

export const SportsSection = () => {
  return (
    <section id="sports" className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Activity size={18} />
            Sports & Loisirs
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Activités <span className="text-gradient">Sportives</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Le sport fait partie intégrante de mon équilibre de vie, alliant
            activité physique et bien-être mental.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {sports.map((sport, index) => (
            <motion.div
              key={sport.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border hover-lift text-center">
                <div
                  className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${sport.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <sport.icon size={36} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {sport.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {sport.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
