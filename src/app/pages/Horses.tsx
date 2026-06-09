import { useState } from "react";
import { useOutletContext } from "react-router";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { Language } from "../components/Header";

const translations = {
  kz: {
    title: "Ат клубы",
    subtitle: "Атпен серуендеу және білім алу",
    description:
      "Біздің ат клубымызда тәжірибелі нұсқаушылармен бірге атпен серуендеңіз. Бастауыштардан тәжірибелілерге дейін барлық деңгейлер үшін сабақтар. Біздің аттарымыз жақсы дайындалған және адамдармен жұмыс істеуге үйретілген. Таулардың тамаша көрінісі бар табиғи жолдармен серуен жасаңыз.",
    gallery: "Фото галерея",
    sport: {
      title: "Атпен серуендеу",
      lesson30: "Атпен серуен (1 адамға)",
      lesson60: "6 адамға дейінгі топқа арналған атты тур + таңдау бойынша бір ыстық тағам (адамнан)",
      group: "Күту кезінде садақ атып, алтыбақанда тербеле аласыз",
    },
    lessons: {
      title: "Атқа мінуді үйрену сабақтары",
      beginner: "Алғашқы 3 сабақ",
      children: "3-ші сабақтан кейін",
      course: "Күту кезінде садақ атып, алтыбақанда тербеле аласыз",
    },
    contact: "Брондау үшін бізбен байланысыңыз",
  },
  ru: {
    title: "Конный клуб",
    subtitle: "Прогулки на лошадях и обучение",
    description:
      "В нашем конном клубе вы можете совершить прогулки на лошадях с опытными инструкторами. Занятия для всех уровней от новичков до опытных наездников. Наши лошади хорошо подготовлены и обучены работе с людьми. Прогулки по живописным тропам с видом на горы.",
    gallery: "Фото галерея",
    sport: {
      title: "Конные прогулки",
      lesson30: "Конная прогулка (на 1 человека)",
      lesson60: "Конный тур для группы до 6 человек + одно горячее блюдо на выбор (с человека)",
      group: "Во время ожидания вы можете пострелять из лука и покачаться на алтыбакане",
    },
    lessons: {
      title: "Уроки верховой езды",
      beginner: "Первые 3 урока",
      children: "После 3-го урока",
      course: "Во время ожидания вы можете пострелять из лука и покачаться на алтыбакане",
    },
    contact: "Свяжитесь с нами для бронирования",
  },
  en: {
    title: "Horse Club",
    subtitle: "Horseback riding and lessons",
    description:
      "At our equestrian club, enjoy horseback riding with experienced instructors. Lessons for all levels from beginners to experienced riders. Our horses are well-trained and accustomed to working with people. Ride through scenic trails with mountain views.",
    gallery: "Photo Gallery",
    sport: {
      title: "Horse Riding",
      lesson30: "Horseback ride (per person)",
      lesson60: "Horseback tour for groups up to 6 people + one hot dish of choice (per person)",
      group: "While waiting, you can try archery and ride the Altybakan",
    },
    lessons: {
      title: "Horse Riding Lessons",
      beginner: "First 3 lessons",
      children: "After the 3rd lesson",
      course: "While waiting, you can try archery and ride the Altybakan",
    },
    contact: "Contact us for booking",
  },
};

// Editable prices
const sportPrices = {
  lesson30: "7,000 ₸",
  lesson60: "15,000 ₸",
  group: "",
};

const lessonPrices = {
  beginner: "10,000 ₸",
  children: "7,000 ₸",
  course: "",
};

// Carousel images (6 slots - replaceable)
const carouselImages = [
  "https://i.yapx.ru/dzcTu.png",
  "https://i.yapx.ru/dzcTo.png",
  "https://i.yapx.ru/dzcTn.png",
  "https://i.yapx.ru/dzcTc.png",
  "https://i.yapx.ru/dzcTY.png",
  "https://i.yapx.ru/dzcTa.png",
];

export default function Horses() {
  const { language } = useOutletContext<{ language: Language }>();
  const t = translations[language];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=1920&h=800&fit=crop&auto=format"
          alt="Horse club hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <div className="flex justify-center mb-4">
              <div className="bg-primary/20 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center">
                <Heart className="w-12 h-12 text-primary" strokeWidth={1.5} />
              </div>
            </div>
            <h1
              className="text-5xl md:text-7xl font-bold text-primary drop-shadow-2xl mb-4"
              style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic" }}
            >
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90 drop-shadow-lg">{t.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 px-6 border-b border-primary/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-foreground/80 leading-relaxed">{t.description}</p>
        </div>
      </section>

      {/* Photo Carousel */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl font-bold text-primary text-center mb-12"
            style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic" }}
          >
            {t.gallery}
          </h2>

          <div className="relative">
            <div className="overflow-hidden rounded-lg border-2 border-primary/20" ref={emblaRef}>
              <div className="flex">
                {carouselImages.map((image, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0">
                    <div className="relative h-[500px]">
                      <img src={image} alt={`Horse ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={scrollPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/90 hover:bg-primary text-primary-foreground p-3 rounded-full shadow-lg transition-all"
            >
              <ChevronLeft className="w-6 h-6" strokeWidth={1.5} />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/90 hover:bg-primary text-primary-foreground p-3 rounded-full shadow-lg transition-all"
            >
              <ChevronRight className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </section>

      {/* Price Tables */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Equestrian Sport */}
            <div className="bg-card border-2 border-primary/30 rounded-lg p-8">
              <h3
                className="text-3xl font-bold text-primary mb-2"
                style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic" }}
              >
                {t.sport.title}
              </h3>
              <div className="mb-6 h-1 w-20 bg-primary/50"></div>

              <div className="space-y-4">
                <div className="flex justify-between items-start gap-4 py-4 border-b border-primary/20">
                  <span className="text-foreground/80 text-lg">{t.sport.lesson30}</span>
                  <span className="text-2xl font-bold text-primary shrink-0">{sportPrices.lesson30}</span>
                </div>
                <div className="flex justify-between items-start gap-4 py-4 border-b border-primary/20">
                  <span className="text-foreground/80 text-lg">{t.sport.lesson60}</span>
                  <span className="text-2xl font-bold text-primary shrink-0">{sportPrices.lesson60}</span>
                </div>
                <div className="flex justify-between items-start gap-4 py-4">
                  <span className="text-foreground/80 text-lg">{t.sport.group}</span>
                  <span className="text-2xl font-bold text-primary shrink-0">{sportPrices.group}</span>
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

            {/* Riding Lessons */}
            <div className="bg-card border-2 border-primary/30 rounded-lg p-8">
              <h3
                className="text-3xl font-bold text-primary mb-2"
                style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic" }}
              >
                {t.lessons.title}
              </h3>
              <div className="mb-6 h-1 w-20 bg-primary/50"></div>

              <div className="space-y-4">
                <div className="flex justify-between items-start gap-4 py-4 border-b border-primary/20">
                  <span className="text-foreground/80 text-lg">{t.lessons.beginner}</span>
                  <span className="text-2xl font-bold text-primary shrink-0">{lessonPrices.beginner}</span>
                </div>
                <div className="flex justify-between items-start gap-4 py-4 border-b border-primary/20">
                  <span className="text-foreground/80 text-lg">{t.lessons.children}</span>
                  <span className="text-2xl font-bold text-primary shrink-0">{lessonPrices.children}</span>
                </div>
                <div className="flex justify-between items-start gap-4 py-4">
                  <span className="text-foreground/80 text-lg">{t.lessons.course}</span>
                  <span className="text-2xl font-bold text-primary shrink-0">{lessonPrices.course}</span>
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
      </section>
    </div>
  );
}