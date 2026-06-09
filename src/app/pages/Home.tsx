import { useOutletContext } from "react-router";
import { Link } from "react-router";
import { ChevronDown, Home as HomeIcon, Flame, Heart, Sparkles } from "lucide-react";
import { Language } from "../components/Header";

const translations = {
  kz: {
    title: "Argymaq",
    subtitle: "Тыныштық пен жайлылық үйлесім тапқан мекен",
    viewServices: "Қызметтерді қарау",
    whatsapp: "WhatsApp-қа жазу",
    yurts: "Киіз үйлер",
    yurtsDesc: "Дәстүрлі киіз үйлерде түнеу",
    sauna: "Моншалар",
    saunaDesc: "Таза ауада демалу",
    horses: "Ат клубы",
    horsesDesc: "Атпен серуендеу және үйрену",
    entertainment: "Ойын-сауық",
    entertainmentDesc: "Табиғатта белсенді демалыс",
  },
  ru: {
    title: "Argymaq",
    subtitle: "Место, где покой и уют нашли гармонию",
    viewServices: "Посмотреть услуги",
    whatsapp: "Написать в WhatsApp",
    yurts: "Юрты",
    yurtsDesc: "Проживание в традиционных юртах",
    sauna: "Баня",
    saunaDesc: "Отдых на свежем воздухе",
    horses: "Конный клуб",
    horsesDesc: "Прогулки на лошадях и обучение",
    entertainment: "Развлечения",
    entertainmentDesc: "Активный отдых на природе",
  },
  en: {
    title: "Argymaq",
    subtitle: "Where peace and comfort find perfect harmony",
    viewServices: "View Services",
    whatsapp: "Message on WhatsApp",
    yurts: "Yurts",
    yurtsDesc: "Traditional yurt accommodation",
    sauna: "Sauna",
    saunaDesc: "Outdoor relaxation",
    horses: "Horse Club",
    horsesDesc: "Horse riding and lessons",
    entertainment: "Entertainment",
    entertainmentDesc: "Active outdoor recreation",
  },
};

export default function Home() {
  const { language } = useOutletContext<{ language: Language }>();
  const t = translations[language];

  const scrollToCards = () => {
    document.getElementById("service-cards")?.scrollIntoView({ behavior: "smooth" });
  };

  const serviceCards = [
    {
      icon: HomeIcon,
      title: t.yurts,
      description: t.yurtsDesc,
      link: "/retreat",
    },
    {
      icon: Flame,
      title: t.sauna,
      description: t.saunaDesc,
      link: "/retreat",
    },
    {
      icon: Heart,
      title: t.horses,
      description: t.horsesDesc,
      link: "/horses",
    },
    {
      icon: Sparkles,
      title: t.entertainment,
      description: t.entertainmentDesc,
      link: "/entertainment",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&auto=format)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <h1
            className="text-6xl md:text-8xl font-normal text-primary mb-6 drop-shadow-2xl tracking-wide"
            style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic" }}
          >
            {t.title}
          </h1>
          <p className="text-xl md:text-3xl text-foreground/90 mb-12 drop-shadow-lg">{t.subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/retreat"
              className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded text-lg font-medium"
            >
              {t.viewServices}
            </Link>
            <a
              href="https://wa.me/+77066421768"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 rounded text-lg font-medium shadow-lg"
            >
              {t.whatsapp}
            </a>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <button
          onClick={scrollToCards}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 text-primary animate-bounce cursor-pointer group"
        >
          <ChevronDown className="w-12 h-12 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
        </button>
      </section>

      {/* Service Cards Section */}
      <section id="service-cards" className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Link
                  key={index}
                  to={card.link}
                  className="bg-card border-2 border-primary/20 rounded-lg p-8 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3
                    className="text-2xl font-semibold text-primary mb-3 group-hover:scale-105 transition-transform"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">{card.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-16 px-6 border-t border-primary/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://www.instagram.com/argymaq__almaty"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>Instagram</span>
            </a>
            <a
              href="https://wa.me/+77066421768"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 rounded shadow-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
