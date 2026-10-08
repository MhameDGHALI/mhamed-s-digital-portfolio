import { motion } from "framer-motion";
import { Briefcase, Download, FileText, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ProfessionalSection = () => {
  return (
    <section id="professional" className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Briefcase size={18} />
            Experience
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        {/* Changement ici : grid-cols-2 pour donner plus de largeur aux éléments */}
        <div className="grid gap-8 max-w-4xl mx-auto">
          
          {/* Internship Section - Remonté ici pour prendre 50% de la largeur */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-xl p-6 shadow-card border border-border hover-lift flex flex-col"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Building2 className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Internship
            </h3>
            <div className="mb-4">
              <p className="text-sm font-medium text-foreground">
                Data Scientist Intern
              </p>
              <p className="text-sm text-accent">Cogitas Solutions</p>
              <p className="text-xs text-muted-foreground">
                Mohammédia, Morocco | July - August 2024
              </p>
            </div>
            <p className="text-muted-foreground text-sm mb-4 flex-grow">
              Sales forecasting with ML, customer segmentation through clustering,
              and interactive Streamlit dashboards for decision support.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Python", "SQL Server", "ML", "ERP"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-secondary px-2 py-1 rounded-full text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* CV Section - compact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-xl p-6 shadow-card border border-border hover-lift"
          >
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                
                {/* Partie Gauche : Info */}
                <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <FileText className="text-accent" size={20} />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">
                        Résumé
                        </h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                        Download my full résumé as a PDF.
                    </p>
                </div>

                {/* Partie Droite : Boutons séparés gauche/droite ou côte à côte */}
                <div className="w-full md:w-auto flex flex-row justify-between md:justify-end gap-4 mt-4 md:mt-0">
                    <a href="/cv_latex__anglais.pdf" download="CV_Mhamed_Ang.pdf">
                        <Button variant="default" className="gap-2 min-w-[140px]">
                            <Download size={18} />
                            Download CV
                        </Button>
                    </a>
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};