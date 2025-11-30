import { motion } from "framer-motion";
import { Briefcase, Download, FileText, FileCode, Building2 } from "lucide-react";
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
            Projet Professionnel
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Parcours <span className="text-gradient">Professionnel</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* PPP Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-xl p-6 shadow-card border border-border hover-lift"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <FileCode className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Projet Personnel & Professionnel
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Découvrez mon projet personnel et professionnel détaillant mes
              objectifs de carrière et ma vision.
            </p>
            <Button variant="outline" className="w-full gap-2">
              <Download size={18} />
              Télécharger PPP
            </Button>
          </motion.div>

          {/* CV Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-xl p-6 shadow-card border border-border hover-lift"
          >
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <FileText className="text-accent" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Curriculum Vitae
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Téléchargez mon CV en français ou en anglais pour découvrir mon
              parcours complet.
            </p>
            <div className="flex flex-col gap-3">
              <Button variant="default" className="w-full gap-2">
                <Download size={18} />
                CV Français
              </Button>
              <Button variant="secondary" className="w-full gap-2">
                <Download size={18} />
                CV English
              </Button>
            </div>
          </motion.div>

          {/* Internship Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-xl p-6 shadow-card border border-border hover-lift"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Building2 className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Stage
            </h3>
            <div className="mb-4">
              <p className="text-sm font-medium text-foreground">
                Data Scientist Stagiaire
              </p>
              <p className="text-sm text-accent">Cogitas Solutions</p>
              <p className="text-xs text-muted-foreground">
                Mohammédia, Maroc | Juillet - Août 2024
              </p>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Prédiction des ventes avec ML, segmentation client par clustering,
              et création de dashboards interactifs avec Streamlit.
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
            <Button variant="outline" className="w-full gap-2">
              <Download size={18} />
              Rapport de Stage
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
