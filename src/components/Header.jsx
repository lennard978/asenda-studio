import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BrandMark from "./BrandMark";
import LanguageSwitch from "./LanguageSwitch";
import { useTheme } from "../hooks/useTheme";

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-sm px-3 py-2 rounded-full transition ${isActive ? "bg-asenda-orange text-white" : "text-asenda-text hover:bg-black/5"
        }`
      }
    >
      {children}
    </NavLink>
  );
}

export default function Header() {
  const { t } = useTranslation();
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-20 bg-asenda-bg/80 backdrop-blur border-b border-asenda-line">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3">
          <BrandMark size={28} />
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-wide">ASENDA</div>
            <div className="text-xs text-asenda-muted -mt-0.5 tracking-[0.22em] uppercase">Studio</div>
          </div>
        </NavLink>

        <nav className="hidden md:flex items-center gap-1">
          <NavItem to="/">{t("nav.home")}</NavItem>
          <NavItem to="/work">{t("nav.work")}</NavItem>
          <NavItem to="/services">{t("nav.services")}</NavItem>
          <NavItem to="/blog">{t("nav.blog")}</NavItem>
          <NavItem to="/about">{t("nav.about")}</NavItem>
          <NavItem to="/contact">{t("nav.contact")}</NavItem>
        </nav>

        <button
          onClick={toggle}
          className="w-9 h-9 rounded-full border border-[var(--color-line)] flex items-center justify-center text-sm hover:bg-black/5 dark:hover:bg-white/10"
          aria-label="Toggle theme"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        <LanguageSwitch />
      </div>
    </header>
  );
}
