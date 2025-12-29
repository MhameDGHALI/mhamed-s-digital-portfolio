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

        {/* Changement ici : grid-cols-2 pour donner plus de largeur aux éléments */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* PPP Section - Prend maintenant 50% de la largeur */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-xl p-6 shadow-card border border-border hover-lift flex flex-col"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <FileCode className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Projet Personnel & Professionnel
            </h3>
            <p className="text-muted-foreground text-sm mb-6 flex-grow">
              Découvrez mon projet personnel et professionnel détaillant mes
              objectifs de carrière, ma vision à long terme et les compétences 
              que je souhaite développer.
            </p>
            
            {/* --- MODIFICATION ICI : Ajout du lien vers le fichier ppp_pdf.pdf --- */}
            <a 
              href="/ppp_pdf.pdf" 
              download="PPP_Mhamed_Bellahbib.pdf" 
              className="w-full mt-auto"
            >
              <Button variant="outline" className="w-full gap-2">
                <Download size={18} />
                Télécharger PPP
              </Button>
            </a>
            {/* ------------------------------------------------------------------ */}

          </motion.div>

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
            <p className="text-muted-foreground text-sm mb-4 flex-grow">
              Prédiction des ventes avec ML, segmentation client par clustering,
              et création de dashboards interactifs avec Streamlit pour l'aide à la décision.
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
            <a href="/Rapport_Stage__final.pdf" download="Rapport_Stage_Cogitas.pdf" className="w-full mt-auto">
                <Button variant="outline" className="w-full gap-2">
                <Download size={18} />
                Rapport de Stage
                </Button>
            </a>
          </motion.div>

          {/* CV Section - Prend toute la largeur en bas, mais compact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 bg-card rounded-xl p-6 shadow-card border border-border hover-lift"
          >
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                
                {/* Partie Gauche : Info */}
                <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <FileText className="text-accent" size={20} />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground">
                        CV
                        </h3>
                    </div>
                    <p className="text-muted-foreground text-sm">
                        Consultez mon parcours complet en format PDF.
                    </p>
                </div>

                {/* Partie Droite : Boutons séparés gauche/droite ou côte à côte */}
                <div className="w-full md:w-auto flex flex-row justify-between md:justify-end gap-4 mt-4 md:mt-0">
                    <a href="/CV_Mhamed_FR.pdf" download="CV_Mhamed_FR.pdf">
                        <Button variant="default" className="gap-2 min-w-[140px]">
                            <Download size={18} />
                            CV Français
                        </Button>
                    </a>
                    
                    <a href="/cv_latex__anglais.pdf" download="CV_Mhamed_Ang.pdf">
                        <Button variant="secondary" className="gap-2 min-w-[140px]">
                            <Download size={18} />
                            CV English
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