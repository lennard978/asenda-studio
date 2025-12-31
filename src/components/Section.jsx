import React from "react";

export default function Section({ title, subtitle, children }) {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {title && <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>}
      {subtitle && <p className="mt-2 text-sm text-asenda-muted max-w-2xl">{subtitle}</p>}
      <div className="mt-6">{children}</div>
    </section>
  );
}
