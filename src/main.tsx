// ---------- React ----------
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// ---------- Styles ----------
import "@/styles/index.css";

// ---------- components ----------
import App from "./App.tsx";

// ---------- Routes ----------
import {
  Home,
  Team,
  CalendarAndResults,
  Contact,
  PartnersAndSponsors,
  Gallery,
  Store,
} from "@/pages/index.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // layout global
    children: [
      { path: "/", element: <Home /> },
      { path: "/equipa", element: <Team /> },
      { path: "/galeria", element: <Gallery /> },
      { path: "/calendario", element: <CalendarAndResults /> },
      { path: "/patrocinadores", element: <PartnersAndSponsors /> },
      { path: "/contacto", element: <Contact /> },
      { path: "/loja", element: <Store /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
