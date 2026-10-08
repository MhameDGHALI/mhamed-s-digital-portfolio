import { motion } from "framer-motion";
import { Briefcase, Building2 } from "lucide-react";

const internships = [
  {
    role: "BI / Analytics Engineering Intern",
    company: "D&A Technologies",
    place: "Casablanca, Morocco",
    period: "June - August 2026",
    points: [
      "Designed and built an end-to-end data platform for an events marketplace: Snowflake (RAW / SILVER / GOLD) modeled with dbt.",
      "Developed a daily Python / Selenium scraper and loaders feeding the warehouse, with entity resolution across heterogeneous sources.",
      "Built a commercial prioritization score, vendor-team recommendations and prospect detection, validated by a backtest against a control group.",
      "Delivered a Power BI report and a deterministic natural-language assistant (Streamlit); automated checks with GitHub Actions.",
      "Used SQL for analysis and validation, Excel for data preparation and reporting, and Trello to organize the work.",
    ],
    tags: ["Snowflake", "dbt", "Python", "SQL", "Power BI", "Streamlit", "GitHub Actions", "Excel", "Trello"],
  },
  {
    role: "Data Scientist Intern",
    company: "Cogitas Solutions",
    place: "Mohammédia, Morocco",
    period: "July - August 2024",
    points: [
      "Sales forecasting with machine learning and customer segmentation through clustering.",
      "Interactive Streamlit dashboards for decision support.",
    ],
    tags: ["Python", "SQL Server", "ML", "ERP"],
  },
];

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
          
          {/* Internships */}
          {internships.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-card border border-border hover-lift flex flex-col"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {job.role}
                  </h3>
                  <p className="text-sm text-accent">{job.company}</p>
                  <p className="text-xs text-muted-foreground">
                    {job.place} | {job.period}
                  </p>
                </div>
              </div>
              <ul className="space-y-2 mb-4 flex-grow">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-accent mt-0.5">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-secondary px-2 py-1 rounded-full text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};