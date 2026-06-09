import { Link } from "react-router";
import { Mountain, Instagram, MessageCircle, Globe } from "lucide-react";
import { Language } from "./Header";

interface FooterProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const footerTranslations = {
  kz: {
    home: "Басты бет",
    services: "Қызметтер",
    horses: "Ат клубы",
    entertainment: "Ойын-сауық",
    directions: "Қалай жетуге болады",
    rights: "© 2025 Argymaq. Барлық құқықтар қорғалған.",
  },
  ru: {
    home: "Главная",
    services: "Услуги",
    horses: "Конный клуб",
    entertainment: "Развлечения",
    directions: "Как добраться",
    rights: "© 2025 Argymaq. Все права защищены.",
  },
  en: {
    home: "Home",
    services: "Services",
    horses: "Horse Club",
    entertainment: "Entertainment",
    directions: "Directions",
    rights: "© 2025 Argymaq. All rights reserved.",
  },
};

export default function Footer({ language, setLanguage }: FooterProps) {
  const t = footerTranslations[language];

  return (
    <footer className="bg-secondary/50 border-t border-primary/20 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="w-8 h-8 text-primary" strokeWidth={1.5} />
              <span
                className="text-2xl font-bold text-primary tracking-wide"
                style={{ fontFamily: "Fjalla One, sans-serif" }}
              >
                ARGYMAQ
              </span>
            </div>
            <p className="text-foreground/60 text-sm">
              {language === "kz" && "Табиғатпен тыныштық"}
              {language === "ru" && "Покой в природе"}
              {language === "en" && "Peace in Nature"}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-primary font-semibold mb-4">
              {language === "kz" && "Навигация"}
              {language === "ru" && "Навигация"}
              {language === "en" && "Navigation"}
            </h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                {t.home}
              </Link>
              <Link to="/retreat" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                {t.services}
              </Link>
              <Link to="/horses" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                {t.horses}
              </Link>
              <Link to="/entertainment" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                {t.entertainment}
              </Link>
              <Link to="/directions" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                {t.directions}
              </Link>
            </nav>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-primary font-semibold mb-4">
              {language === "kz" && "Әлеуметтік желілер"}
              {language === "ru" && "Социальные сети"}
              {language === "en" && "Social Media"}
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/argymaq__almaty"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors text-sm"
              >
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
                <span>Instagram</span>
              </a>
              <a
                href="https://wa.me/+77066421768"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors text-sm"
              >
                <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Language */}
          <div>
            <h4 className="text-primary font-semibold mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5" strokeWidth={1.5} />
              {language === "kz" && "Тіл"}
              {language === "ru" && "Язык"}
              {language === "en" && "Language"}
            </h4>
            <div className="flex gap-2">
              {(["kz", "ru", "en"] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1 rounded transition-all text-sm ${
                    language === lang
                      ? "bg-primary text-primary-foreground font-medium"
                      : "text-muted-foreground border border-primary/30 hover:text-primary"
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20 pt-6">
          <p className="text-center text-foreground/50 text-sm">{t.rights}</p>
        </div>
      </div>
    </footer>
  );
}
