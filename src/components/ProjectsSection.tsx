import { useState } from "react";
import { motion } from "framer-motion";
import { FolderGit2, ArrowRight, Lock, Layers } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { projects, type Project } from "@/data/projects";

const Chips = ({ items }: { items: string[] }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((tag) => (
      <span
        key={tag}
        className="text-xs bg-secondary px-2 py-1 rounded-full text-secondary-foreground"
      >
        {tag}
      </span>
    ))}
  </div>
);

const ProjectDetail = ({ project }: { project: Project }) => (
  <div className="space-y-8 text-sm">
    <section>
      <h4 className="text-base font-semibold text-foreground mb-2">Overview</h4>
      <p className="text-muted-foreground">{project.overview}</p>
    </section>

    <section>
      <h4 className="text-base font-semibold text-foreground mb-2">
        The problem
      </h4>
      <p className="text-muted-foreground">{project.problem}</p>
    </section>

    <section>
      <h4 className="text-base font-semibold text-foreground mb-3">
        How it works
      </h4>
      <ol className="space-y-3">
        {project.steps.map((step) => (
          <li
            key={step.title}
            className="border-l-2 border-accent pl-4 text-muted-foreground"
          >
            <span className="font-medium text-foreground">{step.title}</span>
            <br />
            {step.text}
          </li>
        ))}
      </ol>
    </section>

    {project.structure && (
      <section>
        <h4 className="text-base font-semibold text-foreground mb-2">
          Repository structure
        </h4>
        <pre className="bg-secondary/60 border border-border rounded-lg p-4 text-xs overflow-x-auto text-foreground/80">
          {project.structure}
        </pre>
      </section>
    )}

    <section>
      <h4 className="text-base font-semibold text-foreground mb-2">
        Key results
      </h4>
      <ul className="space-y-2">
        {project.results.map((r) => (
          <li key={r} className="flex items-start gap-2 text-muted-foreground">
            <span className="text-accent mt-0.5">▹</span>
            <span>{r}</span>
          </li>
        ))}
      </ul>
    </section>

    {project.figures.map((group) => (
      <section key={group.heading}>
        <h4 className="text-base font-semibold text-foreground mb-3">
          {group.heading}
        </h4>
        <div className="space-y-6">
          {group.items.map((fig) => (
            <figure key={fig.src}>
              <img
                src={fig.src}
                alt={fig.caption}
                loading="lazy"
                className="w-full rounded-lg border border-border shadow-card bg-white"
              />
              <figcaption className="text-xs text-muted-foreground mt-2 text-center">
                {fig.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    ))}

    <section>
      <h4 className="text-base font-semibold text-foreground mb-2">
        Tech stack
      </h4>
      <Chips items={project.stack} />
    </section>

    {project.notes && (
      <p className="flex items-start gap-2 text-xs text-muted-foreground border-t border-border pt-4">
        <Lock size={14} className="mt-0.5 flex-shrink-0" />
        {project.notes}
      </p>
    )}
  </div>
);

export const ProjectsSection = () => {
  const [selected, setSelected] = useState<Project | null>(null);

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
            ingestion and modeling to dashboards and decision support. Open a
            project to read the full case study.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.button
              key={project.id}
              type="button"
              onClick={() => setSelected(project)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-left bg-card rounded-xl shadow-card border border-border hover-lift flex flex-col overflow-hidden group"
            >
              <div className="aspect-video bg-hero-gradient flex items-center justify-center overflow-hidden">
                {project.cover ? (
                  <img
                    src={project.cover}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="text-primary-foreground text-center px-6">
                    <Layers size={48} className="mx-auto mb-3 text-accent" />
                    <p className="text-xs opacity-80">
                      RAW → SILVER → GOLD · dbt · Snowflake
                    </p>
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-3">
                  {project.context}
                </p>
                <p className="text-sm text-foreground/80 mb-4 flex-grow">
                  {project.value}
                </p>
                <div className="mb-4">
                  <Chips items={project.stack.slice(0, 5)} />
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:text-accent transition-colors">
                  Read the case study
                  <ArrowRight size={16} />
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selected.title}</DialogTitle>
                <DialogDescription>{selected.context}</DialogDescription>
              </DialogHeader>
              <ProjectDetail project={selected} />
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
