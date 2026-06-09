import { useOutletContext } from "react-router";
import { Sparkles } from "lucide-react";
import { Language } from "../components/Header";

const translations = {
  kz: {
    title: "Ойын-сауық",
    subtitle: "Табиғатта белсенді демалыс",
    services: [
      {
        emoji: "🐴",
        title: "Атпен серуендеу",
        description: "Таулардың көрінісі бар табиғи жолдармен атпен серуен",
      },
      {
        emoji: "🌸",
        title: "Алтыбақан",
        description: "Дәстүрлі қазақ тербелісінде демалыс",
      },
      {
        emoji: "📷",
        title: "Фотосессия",
        description: "Табиғи пейзаждармен кәсіби түсірілістер",
      },
      {
        emoji: "🎤",
        title: "Караоке",
        description: "Ашық аспан астында әнмен демалу",
      },
      {
        emoji: "🏹",
        title: "Садақ ату",
        description: "Нұсқаушылармен садақтан ату сабақтары",
      },
      {
        emoji: "🎲",
        title: "Үстел ойындары",
        description: "Отбасымен және достармен ойындар",
      },
    ],
    contact: "Брондау үшін бізбен байланысыңыз",
  },
  ru: {
    title: "Развлечения",
    subtitle: "Активный отдых на природе",
    services: [
      {
        emoji: "🐴",
        title: "Конная прогулка",
        description: "Прогулки на лошадях по живописным тропам",
      },
      {
        emoji: "🌸",
        title: "Алтыбакан",
        description: "Отдых на традиционных казахских качелях",
      },
      {
        emoji: "📷",
        title: "Фотосессия",
        description: "Профессиональные съемки на фоне природы",
      },
      {
        emoji: "🎤",
        title: "Караоке",
        description: "Пение под открытым небом",
      },
      {
        emoji: "🏹",
        title: "Стрельба из лука",
        description: "Занятия стрельбой с инструкторами",
      },
      {
        emoji: "🎲",
        title: "Настольные игры",
        description: "Игры с семьёй и друзьями",
      },
    ],
    contact: "Свяжитесь с нами для бронирования",
  },
  en: {
    title: "Entertainment",
    subtitle: "Active outdoor recreation",
    services: [
      {
        emoji: "🐴",
        title: "Horse Riding",
        description: "Scenic trail rides through nature",
      },
      {
        emoji: "🌸",
        title: "Altybakan",
        description: "Relax on traditional Kazakh swings",
      },
      {
        emoji: "📷",
        title: "Photo Session",
        description: "Professional photography with natural landscapes",
      },
      {
        emoji: "🎤",
        title: "Karaoke",
        description: "Singing under the open sky",
      },
      {
        emoji: "🏹",
        title: "Archery",
        description: "Archery lessons with instructors",
      },
      {
        emoji: "🎲",
        title: "Board Games",
        description: "Games with family and friends",
      },
    ],
    contact: "Contact us for booking",
  },
};

// Replaceable service images
const serviceImages = [
  "https://i.yapx.ru/dzaM4.jpg",
  "https://i.yapx.ru/dzaM3.jpg",
  "https://i.yapx.ru/dzaM5.jpg",
  "https://i.yapx.ru/dzaYz.jpg",
  "https://i.yapx.ru/dzaQY.jpg",
  "https://i.yapx.ru/dzaM1.jpg",
];

export default function Entertainment() {
  const { language } = useOutletContext<{ language: Language }>();
  const t = translations[language];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 px-6 text-center border-b border-primary/20">
        <div className="flex justify-center mb-6">
          <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center">
            <Sparkles className="w-12 h-12 text-primary" strokeWidth={1.5} />
          </div>
        </div>
        <h1
          className="text-5xl md:text-7xl font-bold text-primary mb-4"
          style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic" }}
        >
          {t.title}
        </h1>
        <p className="text-xl text-foreground/70 max-w-3xl mx-auto">{t.subtitle}</p>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.map((service, index) => (
              <div
                key={index}
                className="bg-card border-2 border-primary/20 rounded-lg overflow-hidden hover:border-primary hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={serviceImages[index]}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Emoji overlay */}
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-3xl">{service.emoji}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="text-2xl font-bold text-primary mb-3"
                    style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed mb-4">{service.description}</p>
                  <a
                    href="https://wa.me/+77066421768"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-5 py-2 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded font-medium"
                  >
                    {t.contact}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}