// src/pages/Post.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Section from "../components/Section";
import { parseFrontmatter } from "../utils/md";
import { useSEO } from "../hooks/useSEO";

const posts = import.meta.glob("../content/posts/*.md", {
  query: "?raw",
  eager: true
});


export default function Post() {
  const { slug } = useParams();
  const { i18n } = useTranslation();
  const lang = i18n.language;

  useSEO({
    title: entry.meta.title,
    description:
      entry.meta.description || entry.body.slice(0, 140),
    path: `/blog/${entry.meta.slug}`
  });


  const entry = Object.entries(posts)
    // filter by language first
    .filter(([path]) => path.endsWith(`.${lang}.md`))
    .map(([_, raw]) => parseFrontmatter(raw))
    // safe slug match
    .find((p) => p.meta?.slug === slug);

  if (!entry) {
    return (
      <Section title="Not found">
        <p className="text-sm text-asenda-muted">
          Post not found.
        </p>
      </Section>
    );
  }

  return (
    <Section title={entry.meta.title}>
      <div className="max-w-2xl prose prose-sm">
        {entry.body
          .split("\n\n")
          .map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
      </div>
    </Section>
  );
}
