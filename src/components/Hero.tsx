import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import logo from "@/assets/logo-lorlavie.png";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{ background: "var(--gradient-hero)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      />
      {/* Decorative watercolor splashes */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 rounded-full blur-3xl bg-gradient-to-br from-[hsl(var(--color-orange))] to-[hsl(var(--color-yellow))] opacity-20"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 0.2 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute bottom-40 right-20 w-40 h-40 rounded-full blur-3xl bg-gradient-to-br from-[hsl(var(--color-pink))] to-[hsl(var(--color-purple))] opacity-20"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 0.2 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.div
        className="absolute top-1/2 right-10 w-36 h-36 rounded-full blur-3xl bg-gradient-to-br from-[hsl(var(--color-blue))] to-[hsl(var(--color-green))] opacity-20"
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 0.2 }}
        transition={{ duration: 1, delay: 1 }}
      />

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-2">
              <p
                className="text-lg md:text-xl font-handwriting text-primary animate-splash-in"
                style={{ animationDelay: "0.2s" }}
              >
                ✨ Bonjour, je suis
              </p>
              <h1
                className="text-5xl md:text-7xl font-bold text-watercolor leading-tight animate-splash-in"
                style={{ animationDelay: "0.4s" }}
              >
                Lorlavie
              </h1>
              <p
                className="text-2xl md:text-3xl font-semibold text-foreground/80 animate-splash-in"
                style={{ animationDelay: "0.6s" }}
              >
                Dev'Design
              </p>
            </div>

            <p
              className="text-lg md:text-xl text-muted-foreground max-w-xl animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              Développeuse web créative qui transforme le café en code coloré ☕
              <br />
              <span className="font-handwriting text-xl text-primary">
                Spécialisée en React • JavaScript • Design créatif
              </span>
            </p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[hsl(var(--color-pink))] to-[hsl(var(--color-purple))] hover:shadow-[var(--shadow-glow-pink)] transition-all duration-300 text-white font-semibold"
              >
                Voir mes projets
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="glass-effect hover:bg-white/20 transition-all duration-300"
              >
                Me contacter
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex gap-4 pt-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <a
                href="https://github.com/LaureLavie"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-effect hover:bg-gradient-to-r hover:from-[hsl(var(--color-orange))] hover:to-[hsl(var(--color-yellow))] hover:text-white transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/laurelavie/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-effect hover:bg-gradient-to-r hover:from-[hsl(var(--color-blue))] hover:to-[hsl(var(--color-purple))] hover:text-white transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/lorlavie/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-effect hover:bg-gradient-to-r hover:from-[hsl(var(--color-pink))] hover:to-[hsl(var(--color-orange))] hover:text-white transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:lorlavie@gmail.com"
                className="p-3 rounded-full glass-effect hover:bg-gradient-to-r hover:from-[hsl(var(--color-green))] hover:to-[hsl(var(--color-blue))] hover:text-white transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Logo with watercolor effect */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative">
              {/* Glow effects behind logo */}
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--color-pink))] via-[hsl(var(--color-purple))] to-[hsl(var(--color-blue))] opacity-20 blur-3xl rounded-full animate-pulse" />
              {/* Logo */}
              <img
                src={logo}
                alt="Lorlavie - Développeuse créative"
                className="relative w-full max-w-md mx-auto drop-shadow-2xl animate-float"
              />
            </div>
            {/* Decorative text elements */}
            <div className="absolute -top-8 -right-4 font-handwriting text-3xl text-primary rotate-12 opacity-70">
              💜 Code avec amour
            </div>
            <div className="absolute -bottom-8 -left-4 font-handwriting text-2xl text-secondary rotate-[-8deg] opacity-70">
              ✨ Créativité digitale
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
