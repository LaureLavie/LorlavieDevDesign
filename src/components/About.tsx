import { Code2, Palette, Sparkles, Coffee } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const skills = [
    {
      icon: Code2,
      title: "Développement Web",
      description: "React, JavaScript, HTML/CSS",
      color: "from-[hsl(var(--color-pink))] to-[hsl(var(--color-purple))]",
    },
    {
      icon: Palette,
      title: "Design Créatif",
      description: "UI/UX, Design System, Figma",
      color: "from-[hsl(var(--color-orange))] to-[hsl(var(--color-yellow))]",
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Solutions créatives & originales",
      color: "from-[hsl(var(--color-blue))] to-[hsl(var(--color-green))]",
    },
    {
      icon: Coffee,
      title: "Passion",
      description: "Café ☕ → Code adorable",
      color: "from-[hsl(var(--color-purple))] to-[hsl(var(--color-pink))]",
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden" id="about">
      {/* Background decoration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-20 right-0 w-64 h-64 bg-gradient-to-br from-[hsl(var(--color-blue))] to-[hsl(var(--color-purple))] blur-3xl rounded-full"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-20 left-0 w-64 h-64 bg-gradient-to-br from-[hsl(var(--color-orange))] to-[hsl(var(--color-pink))] blur-3xl rounded-full"
      />

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-watercolor inline-block">
            À propos de moi
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ⚡ En formation, moitié codeuse, moitié chaos organisé
          </p>
        </div>

        {/* Bio section with glass effect */}
        <div className="max-w-3xl mx-auto mb-16 p-8 glass-effect rounded-3xl">
          <div className="space-y-4 text-lg leading-relaxed">
            <p className="text-foreground/90">
              Salut ! Je suis{" "}
              <span className="font-bold text-primary">Laure</span>, aussi
              connue sous le nom de{" "}
              <span className="font-handwriting text-2xl text-watercolor">
                Lorlavie
              </span>
              .
            </p>
            <p className="text-foreground/80">
              Je suis une développeuse web créative qui adore transformer des
              idées en code coloré et fonctionnel. Spécialisée en{" "}
              <span className="font-semibold text-primary">React</span> et{" "}
              <span className="font-semibold text-secondary">JavaScript</span>,
              je crée des sites web et applications mobiles avec une touche
              artistique unique.
            </p>
            <p className="text-foreground/80">
              🦄 <span className="font-handwriting text-xl">Mon motto :</span>{" "}
              "Error 418 - Je suis une théière, pas un café !"
              <br />☕ Ma recette secrète :{" "}
              <span className="font-semibold">
                40% café + 30% curiosité + 20% créativité + 10% chaos organisé
              </span>
            </p>
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                className="group p-6 glass-effect rounded-2xl"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <motion.div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4`}
                  whileHover={{ boxShadow: "0 0 20px 5px rgba(0,0,0,0.1)" }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Fun fact */}
        <div className="mt-16 text-center">
          <p className="text-lg font-handwriting text-primary/80 max-w-2xl mx-auto">
            💫 "Il y a 10 types de personnes dans le monde : celles qui
            comprennent le binaire et les autres... et moi qui crée des bugs en
            dormant" 💫
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
