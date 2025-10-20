import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Digital_Time from "@/assets/Digital_Time.png";
import Liste_a_tout_faire from "@/assets/Liste_a_tout_faire.png";
import Quot_x_files from "@/assets/Quot_x_files.png";
import Porfolio_Lorlavie from "@/assets/Porfolio-Lorlavie.png";
import Quete_des_Gueux from "@/assets/Quete_des_Gueux.png";
import gite_Lorlavie from "@/assets/gite_Lorlavie.jpg";
import ImmersiveWrite from "@/assets/immersivewrite.png";
import Project_CalcUnicorn from "@/assets/Project_CalcUnicorn.png";

const Projects = () => {
  const projects = [
    {
      image: ImmersiveWrite,
      title: "ImmersiveWrite",
      description:
        "Application d’écriture immersive pour stimuler la créativité.",
      tags: ["React", "UX", "Créativité"],
      gradient: "from-[hsl(var(--color-blue))] to-[hsl(var(--color-purple))]",
      github: "https://github.com/LaureLavie/ImmersiveWrite",
    },
    {
      image: gite_Lorlavie,
      title: "gite_Lorlavie",
      description: "Site vitrine pour un gîte, design et réservation.",
      tags: ["HTML", "CSS", "Vitrine"],
      gradient: "from-[hsl(var(--color-orange))] to-[hsl(var(--color-yellow))]",
      github: "https://github.com/LaureLavie/gite_Lorlavie",
    },
    {
      image: Project_CalcUnicorn,
      title: "Project_CalcUnicorn",
      description: "Calculatrice magique pour licornes et rêveurs.",
      tags: ["JavaScript", "Fun", "Calculatrice"],
      gradient: "from-[hsl(var(--color-pink))] to-[hsl(var(--color-purple))]",
      github: "https://github.com/LaureLavie/Project_CalcUnicorn",
    },
    {
      image: Digital_Time,
      title: "Digital_Time",
      description: "Horloge digitale stylée et personnalisable.",
      tags: ["JavaScript", "Horloge", "UI"],
      gradient: "from-[hsl(var(--color-blue))] to-[hsl(var(--color-green))]",
      github: "https://github.com/LaureLavie/Digital_Time",
    },
    {
      image: Liste_a_tout_faire,
      title: "Liste_a_tout_faire",
      description: "To-do list pour organiser vos journées avec style.",
      tags: ["React", "Productivité", "ToDo"],
      gradient: "from-[hsl(var(--color-purple))] to-[hsl(var(--color-pink))]",
      github: "https://github.com/LaureLavie/Liste_a_tout_faire",
    },
    {
      image: Quot_x_files,
      title: "Quot_x_files",
      description: "Application de citations X-Files pour fans de mystères.",
      tags: ["React", "API", "Citations"],
      gradient: "from-[hsl(var(--color-orange))] to-[hsl(var(--color-yellow))]",
      github: "https://github.com/LaureLavie/Quot_x_files",
    },
    {
      image: Porfolio_Lorlavie,
      title: "Porfolio-Lorlavie",
      description: "Mon portfolio créatif, design et développement.",
      tags: ["React", "Portfolio", "Design"],
      gradient: "from-[hsl(var(--color-pink))] to-[hsl(var(--color-purple))]",
      github: "https://github.com/LaureLavie/Porfolio-Lorlavie",
    },
    {
      image: Quete_des_Gueux,
      title: "Quete_des_Gueux",
      description: "Projet d’aventure et de jeu, pour les explorateurs du web.",
      tags: ["JavaScript", "Jeu", "Aventure"],
      gradient: "from-[hsl(var(--color-blue))] to-[hsl(var(--color-green))]",
      github: "https://github.com/LaureLavie/Quete_des_Gueux",
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
            🎨 Des projets pensés pour vous, même si le web vous semble un peu
            magique !
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
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-2xl shadow-medium group-hover:shadow-glow-pink"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 0 40px hsla(330,100%,71%,0.3)",
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              />
              {/* Project header with gradient */}
              <div
                className={`h-2 rounded-full bg-gradient-to-r ${project.gradient} mb-6`}
              />

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
                  className="glass-effect hover:bg-white/20"
                  asChild
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
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
