import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const SITE_NAME = "ASENDA Studio";
const SITE_URL = "https://asenda.studio"; // update later
const DEFAULT_IMAGE = "/og-default.png";

export function useSEO({
  title,
  description,
  image = DEFAULT_IMAGE,
  path = ""
}) {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  useEffect(() => {
    const fullTitle = title
      ? `${title} · ${SITE_NAME}`
      : SITE_NAME;

    document.title = fullTitle;

    setMeta("description", description);
    setMetaProperty("og:title", fullTitle);
    setMetaProperty("og:description", description);
    setMetaProperty("og:image", image);
    setMetaProperty("og:url", `${SITE_URL}${path}`);
    setMetaProperty("og:site_name", SITE_NAME);

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:image", image);

    document.documentElement.lang = lang;
  }, [title, description, image, path, lang]);
}

function setMeta(name, content) {
  if (!content) return;
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setMetaProperty(property, content) {
  if (!content) return;
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}
