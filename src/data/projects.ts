export type Figure = { src: string; caption: string };

export type Project = {
  id: string;
  title: string;
  context: string;
  value: string;
  cover?: string;
  stack: string[];
  overview: string;
  problem: string;
  steps: { title: string; text: string }[];
  structure?: string;
  results: string[];
  figures: { heading: string; items: Figure[] }[];
  notes?: string;
};

export const projects: Project[] = [
  {
    id: "rider-pay",
    title: "Rider Pay & Experimentation Platform",
    context: "Analytics engineering · BigQuery · dbt · Power BI",
    value:
      "Answers four questions before changing a driver bonus: how much it costs, what effect it has, whether it pays for itself, and whether the numbers can be trusted, on 12.2M real Uber / Lyft trips.",
    cover: "/projects/rider-pay/dashboard_01_economy.png",
    stack: ["BigQuery", "dbt", "SQL", "Python", "Power BI", "GitHub Actions"],
    overview:
      "Analytics platform built on 12.2 million for-hire trips from New York (30% sample of NYC TLC data, Jan–Feb 2026) enriched with hourly weather. It measures driver-pay cost, simulates bonus changes, designs an experiment to test them and monitors data quality.",
    problem:
      "Before changing a pay bonus, a team has to know the cost, the effect, the return and the reliability of the figures. This project builds everything needed to answer those four questions with reconciled data.",
    steps: [
      {
        title: "1. Ingestion",
        text: "Python samples the TLC parquet files (30%, with a representativeness check), loads trips, weather and 5,000 synthetic riders into BigQuery raw tables.",
      },
      {
        title: "2. Modeling (dbt)",
        text: "Staging → intermediate → marts as a star schema: fct_trips linked to dim_zone, dim_date, dim_operator, dim_weather_hour plus three additive aggregates for BI. 23 models, 7 seeds, 161 tests with reconciliation at every layer.",
      },
      {
        title: "3. Incentive simulator",
        text: "Config-driven bonus scenarios (seeds): cost per scenario, breakdown by rule (intensity × reach), snow-bonus sensitivity.",
      },
      {
        title: "4. Experimentation",
        text: "Switchback design (drivers in a zone share orders, so no per-driver A/B), A/A test, power curve and a break-even decision rule. The bonus effect is simulated: the experiment validates the method.",
      },
      {
        title: "5. Data-quality monitoring",
        text: "Robust detector (median and MAD) over daily health metrics, validated by injecting known anomalies, with an alert register and unit tests.",
      },
      {
        title: "6. Dashboard & CI",
        text: "3-page Power BI report reconciled against BigQuery; GitHub Actions run the dbt build and the detector.",
      },
    ],
    structure: `ingestion/      sampling, checks, BigQuery loads, weather, synthetic riders
dbt_project/    staging, intermediate, marts, simulation, experiments, monitoring
experiments/    A/A test, effect analysis, power curve, decision analysis (Python)
monitoring/     detector, alerting, detector evaluation, tests
dashboards/     Power BI file and theme
docs/           decisions, data quality, benchmark, experiment report ...
.github/        CI workflows`,
    results: [
      "12,244,353 trips reconcile identically from the raw source to the final aggregates, including financial totals.",
      "35,087 trips (0.29%) are flagged and never deleted; 83% of them sit in three source-incident days (0.05% outside those days).",
      "A $1.50 peak bonus adds about $5.76M of driver pay on the sample (+2.33%) and must lift trips by at least 31.6% to break even.",
      "The 78-unit experiment decides reliably only if the true effect is below ~10% (drop) or above ~60% (adopt).",
      "The detector flagged the three real incidents with no false alert, validated on injected anomalies.",
      "A one-day query scans 1.47 MB on the partitioned table versus 373.68 MB on the source view.",
    ],
    figures: [
      {
        heading: "Power BI dashboard",
        items: [
          { src: "/projects/rider-pay/dashboard_01_economy.png", caption: "Page 1 · Trip economics: driver pay and platform take rate" },
          { src: "/projects/rider-pay/dashboard_02_simulator.png", caption: "Page 2 · Incentive simulator: cost per scenario and by rule" },
          { src: "/projects/rider-pay/dashboard_03_quality.png", caption: "Page 3 · Data quality: incidents and flagged trips" },
          { src: "/projects/rider-pay/dashboard_model.png", caption: "Power BI data model" },
        ],
      },
      {
        heading: "Data lineage",
        items: [
          { src: "/projects/rider-pay/lineage_marts.png", caption: "dbt lineage of the marts" },
        ],
      },
    ],
    notes:
      "Sources: NYC TLC trip records and Open-Meteo weather are real; bonus rules are assumptions, the bonus effect is simulated and the riders table is synthetic.",
  },
  {
    id: "evalllm-dwh",
    title: "EvalLLM Data Warehouse",
    context: "ENSIAS · BI & Analytics · Team of 3 · 2024/2025",
    value:
      "A centralized data mart that lets researchers compare LLMs on accuracy, environmental cost and popularity across many benchmarks, with model history tracked through SCD Type 2.",
    cover: "/projects/evalllm-dwh/dashboard-overall.png",
    stack: ["SQL Server", "SSIS", "SSAS (tabular)", "SSMS", "Power BI"],
    overview:
      "Data warehousing and BI solution built with the EvalLLM research consortium to consolidate the results of large language models evaluated on diverse benchmarks, and to provide stakeholders with dashboards on accuracy, environmental cost and scalability over time.",
    problem:
      "LLM benchmark results are scattered and inconsistent, which makes fair comparison and decision-making hard. A standardized, traceable and queryable model was needed.",
    steps: [
      {
        title: "1. Conceptual design",
        text: "Bus matrix and star schema: two fact tables (Fact_Evaluation, Fact_ModelSynthese) and four dimensions (Dim_Model, Dim_Evaluation, Dim_Date, Dim_Metadata).",
      },
      {
        title: "2. Staging with SSIS",
        text: "Flat-file source loaded into a staging table with an OLE DB destination.",
      },
      {
        title: "3. Warehouse loading",
        text: "Date dimension generated with a T-SQL loop (2020–2030); Fact_Evaluation loaded through chained lookups on every dimension key.",
      },
      {
        title: "4. History management",
        text: "Slowly Changing Dimension Type 2 on Dim_Model (ValidFrom / ValidTo / IsCurrent) with historical, changing and fixed attributes configured in the SSIS wizard.",
      },
      {
        title: "5. OLAP & BI",
        text: "SSAS tabular model feeding two Power BI dashboards: performance vs. resources, and overall model performance.",
      },
    ],
    results: [
      "Single source of truth for LLM benchmark results, with traceability of model changes over time.",
      "KPIs on average score, normalized evaluation score, CO₂ cost and hub popularity (likes) per model.",
      "Interactive filtering by year, metadata generation, model and evaluation.",
    ],
    figures: [
      {
        heading: "Data model",
        items: [{ src: "/projects/evalllm-dwh/star-schema.png", caption: "Star schema: two fact tables and four dimensions" }],
      },
      {
        heading: "SSIS ETL",
        items: [
          { src: "/projects/evalllm-dwh/ssis-staging.png", caption: "Staging: flat file to OLE DB destination" },
          { src: "/projects/evalllm-dwh/ssis-scd2-flow.png", caption: "SCD Type 2 data flow on Dim_Model" },
          { src: "/projects/evalllm-dwh/ssis-scd2-wizard.png", caption: "Slowly Changing Dimension wizard configuration" },
        ],
      },
      {
        heading: "Power BI dashboards",
        items: [
          { src: "/projects/evalllm-dwh/dashboard-overall.png", caption: "Overall model performance" },
          { src: "/projects/evalllm-dwh/dashboard-resources.png", caption: "Performance vs. resources (parameters, CO₂ cost, hub hearts)" },
        ],
      },
    ],
  },
  {
    id: "hospital-bi",
    title: "Hospital Data Analysis",
    context: "ENSIAS · Business Intelligence · Power BI & DAX",
    value:
      "Gives a hospital pharmacy visibility on spending, stock value, costly and most-requested drugs and price increases, to support purchasing and resource-management decisions.",
    cover: "/projects/hospital-bi/director.png",
    stack: ["Power BI", "DAX", "Data modeling"],
    overview:
      "Business Intelligence project on hospital data covering pharmacy purchases, internal orders and staff, aiming to improve the efficiency and quality of hospital services.",
    problem:
      "Can a BI system improve the management of hospital resources and services by providing in-depth analysis of the data and optimizing operational efficiency?",
    steps: [
      {
        title: "1. Data model",
        text: "Pharmacy articles, supplier orders, internal orders and staff tables combined across several years (2023–2024 spending, history of article prices and expiry dates).",
      },
      {
        title: "2. DAX measures",
        text: "Top-50 articles by cost and by quantity (TOPN / SUMMARIZE), yearly expenses, stock value, served-quantity rate (DIVIDE), expired items, costly drugs (price > 500), top-3 price increases (last entry price vs. average price).",
      },
      {
        title: "3. Dashboards",
        text: "Interactive reports on spending per service and per hospital day, headcount by function, most expensive and most requested drugs and longitudinal follow-up of ordered quantities.",
      },
    ],
    results: [
      "Spending comparison between 2023 and 2024 and share of each purchasing service.",
      "Identification of costly drugs, most-requested drugs and the largest price increases.",
      "Tracking of expired items per year and of stock value.",
    ],
    figures: [
      {
        heading: "Dashboards",
        items: [
          { src: "/projects/hospital-bi/director.png", caption: "Director dashboard: spending, stock value, headcount and purchasing-service share" },
          { src: "/projects/hospital-bi/pharmacy.png", caption: "Pharmacy dashboard: drug cost and quantity, expired items, price increases" },
          { src: "/projects/hospital-bi/whatif-simulator.png", caption: "What-if sales simulator: actual vs. simulated sales with a sales parameter" },
          { src: "/projects/hospital-bi/medical-services.png", caption: "Medical services dashboard: purchases and cancelled orders by department" },
          { src: "/projects/hospital-bi/service-drill-through.png", caption: "Service drill-through: product groups requested by a medical service" },
        ],
      },
    ],
    notes:
      "Data has been modified for confidentiality: the figures shown are illustrative and do not reflect real hospital data.",
  },
];
