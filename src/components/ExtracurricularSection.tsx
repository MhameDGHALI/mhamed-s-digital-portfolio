import { motion } from "framer-motion";
import { Users, Trophy, Lightbulb } from "lucide-react";

const activities = [
  {
    title: "Project Cell Manager",
    organization: "Fintech Club",
    description:
      "Coordinated members to take part in hackathons and propose innovative ideas in the Fintech field.",
    icon: Lightbulb,
    color: "accent",
  },
  {
    title: "Cultural Games Cell Manager",
    organization: "Olympiades ENSIAS",
    description:
      "Organized the day's activities, supervised teams and hosted events to ensure their success.",
    icon: Trophy,
    color: "primary",
  },
  {
    title: "Enactus Club Member",
    organization: "ENSIAS",
    description:
      "Managed sponsorship, built partnerships and sought funding to support the club's activities and events.",
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
            Involvement
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Extracurricular <span className="text-gradient">Activities</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My involvement and responsibilities within student clubs.
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

        {/* Photo Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-xl p-8 shadow-card border border-border"
        >
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            📸 Photo Gallery - Hackathons
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="aspect-video rounded-lg overflow-hidden shadow-card border border-border"
            >
              <img
                src="/photo_hackathon.jpeg"
                alt="Hackathon 1"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="aspect-video rounded-lg overflow-hidden shadow-card border border-border"
            >
              <img
                src="/photo_hackathon2.jpeg"
                alt="Hackathon 2"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
