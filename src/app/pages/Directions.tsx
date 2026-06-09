import { useOutletContext } from "react-router";
import { MapPin, Navigation } from "lucide-react";
import { Language } from "../components/Header";

const translations = {
  kz: {
    title: "Қалай жетуге болады",
    subtitle: "Бізді оңай табыңыз",
    description: "Google Maps немесе 2GIS арқылы бізді табыңыз",
    mapTitle: "Карта",
    googleMaps: "Google Maps-те ашу",
    twoGis: "2GIS-те ашу",
    address: "Мекенжай",
    addressText: "ㅤㅤТәтімов көшесі 37в,ㅤㅤ Наурызбай ауданы, Алматы",
    phone: "Телефон",
    phoneNumber: "+7 (706) 642-17-68",
    workingHours: "Жұмыс уақыты",
    hours: "Күн сайын, 09:00 - 19:00",
  },
  ru: {
    title: "Как добраться",
    subtitle: "Найдите нас легко",
    description: "Найдите нас через Google Maps или 2GIS",
    mapTitle: "Карта",
    googleMaps: "Открыть в Google Maps",
    twoGis: "Открыть в 2GIS",
    address: "Адрес",
    addressText: "Улица Татимова 37в, Наурызбайский район, Алматы",
    phone: "Телефон",
    phoneNumber: "+7 (706) 642-17-68",
    workingHours: "Время работы",
    hours: "Ежедневно, 09:00 - 19:00",
  },
  en: {
    title: "Directions",
    subtitle: "Find us easily",
    description: "Find us through Google Maps or 2GIS",
    mapTitle: "Map",
    googleMaps: "Open in Google Maps",
    twoGis: "Open in 2GIS",
    address: "Address",
    addressText: "ㅤㅤ37v Tatimov Street,ㅤㅤ Nauryzbai district, Almaty",
    phone: "Phone",
    phoneNumber: "+7 (706) 642-17-68",
    workingHours: "Working Hours",
    hours: "Daily, 09:00 - 19:00",
  },
};

export default function Directions() {
  const { language } = useOutletContext<{ language: Language }>();
  const t = translations[language];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-20 px-6 text-center border-b border-primary/20">
        <div className="flex justify-center mb-6">
          <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center">
            <MapPin className="w-12 h-12 text-primary" strokeWidth={1.5} />
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

      {/* Description */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-foreground/80">{t.description}</p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl font-bold text-primary text-center mb-8"
            style={{ fontFamily: "Playfair Display, serif", fontStyle: "italic" }}
          >
            {t.mapTitle}
          </h2>

          {/* Map Embed Placeholder */}
          <div className="relative w-full h-[500px] rounded-lg overflow-hidden border-2 border-primary/30 shadow-2xl bg-card">
            {/* Google Maps iframe placeholder - can be replaced with actual embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1455.1191698032897!2d76.8423995!3d43.162521!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3883670040345d87%3A0xf3cbcce8c4994826!2z0JrQvtC90LXRhiDRg9C70LjRhtGLINCi0LDRgtC40LzQvtCy0LAgLtCX0LAg0L_RgNC-0LrQsNGCINC70L7RiNCw0LTQtdC5ICLQkNGA0pPRi9C80LDSmyI!5e0!3m2!1sen!2skz!4v1780547687316!5m2!1sen!2skz"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Argymaq location"
            ></iframe>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <a
              href="https://maps.app.goo.gl/yk7HT3EhaT7SYD3N9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-lg text-lg font-medium"
            >
              <Navigation className="w-6 h-6" strokeWidth={1.5} />
              <span>{t.googleMaps}</span>
            </a>
            <a
              href="https://go.2gis.com/gBWJG"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 rounded-lg text-lg font-medium shadow-lg"
            >
              <MapPin className="w-6 h-6" strokeWidth={1.5} />
              <span>{t.twoGis}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Address */}
            <div className="bg-card border-2 border-primary/20 rounded-lg p-8 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3" style={{ fontFamily: "Playfair Display, serif" }}>
                {t.address}
              </h3>
              <p className="text-foreground/70">{t.addressText}</p>
            </div>

            {/* Phone */}
            <div className="bg-card border-2 border-primary/20 rounded-lg p-8 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3" style={{ fontFamily: "Playfair Display, serif" }}>
                {t.phone}
              </h3>
              <a href="tel:+77066421768" className="text-foreground/70 hover:text-primary transition-colors">
                {t.phoneNumber}
              </a>
            </div>

            {/* Working Hours */}
            <div className="bg-card border-2 border-primary/20 rounded-lg p-8 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3" style={{ fontFamily: "Playfair Display, serif" }}>
                {t.workingHours}
              </h3>
              <p className="text-foreground/70">{t.hours}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
