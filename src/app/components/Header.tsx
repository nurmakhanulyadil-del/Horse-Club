import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Mountain, Globe } from "lucide-react";

export type Language = "kz" | "ru" | "en";

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

interface Translations {
  home: string;
  services: string;
  horses: string;
  entertainment: string;
  directions: string;
  book: string;
}

const navTranslations: Record<Language, Translations> = {
  kz: {
    home: "Басты бет",
    services: "Қызметтер",
    horses: "Ат клубы",
    entertainment: "Ойын-сауық",
    directions: "Қалай жетуге болады",
    book: "Брондау",
  },
  ru: {
    home: "Главная",
    services: "Услуги",
    horses: "Конный клуб",
    entertainment: "Развлечения",
    directions: "Как добраться",
    book: "Забронировать",
  },
  en: {
    home: "Home",
    services: "Services",
    horses: "Horse Club",
    entertainment: "Entertainment",
    directions: "Directions",
    book: "Book Now",
  },
};

export default function Header({ language, setLanguage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const t = navTranslations[language];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { path: "/", label: t.home },
    { path: "/retreat", label: t.services },
    { path: "/horses", label: t.horses },
    { path: "/entertainment", label: t.entertainment },
    { path: "/directions", label: t.directions },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <Mountain className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" strokeWidth={1.5} />
          <span
            className="text-3xl font-bold text-primary tracking-wider"
            style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic" }}
          >
            ARGYMAQ
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-all duration-300 ${
                isActive(link.path)
                  ? "text-primary font-medium border-b-2 border-primary pb-1"
                  : "text-foreground/80 hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Side: Language + Book Button */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Language Switcher */}
          <div className="flex items-center gap-3">
            <Globe className="w-5 h-5 text-primary" strokeWidth={1.5} />
            <div className="flex gap-2">
              {(["kz", "ru", "en"] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1 rounded transition-all ${
                    language === lang
                      ? "bg-primary text-primary-foreground font-medium"
                      : "text-muted-foreground hover:text-primary border border-primary/30"
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Book Button */}
          <a
            href="https://wa.me/+77066421768"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded font-medium"
          >
            {t.book}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-primary" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-6 h-6" strokeWidth={1.5} /> : <Menu className="w-6 h-6" strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-primary/20">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-left transition-colors ${
                  isActive(link.path) ? "text-primary font-medium" : "text-foreground/80 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-primary/20 pt-4 mt-2">
              <div className="flex gap-2 mb-4">
                {(["kz", "ru", "en"] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-3 py-1 rounded flex-1 transition-all ${
                      language === lang
                        ? "bg-primary text-primary-foreground font-medium"
                        : "text-muted-foreground border border-primary/30"
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
              <a
                href="https://wa.me/+77066421768"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-2 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded font-medium"
              >
                {t.book}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
