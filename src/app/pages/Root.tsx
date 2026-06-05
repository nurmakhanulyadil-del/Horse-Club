import { useState } from "react";
import { Outlet } from "react-router";
import Header, { Language } from "../components/Header";
import Footer from "../components/Footer";

export default function Root() {
  const [language, setLanguage] = useState<Language>("ru");

  return (
    <div className="min-h-screen bg-background text-foreground" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
      {/* Grain texture overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03] z-50"
        style={{
          backgroundImage:
            "url(data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E)",
        }}
      ></div>

      <Header language={language} setLanguage={setLanguage} />
      <main className="pt-20">
        <Outlet context={{ language }} />
      </main>
      <Footer language={language} setLanguage={setLanguage} />
    </div>
  );
}
