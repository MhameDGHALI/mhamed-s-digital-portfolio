import { motion } from "framer-motion";
import { FolderGit2, Github, Lock, Database, BarChart3, Layers } from "lucide-react";

type Project = {
  title: string;
  context: string;
  icon: typeof Database;
  summary: string;
  highlights: string[];
  stack: string[];
  repo?: string;
};

const projects: Project[] = [
  {
    title: "Event Data Platform",
    context: "Internship project · End-to-end data platform",
    icon: Layers,
    summary:
      "End-to-end data platform for an events marketplace: commercial prioritization, vendor-team recommendation and prospect discovery, built from scraped data and an Instagram collaboration graph.",
    highlights: [
      "Snowflake architecture in 3 layers (RAW / SILVER / GOLD) modeled with dbt: seeds, SCD2 snapshots, incremental models, tests and auto-generated docs.",
      "Entity resolution across heterogeneous sources (directories, Excel, scraping) with cascading matching keys.",
      "Daily Python scraper (Selenium + internal API) feeding the warehouse; CI with GitHub Actions.",
      "Composite 0–100 prioritization score from 4 percentile-normalized KPIs, including a graph-centrality signal.",
      "Backtest against a control group: predicted collaborations confirmed ~285x more often than random pairs.",
      "Deterministic natural-language assistant (Streamlit) with a test suite, plus a Power BI report.",
    ],
    stack: ["Snowflake", "dbt", "Python", "Selenium", "NetworkX", "Streamlit", "Power BI", "GitHub Actions"],
  },
  {
    title: "Rider Pay & Experimentation Platform",
    context: "Personal project · Analytics engineering",
    icon: BarChart3,
    summary:
      "Analytics platform on 12.2M Uber and Lyft trips (NYC TLC) to measure driver-pay cost, simulate bonus changes, test their effect and monitor data quality.",
    highlights: [
      "BigQuery + dbt star schema (staging, intermediate, marts) with tests and row/financial reconciliation at every layer.",
      "Config-driven incentive simulator: a peak bonus must lift trips by at least 31.6% to break even.",
      "Switchback experiment design with A/A test, power analysis and break-even decision rule (effect is simulated).",
      "Data-quality monitor with a robust-score detector that caught the 3 source incidents holding 83% of flagged trips.",
      "3-page Power BI dashboard reconciled against BigQuery; CI on GitHub Actions.",
    ],
    stack: ["BigQuery", "dbt", "Python", "Power BI", "GitHub Actions"],
    repo: "https://github.com/MhameDGHALI/rider-pay",
  },
  {
    title: "EvalLLM Data Warehouse",
    context: "ENSIAS 2nd-year BI&A project · Team of 3 · 2024/2025",
    icon: Database,
    summary:
      "Data warehousing and BI solution built with the EvalLLM research consortium to consolidate and compare the performance of large language models across diverse benchmarks.",
    highlights: [
      "Dimensional modeling (Kimball): bus matrix, fact tables for evaluations and model synthesis, star schema.",
      "SSIS ETL: staging area, date dimension, fact loading with lookups, historical data handling.",
      "Slowly Changing Dimension (Type 2) on the model dimension to track model versions over time.",
      "SSAS tabular model and Power BI dashboards: performance vs. resources (accuracy, environmental cost) and overall model performance.",
    ],
    stack: ["SQL Server", "SSIS", "SSAS", "SSMS", "Power BI"],
  },
  {
    title: "Hospital Data Analysis",
    context: "ENSIAS academic project · Business Intelligence",
    icon: BarChart3,
    summary:
      "Power BI project analyzing hospital data (pharmacy purchases, internal orders, staff and patient flows) to improve resource management and service quality.",
    highlights: [
      "Data model combining pharmacy, supplier-order and internal-order tables across several years.",
      "Custom DAX measures: top-50 items by cost and quantity, yearly expenses, served-quantity rate, price-increase detection, expired items.",
      "Interactive dashboards supporting decisions on purchasing, stock value and service consumption.",
    ],
    stack: ["Power BI", "DAX", "Data modeling"],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FolderGit2 size={18} />
            Featured Work
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Data <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Data engineering, analytics engineering and BI projects, from
            ingestion and modeling to dashboards and decision support.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-card border border-border hover-lift flex flex-col"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <project.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-xs text-accent mt-1">{project.context}</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                {project.summary}
              </p>

              <ul className="space-y-2 mb-5 flex-grow">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-xs text-foreground/80"
                  >
                    <span className="text-accent mt-0.5">▹</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-secondary px-2 py-1 rounded-full text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.repo ? (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors mt-auto"
                >
                  <Github size={18} />
                  View on GitHub
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 text-xs text-muted-foreground mt-auto">
                  <Lock size={14} />
                  Private repository · details available on request
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
