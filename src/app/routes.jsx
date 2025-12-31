import Layout from "./Layout";

import Home from "../pages/Home";
import Work from "../pages/Work";
import Services from "../pages/Services";
import Blog from "../pages/Blog";
import Post from "../pages/Post";
import About from "../pages/About";
import Contact from "../pages/Contact";
import LegalImprint from "../pages/LegalImprint";
import LegalPrivacy from "../pages/LegalPrivacy";
import NotFound from "../pages/NotFound";

export const routes = [
  {
    path: "/",
    element: <Layout />,   // ✅ Router context starts here
    children: [
      { index: true, element: <Home /> },
      { path: "work", element: <Work /> },
      { path: "services", element: <Services /> },
      { path: "blog", element: <Blog /> },
      { path: "blog/:slug", element: <Post /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "imprint", element: <LegalImprint /> },
      { path: "privacy", element: <LegalPrivacy /> },
      { path: "*", element: <NotFound /> }
    ]
  }
];
