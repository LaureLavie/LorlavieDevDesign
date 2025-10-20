import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/50 bg-muted/20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          {/* Logo text */}
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-watercolor font-handwriting">
              Lorlavie Dev'Design
            </h3>
            <p className="text-sm text-muted-foreground">
              Développeuse web créative • Transformons vos idées en code coloré
              ✨
            </p>
          </div>

          {/* Links */}
          <div className="flex justify-center gap-6 flex-wrap text-sm">
            <a
              href="#about"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              À propos
            </a>
            <a
              href="#projects"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Projets
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
            <a
              href="https://github.com/LaureLavie"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a>
          </div>

          {/* Copyright with love */}
          <div className="pt-6 border-t border-border/50">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              © {new Date().getFullYear()} Lorlavie • Codé avec
              <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
              et beaucoup de ☕
            </p>
          </div>

          {/* Fun signature */}
          <p className="text-xs text-muted-foreground/60 font-handwriting">
            "Error 418: Je suis une théière, pas une cafetière !" 🦄
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
