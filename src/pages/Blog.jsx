// src/pages/Blog.jsx
import React from "react";
import { Link } from "react-router-dom";
import Section from "../components/Section";
import { useTranslation } from "react-i18next";
import { parseFrontmatter } from "../utils/md";
import { useSEO } from "../hooks/useSEO";

const posts = import.meta.glob("../content/posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true
});


export default function Blog() {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const list = Object.entries(posts)
    .filter(([path]) => path.endsWith(`.${lang}.md`))
    .map(([_, raw]) => parseFrontmatter(raw))
    .sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));
  useSEO({
    title: "Blog",
    description:
      "Insights on PWAs, SaaS development, UX, performance, and modern web architecture.",
    path: "/blog"
  });

  return (
    <Section title="Blog">
      <div className="space-y-4 max-w-2xl">
        {list.map(({ meta }) => (
          <Link
            key={meta.slug}
            to={`/blog/${meta.slug}`}
            className="card p-5 block hover:opacity-90 transition"
          >
            <div className="text-sm font-semibold">
              {meta.title}
            </div>
            <div className="mt-1 text-xs text-muted">
              {meta.date}
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
