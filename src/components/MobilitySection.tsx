import { motion } from "framer-motion";
import { Plane, MapPin, ArrowRight, Award, Leaf } from "lucide-react"; // <--- J'ai ajouté 'Leaf' ici

export const MobilitySection = () => {
  return (
    <section id="mobility" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Plane size={18} />
            International Mobility
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Double <span className="text-gradient">Degree</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            An international academic path between Morocco and France.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Journey Timeline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-8 shadow-card border border-border"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* ENSIAS */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 text-accent mb-2">
                  <MapPin size={18} />
                  <span className="text-sm font-medium">Rabat, Morocco</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  ENSIAS
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  National School of Computer Science and Systems Analysis
                </p>
                <div className="bg-primary/10 rounded-lg p-4">
                  <p className="text-sm font-medium text-primary">
                    Business Intelligence & Analytics
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Sep 2023 – Jun 2026
                  </p>
                </div>
              </div>

              {/* Arrow & Info Central (C'est ici qu'on modifie) */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-accent">
                  <Plane size={28} className="text-accent-foreground" />
                </div>
                <ArrowRight
                  size={24}
                  className="text-accent hidden md:block"
                />
                <span className="text-xs text-muted-foreground font-medium">
                  Double Degree
                </span>

                {/* --- NOUVEAU : EMPREINTE CARBONE --- */}
                <div className="mt-1 flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 px-2 py-1 rounded-full" title="Estimated carbon footprint">
                    <Leaf size={12} className="text-green-600" />
                    <span className="text-[10px] font-semibold text-green-700">~616,4kg CO₂</span>
                </div>
                {/* ----------------------------------- */}

              </motion.div>

              {/* ENSEEIHT */}
              <div className="flex-1 text-center md:text-right">
                <div className="inline-flex items-center gap-2 text-accent mb-2 md:flex-row-reverse">
                  <MapPin size={18} />
                  <span className="text-sm font-medium">Toulouse, France</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  INP-ENSEEIHT
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  National School of Electrical Engineering, Electronics,
                  Computer Science
                </p>
                <div className="bg-accent/10 rounded-lg p-4">
                  <p className="text-sm font-medium text-accent">
                    HPC & Big Data
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Sep 2025 – Jun 2027
                  </p>
                </div>
              </div>
            </div>

            {/* Achievement Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Award className="text-accent" size={24} />
              <p className="text-center text-foreground/80">
                <span className="font-semibold">Preparatory classes for the Grandes Écoles (CPGE):</span> MPSI -
                MP at Lycée Moulay Idriss, Fès (2021-2023)
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};