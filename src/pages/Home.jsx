import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Section from "../components/Section";
import { useSEO } from "../hooks/useSEO";

export default function Home() {
  const { t } = useTranslation();
  useSEO({
    title: "Premium digital products & software delivery",
    description:
      "ASENDA Studio builds modern PWAs, SaaS dashboards, and high-quality digital products.",
    path: "/"
  });
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 pt-16 pb-12">
        <div className="card relative overflow-hidden p-8 md:p-12">
          {/* Glow */}
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full"
            style={{
              background: "rgba(255,107,44,0.18)",
              filter: "blur(40px)"
            }}
          />

          <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight max-w-3xl">
            Premium digital products and freelance software delivery.
          </h1>

          <p className="mt-5 text-base md:text-lg text-muted max-w-2xl">
            I build modern PWAs, SaaS dashboards, and clean user experiences—designed
            for performance, clarity, and scale.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/work"
              className="button px-6 py-3 rounded-full bg-[var(--color-asenda-orange)] text-white text-sm font-medium"
            >
              View work
            </Link>

            <Link
              to="/contact"
              className="button px-6 py-3 rounded-full bg-[var(--color-asenda-orange)] text-white text-sm font-medium"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>


      <Section
        title={t("sections.featuredWork")}
        subtitle="Selected projects across PWAs, dashboards, and SaaS product delivery."
      >
        <div className="grid md:grid-cols-3 gap-4">
          {["Trakio (PWA SaaS)", "Client Project (Example)", "Design System (Example)"].map((x) => (
            <div key={x} className="card p-5">
              <div className="text-sm font-semibold">{x}</div>
              <p className="mt-2 text-xs text-muted">
                Short description. Replace with real case study details.
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title={t("sections.services")}
        subtitle="Clear packages for product builds, UI/UX upgrades, and performance improvements."
      >
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: "PWA / React Builds", desc: "Vite + React + Tailwind, offline-first, installable." },
            { title: "SaaS Dashboards", desc: "Analytics, subscriptions, billing flows, Stripe-ready UI." },
            { title: "UX & Performance", desc: "Lighthouse improvements, design polish, accessibility." }
          ].map((s) => (
            <div key={s.title} className="card p-5">
              <div className="text-sm font-semibold">
                {s.title}
              </div>
              <p className="mt-2 text-xs text-muted">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
