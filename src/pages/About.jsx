// src/pages/About.jsx
import React from "react";
import Section from "../components/Section";

export default function About() {
  return (
    <Section title="About ASENDA Studio">
      <div className="max-w-2xl text-sm leading-relaxed text-asenda-muted">
        <p>
          ASENDA Studio is a personal digital studio focused on building premium
          web applications, PWAs, and SaaS products with a strong emphasis on
          clarity, performance, and long-term maintainability.
        </p>

        <p className="mt-4">
          I work across the full product lifecycle—from concept and UX to
          production-ready React applications deployed on modern infrastructure.
          The goal is always the same: software that is simple to use, reliable,
          and scalable.
        </p>

        <p className="mt-4">
          ASENDA Studio operates globally and collaborates with clients and
          partners remotely.
        </p>
      </div>
    </Section>
  );
}
