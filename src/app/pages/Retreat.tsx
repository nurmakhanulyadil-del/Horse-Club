import { useOutletContext } from "react-router";
import { Home, Flame } from "lucide-react";
import { Language } from "../components/Header";

const translations = {
  kz: {
    title: "Демалыс аймағы",
    subtitle: "Табиғатта жайлы қызметтер",
    yurts: {
      title: "Дәстүрлі киіз үйлер",
      description:
        "Заманауи жайлылықпен жабдықталған нағыз қазақ киіз үйлерінде түнеңіз. Әрбір киіз үй 4-6 адамға арналған, қолмен жасалған жиһазбен безендірілген. Таулардың тамаша көрінісі және табиғи ортамен толық үйлесім. Барлық қажетті қолжетімділік қамтамасыз етілген: жылыту, жарық, жұмсақ төсек-орын және басқа да ыңғайлылықтар.",
      priceTable: {
        title: "Бағалар",
        overnight: "Киіз үйлер (3–16 адам)",
        additionalGuest: "10 адамға арналған беседка + тапшан",
        dayVisit: "Кешен (адам санына байланысты)",
      },
    },
    sauna: {
      title: "Орыс моншасы",
      description:
        "Таулардың көрінісі бар ағаш моншада демалыңыз. Біздің моншамыз дәстүрлі рецепттер бойынша салынған және табиғи материалдардан жасалған. Дәстүрлі шілдехана рәсімдері, ароматерапия және демалу аймағы қолжетімді. Суық суға шомылу бассейні және демалу террасасы бар. Тәжірибелі моншашылардан кеңес алыңыз.",
      priceTable: {
        title: "Бағалар",
        rental: "Монша, қосымша демалыс аймағымен және үй кинотеатрымен",
        additionalHour: "Буландырушының қызметтері бөлек төленеді",
      },
    },
    price: "Баға:",
    contact: "Брондау үшін бізбен байланысыңыз",
  },
  ru: {
    title: "Зона отдыха",
    subtitle: "Комфортные услуги на природе",
    yurts: {
      title: "Традиционные юрты",
      description:
        "Ночуйте в настоящих казахских юртах с современными удобствами. Каждая юрта рассчитана на 4-6 человек и украшена ручной мебелью. Прекрасный вид на горы и полное единение с природой. Обеспечены все необходимые удобства: отопление, освещение, мягкие кровати и другие удобства.",
      priceTable: {
        title: "Цены",
        overnight: "Юрты (от 3 до 16 человек)",
        additionalGuest: "Беседка + топчан на 10 человек",
        dayVisit: "Комплекс (в зависимости от количества человек)",
      },
    },
    sauna: {
      title: "Русская баня",
      description:
        "Отдохните в деревянной бане с видом на горы. Наша баня построена по традиционным рецептам и из натуральных материалов. Доступны традиционные банные процедуры, ароматерапия и зона отдыха. Бассейн с холодной водой и терраса для релаксации. Консультации от опытных банщиков.",
      priceTable: {
        title: "Цены",
        rental: "Баня с дополнительной зоной отдыха и домашним кинотеатром",
        additionalHour: "Услуги пармейстера оплачиваются отдельно",
      },
    },
    price: "Цена:",
    contact: "Свяжитесь с нами для бронирования",
  },
  en: {
    title: "Retreat Zone",
    subtitle: "Comfortable services in nature",
    yurts: {
      title: "Traditional Yurts",
      description:
        "Stay in authentic Kazakh yurts equipped with modern amenities. Each yurt accommodates 4-6 people and features handcrafted furniture. Beautiful mountain views and complete immersion in nature. All necessary amenities provided: heating, lighting, soft beds, and other comforts.",
      priceTable: {
        title: "Pricing",
        overnight: "Yurts (for 3–16 people)",
        additionalGuest: "Gazebo + topchan (for 10 people)",
        dayVisit: "Full Complex (depending on the number of people)",
      },
    },
    sauna: {
      title: "Russian Sauna",
      description:
        "Relax in a wooden sauna with mountain views. Our sauna is built according to traditional recipes and natural materials. Traditional sauna rituals, aromatherapy, and relaxation area available. Cold water pool and relaxation terrace. Expert guidance from experienced sauna masters.",
      priceTable: {
        title: "Pricing",
        rental: "Sauna with an additional lounge area and a home theater",
        additionalHour: "Parmeister (bath attendant) services are paid separately",
      },
    },
    price: "Price:",
    contact: "Contact us for booking",
  },
};

// Editable prices (can be updated)
const yurtPrices = {
  overnight: "20,000 ₸",
  additionalGuest: "15,000 ₸",
  dayVisit: "100,000 ₸",
};

const saunaPrices = {
  rental: "60,000 ₸",
  additionalHour: "",
};

export default function Retreat() {
  const { language } = useOutletContext<{ language: Language }>();
  const t = translations[language];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 px-6 text-center border-b border-primary/20">
        <h1
          className="text-5xl md:text-7xl font-bold text-primary mb-4"
          style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic" }}
        >
          {t.title}
        </h1>
        <p className="text-xl text-foreground/70 max-w-3xl mx-auto">{t.subtitle}</p>
      </section>

      {/* Yurts Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Photos */}
            <div className="space-y-6">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl border border-primary/20">
                <img
                  src="https://i.yapx.ru/dzYN7.jpg"
                  alt="Traditional yurt exterior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl border border-primary/20">
                <img
                  src="https://i.yapx.ru/dzaig.png"
                  alt="Traditional yurt interior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center">
                  <Home className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h2
                  className="text-4xl md:text-5xl font-bold text-primary"
                  style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic" }}
                >
                  {t.yurts.title}
                </h2>
              </div>

              <p className="text-lg text-foreground/80 leading-relaxed mb-8">{t.yurts.description}</p>

              {/* Price Table */}
              <div className="bg-card border-2 border-primary/30 rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-primary mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
                  {t.yurts.priceTable.title}
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-primary/20 gap-4">
                    <span className="text-foreground/80">{t.yurts.priceTable.overnight}</span>
                    <span className="text-2xl font-bold text-primary whitespace-nowrap">{yurtPrices.overnight}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-primary/20 gap-4">
                    <span className="text-foreground/80">{t.yurts.priceTable.additionalGuest}</span>
                    <span className="text-2xl font-bold text-primary whitespace-nowrap">{yurtPrices.additionalGuest}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 gap-4">
                    <span className="text-foreground/80">{t.yurts.priceTable.dayVisit}</span>
                    <span className="text-2xl font-bold text-primary whitespace-nowrap">{yurtPrices.dayVisit}</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/+77066421768"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 block w-full text-center px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 rounded font-medium shadow-lg"
                >
                  {t.contact}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-primary/20"></div>
      </div>

      {/* Sauna Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Content */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center">
                  <Flame className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h2
                  className="text-4xl md:text-5xl font-bold text-primary"
                  style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic" }}
                >
                  {t.sauna.title}
                </h2>
              </div>

              <p className="text-lg text-foreground/80 leading-relaxed mb-8">{t.sauna.description}</p>

              {/* Price Table */}
              <div className="bg-card border-2 border-primary/30 rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-primary mb-6" style={{ fontFamily: "Playfair Display, serif" }}>
                  {t.sauna.priceTable.title}
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-primary/20 gap-4">
                    <span className="text-foreground/80">{t.sauna.priceTable.rental}</span>
                    <span className="text-2xl font-bold text-primary whitespace-nowrap">{saunaPrices.rental}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 gap-4">
                    <span className="text-foreground/80">{t.sauna.priceTable.additionalHour}</span>
                    <span className="text-2xl font-bold text-primary whitespace-nowrap">{saunaPrices.additionalHour}</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/+77066421768"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 block w-full text-center px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 rounded font-medium shadow-lg"
                >
                  {t.contact}
                </a>
              </div>
            </div>

            {/* Photos */}
            <div className="space-y-6">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl border border-primary/20">
                <img
                  src="https://i.yapx.ru/dzYQF.jpg"
                  alt="Traditional sauna exterior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl border border-primary/20">
                <img
                  src="https://i.yapx.ru/dzYLM.jpg"
                  alt="Sauna relaxation area"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



