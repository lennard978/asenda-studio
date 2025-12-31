import React from "react";

export default function LegalPrivacy() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold">Privacy Policy / Datenschutzerklärung</h1>
      <p className="mt-4 text-sm text-asenda-muted">
        Add your final policy text here. If you use analytics, contact forms, or embedded services,
        list them and describe data processing accordingly.
      </p>

      <div className="mt-6 rounded-2xl bg-white border border-asenda-line p-6 text-sm">
        <div className="font-semibold">Placeholder</div>
        <ul className="mt-3 list-disc ml-5 text-asenda-muted">
          <li>Controller details (ASENDA Studio + virtual office address)</li>
          <li>Contact email</li>
          <li>Hosting (Vercel)</li>
          <li>Contact form processing</li>
          <li>Cookies/local storage (language preference)</li>
        </ul>
      </div>
    </div>
  );
}
