// src/pages/Contact.jsx
import React from "react";
import Section from "../components/Section";

export default function Contact() {
  return (
    <Section
      title="Contact"
      subtitle="Get in touch to discuss a project or collaboration."
    >
      <div className="max-w-xl">
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Connect this form to your email or backend.");
          }}
        >
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full rounded-xl border border-asenda-line px-4 py-3 text-sm"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full rounded-xl border border-asenda-line px-4 py-3 text-sm"
          />
          <textarea
            placeholder="Message"
            rows={5}
            required
            className="w-full rounded-xl border border-asenda-line px-4 py-3 text-sm"
          />
          <button
            type="submit"
            className="button px-6 py-3 rounded-full bg-[var(--color-asenda-orange)] text-white text-sm font-medium"
          >
            Send message
          </button>
        </form>
      </div>
    </Section>
  );
}
