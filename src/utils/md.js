// src/utils/md.js
export function parseFrontmatter(input) {
  // ✅ normalize input (string OR module)
  const md = typeof input === "string"
    ? input
    : input?.default;

  if (typeof md !== "string") {
    throw new Error("Invalid markdown input");
  }

  const match = md.match(/---([\s\S]*?)---/);
  const meta = {};

  if (match) {
    match[1]
      .split("\n")
      .map(line => line.trim())
      .filter(Boolean)
      .forEach(line => {
        const [key, ...rest] = line.split(":");
        meta[key.trim()] = rest.join(":").trim();
      });
  }

  const body = md.replace(/---([\s\S]*?)---/, "").trim();

  return { meta, body };
}
