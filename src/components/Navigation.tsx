import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import logo from "@/assets/logo-lorlavie.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <img
              src={logo}
              alt="Lorlavie Dev'Design"
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
            />
            <span className="font-bold text-base sm:text-lg text-gradient">
              Lorlavie Dev'Design
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Projets
            </button>
            <div className="flex items-center gap-3">
              <Sun className="h-4 w-4 text-foreground/60" />
              <Switch
                checked={theme === "dark"}
                onCheckedChange={(checked) =>
                  setTheme(checked ? "dark" : "light")
                }
                aria-label="Toggle dark mode"
              />
              <Moon className="h-4 w-4 text-foreground/60" />
            </div>
            <Button
              onClick={() => scrollToSection("contact")}
              className="shadow-glow"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground/80 hover:text-primary transition-colors font-medium text-left"
              >
                À propos
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-foreground/80 hover:text-primary transition-colors font-medium text-left"
              >
                Projets
              </button>
              <div className="flex items-center gap-3 py-2">
                <Sun className="h-4 w-4 text-foreground/60" />
                <Switch
                  checked={theme === "dark"}
                  onCheckedChange={(checked) =>
                    setTheme(checked ? "dark" : "light")
                  }
                  aria-label="Toggle dark mode"
                />
                <Moon className="h-4 w-4 text-foreground/60" />
                <span className="text-sm text-foreground/60">
                  {theme === "dark" ? "Mode sombre" : "Mode clair"}
                </span>
              </div>
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full shadow-glow"
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
