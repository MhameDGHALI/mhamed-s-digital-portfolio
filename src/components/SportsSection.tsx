import { motion } from "framer-motion";
import { Dribbble, Waves, CircleDot, Disc, Sparkles } from "lucide-react";

const activities = [
  {
    name: "Football",
    icon: Dribbble,
    description: "",
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "Natation",
    icon: Waves,
    description: "",
    color: "from-blue-500 to-cyan-600",
  },
  {
    name: "Billard",
    icon: CircleDot,
    description: "",
    color: "from-amber-500 to-orange-600",
  },
  {
    name: "Ultimate",
    icon: Disc,
    description: "",
    color: "from-purple-500 to-indigo-600",
  },
];

export const SportsSection = () => {
  return (
    <section id="hobbies" className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles size={18} />
            Temps Libre
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Loisirs & <span className="text-gradient">Passions</span>
          </h2>
          {/* Le paragraphe a été supprimé ici comme demandé */}
        </motion.div>

        {/* Modification ici : grid-cols-2 pour tablette et lg:grid-cols-4 pour grand écran pour aligner les 4 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-6 shadow-card border border-border hover-lift text-center h-full flex flex-col items-center justify-center">
                <div
                  className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${activity.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <activity.icon size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {activity.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {activity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};