// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-4 py-20 text-center">
      <h1 className="text-3xl font-semibold">404</h1>
      <p className="mt-2 text-sm text-asenda-muted">
        The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="inline-block mt-6 px-6 py-3 rounded-full bg-asenda-orange text-white text-sm"
      >
        Back to home
      </Link>
    </div>
  );
}
