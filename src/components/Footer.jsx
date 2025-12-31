// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-[var(--color-line)]">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="text-sm font-semibold">
              ASENDA Studio
            </div>
            <div className="mt-1 text-xs text-muted">
              Premium products, PWAs, and freelance software delivery.
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <Link
              className="text-muted hover:opacity-80"
              to="/imprint"
            >
              {t("legal.imprint")}
            </Link>
            <Link
              className="text-muted hover:opacity-80"
              to="/privacy"
            >
              {t("legal.privacy")}
            </Link>
          </div>
        </div>

        <div className="mt-8 text-xs text-muted">
          © {new Date().getFullYear()} ASENDA Studio
        </div>
      </div>
    </footer>
  );
}
