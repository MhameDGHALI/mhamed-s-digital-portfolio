import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const activities = [
  {
    name: "Football",
  },
  {
    name: "Swimming",
  },
  {
    name: "Financial Markets",
  },
  {
    name: "Video Editing",
  },
  {
    name: "Music",
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
            Free Time
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Hobbies & <span className="text-gradient">Interests</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
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
                <h3 className="text-lg font-semibold text-foreground">
                  {activity.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};