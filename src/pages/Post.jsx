import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Section from "../components/Section";
import { parseFrontmatter } from "../utils/md";
import { useSEO } from "../hooks/useSEO";

const posts = import.meta.glob("../content/posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true
});


export default function Post() {
  const { slug } = useParams();
  const { i18n } = useTranslation();
  const lang = i18n.language;

  // 1️⃣ Resolve entry FIRST
  const entry = Object.entries(posts)
    .filter(([path]) => path.endsWith(`.${lang}.md`))
    .map(([_, raw]) => parseFrontmatter(raw))
    .find((p) => p.meta?.slug === slug);

  // 2️⃣ Handle missing post
  if (!entry) {
    useSEO({
      title: "Not found",
      description: "The requested blog post could not be found.",
      path: `/blog/${slug}`
    });

    return (
      <Section title="Not found">
        <p className="text-sm text-asenda-muted">
          Post not found.
        </p>
      </Section>
    );
  }

  // 3️⃣ SEO AFTER entry exists
  useSEO({
    title: entry.meta.title,
    description:
      entry.meta.description || entry.body.slice(0, 140),
    path: `/blog/${entry.meta.slug}`
  });

  return (
    <Section title={entry.meta.title}>
      <div className="max-w-2xl prose prose-sm">
        {entry.body.split("\n\n").map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </Section>
  );
}
