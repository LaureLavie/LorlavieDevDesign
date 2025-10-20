import { Mail, MapPin, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden" id="contact">
      {/* Background decorations */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[hsl(var(--color-pink))] to-[hsl(var(--color-purple))] blur-3xl rounded-full"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-[hsl(var(--color-blue))] to-[hsl(var(--color-green))] blur-3xl rounded-full"
      />

      <div className="container max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-watercolor inline-block">
            Contactez-moi
          </h2>
          <p className="text-xl text-muted-foreground font-handwriting">
            💌 Discutons de votre projet autour d'un café !
          </p>
        </div>
        {/* Form */}
        <form className="mt-8 space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Votre Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/30 backdrop-blur border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
              placeholder="Entrez votre nom"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Votre Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-xl bg-white/30 backdrop-blur border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
              placeholder="exemple@email.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Votre projet
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full px-4 py-3 rounded-xl bg-white/30 backdrop-blur border border-border focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-muted-foreground"
              placeholder="Décrivez votre projet, vos envies, vos besoins..."
            />
          </div>
          <Button
            type="submit"
            size="lg"
            className="w-full bg-gradient-to-r from-[hsl(var(--color-pink))] to-[hsl(var(--color-purple))] hover:shadow-[var(--shadow-glow-pink)] transition-all duration-300 text-white font-semibold"
          >
            Envoyer
          </Button>
        </form>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Main contact card */}
        <div className="p-8 md:p-12 glass-effect rounded-3xl space-y-8">
          {/* Contact info */}
          <div className="space-y-6">
            <motion.div
              className="flex items-start gap-4 p-4 rounded-xl"
              whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-3 rounded-xl bg-gradient-to-br from-[hsl(var(--color-pink))] to-[hsl(var(--color-purple))] flex-shrink-0">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <a
                  href="mailto:lorlaviedevdesign@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  lorlaviedevdesign@gmail.com
                </a>
              </div>
            </motion.div>

            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
              <div className="p-3 rounded-xl bg-gradient-to-br from-[hsl(var(--color-blue))] to-[hsl(var(--color-green))] flex-shrink-0">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  Localisation
                </h3>
                <p className="text-muted-foreground">
                  PAU 🇫🇷 • Disponible en remote
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
              <div className="p-3 rounded-xl bg-gradient-to-br from-[hsl(var(--color-orange))] to-[hsl(var(--color-yellow))] flex-shrink-0">
                <Coffee className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  Disponibilité
                </h3>
                <p className="text-muted-foreground">
                  Du Lundi au Vendredi, 9h - 18h
                </p>
              </div>
            </div>
          </div>

          {/* Additional info */}
          <div className="mt-12 text-center space-y-4">
            <p className="text-muted-foreground">
              Vous pouvez aussi me retrouver sur :
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://github.com/LaureLavie"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 glass-effect rounded-xl hover:scale-105 transition-transform text-foreground hover:text-primary"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/laurelavie/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 glass-effect rounded-xl hover:scale-105 transition-transform text-foreground hover:text-primary"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/lorlavie/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 glass-effect rounded-xl hover:scale-105 transition-transform text-foreground hover:text-primary"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Fun closing note */}
          <div className="mt-12 p-6 bg-gradient-to-r from-[hsl(var(--color-orange))]/10 to-[hsl(var(--color-pink))]/10 rounded-2xl border border-primary/20">
            <p className="text-center font-handwriting text-lg text-primary">
              ☕ "Debugging level: Parler aux humains" ☕
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
