// src/pages/Services.jsx
import React from "react";
import Section from "../components/Section";

const services = [
  {
    title: "PWA & React Development",
    desc: "Modern React applications using Vite, offline-first PWAs, installable on mobile and desktop."
  },
  {
    title: "SaaS Dashboards & Portals",
    desc: "Subscription systems, analytics dashboards, Stripe-ready UI, and scalable frontend architecture."
  },
  {
    title: "UX, Performance & Refactoring",
    desc: "Design polish, Lighthouse improvements, accessibility fixes, and codebase cleanup."
  }
];

export default function Services() {
  return (
    <Section
      title="Services"
      subtitle="Clear, focused services for modern digital products."
    >
      <div className="grid md:grid-cols-3 gap-4">
        {services.map((s) => (
          <div key={s.title} className="card p-6">
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
  );
}
