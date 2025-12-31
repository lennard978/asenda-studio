// src/pages/Work.jsx
import React from "react";
import Section from "../components/Section";

const projects = [
  {
    name: "Trakio",
    desc: "Subscription tracking PWA with analytics, offline support, and premium features."
  },
  {
    name: "Client Project",
    desc: "Custom React dashboard built for performance and maintainability."
  }
];

export default function Work() {
  return (
    <Section
      title="Work"
      subtitle="Selected projects and case studies."
    >
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <div key={p.name} className="card p-6">
            <div className="text-sm font-semibold">
              {p.name}
            </div>
            <p className="mt-2 text-xs text-muted">
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
