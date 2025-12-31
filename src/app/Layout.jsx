import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main
        key={location.pathname}
        className="flex-1 page-enter"
      >
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

