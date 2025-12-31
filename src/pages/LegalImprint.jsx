import React from "react";

export default function LegalImprint() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold">Impressum</h1>
      <p className="mt-4 text-sm text-asenda-muted">
        Replace the placeholders with your virtual office (ladungsfähige Anschrift),
        email, and any required business details once you finalize your legal setup.
      </p>

      <div className="mt-6 rounded-2xl bg-white border border-asenda-line p-6">
        <div className="text-sm font-semibold">ASENDA Studio</div>
        <div className="mt-3 text-sm">
          <div>c/o [Virtual Office Provider]</div>
          <div>[Street + Number]</div>
          <div>[ZIP] [City], Germany</div>
          <div className="mt-3">Email: [your@email.com]</div>
        </div>
      </div>
    </div>
  );
}
