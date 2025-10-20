import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "ProjetQuiMarcheEnLocal",
      description: "Mystère encore non résolu... mais ça avance ! 🎭",
      tags: ["React", "JavaScript", "CSS"],
      gradient: "from-[hsl(var(--color-pink))] to-[hsl(var(--color-purple))]",
      status: "En cours",
    },
    {
      title: "TodoApp Numéro 1",
      description: "Mon premier projet ! Soyez indulgents, c'est avec amour 💜",
      tags: ["HTML", "CSS", "JavaScript"],
      gradient: "from-[hsl(var(--color-orange))] to-[hsl(var(--color-yellow))]",
      status: "Terminé",
    },
    {
      title: "AppQuiVaChangerLeMonde",
      description: "En cours depuis ma naissance... de développeuse 🚀",
      tags: ["React", "Design System", "Magic"],
      gradient: "from-[hsl(var(--color-blue))] to-[hsl(var(--color-green))]",
      status: "En développement",
    },
    {
      title: "LaVraieBonneIdéeCetteFois",
      description: "Spoiler: peut-être ! Restez à l'affût 🌟",
      tags: ["React", "TypeScript", "Innovation"],
      gradient: "from-[hsl(var(--color-purple))] to-[hsl(var(--color-pink))]",
      status: "Bientôt",
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30" id="projects">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-watercolor inline-block">
            Mes Projets
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-handwriting">
            🎪 Le cirque de mes créations digitales
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group p-6 glass-effect rounded-3xl"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Project header with gradient */}
              <div
                className={`h-2 rounded-full bg-gradient-to-r ${project.gradient} mb-6`}
              />

              {/* Status badge */}
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-gradient-to-r ${project.gradient} text-white`}
              >
                {project.status}
              </span>

              <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-background/50 text-sm text-foreground/70 border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 glass-effect hover:bg-white/20"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Voir le projet
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="glass-effect hover:bg-white/20"
                >
                  <Github className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Envie de collaborer sur un projet ? 🚀
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-[hsl(var(--color-pink))] to-[hsl(var(--color-purple))] hover:shadow-[var(--shadow-glow-pink)] transition-all duration-300 text-white font-semibold"
          >
            Contactez-moi !
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
