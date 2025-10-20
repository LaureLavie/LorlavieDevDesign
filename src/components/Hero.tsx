import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-lorlavie.png";
import heroBg from "@/assets/hero-bg.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Image with Blur */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-contain" />
        <div className="absolute inset-0 bg-background/40 backdrop-blur-sm"></div>
      </div>

      {/* Content with Glassmorphism */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="backdrop-blur-md bg-background/30 rounded-3xl p-8 sm:p-12 border border-white/20 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Text */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Développeuse web créative{" "}
                <span className="text-gradient">
                  Vos projets qui dépotent !
                </span>
              </motion.h1>
              <motion.p
                className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Développeuse web passionnée, je transforme vos idées en sites
                web et applications modernes, performants et créatifs.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button
                  size="lg"
                  onClick={scrollToContact}
                  className="shadow-glow group text-base sm:text-lg"
                >
                  Démarrer un projet
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() =>
                    window.open("https://github.com/LaureLavie", "_blank")
                  }
                  className="text-base sm:text-lg"
                >
                  Voir mes projets
                </Button>
              </motion.div>
              <motion.div
                className="flex gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.a
                  href="https://github.com/LaureLavie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full hover:bg-primary/10 transition-colors"
                  aria-label="GitHub"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="mailto:contact@lorlavie-devdesign.fr"
                  className="p-3 rounded-full hover:bg-primary/10 transition-colors"
                  aria-label="Email"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="h-6 w-6" />
                </motion.a>
              </motion.div>
            </div>

            {/* Right Column - Logo */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.img
                src={logo}
                alt="Lorlavie Dev'Design"
                className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-contain drop-shadow-2xl"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
