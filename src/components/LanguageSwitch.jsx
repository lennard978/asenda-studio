import React from "react";
import { useTranslation } from "react-i18next";
import { setLang } from "../i18n/i18n";

export default function LanguageSwitch() {
  const { i18n } = useTranslation();

  return (
    <div
      className="
    control-bg
    flex items-center gap-1 px-1 py-1 rounded-full
    border border-(--color-line)
    shadow-sm backdrop-blur-sm
  "
    >

      <button
        type="button"
        onClick={() => setLang("en")}
        className={`
          px-3 py-1 text-xs rounded-full font-medium transition-all duration-150 ease-out

          ${i18n.language === "en"
            ? "bg-(--color-asenda-orange) text-white"
            : "text-muted hover:opacity-80"
          }
        `}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => setLang("de")}
        className={`
          px-3 py-1 text-xs rounded-full transition-all duration-150 ease-out
 font-medium 
          ${i18n.language === "de"
            ? "bg-(--color-asenda-orange) text-white"
            : "text-muted hover:opacity-80"
          }
        `}
      >
        DE
      </button>
    </div>
  );
}
