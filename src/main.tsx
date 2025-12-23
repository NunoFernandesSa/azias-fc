// ---------- React ----------
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// ---------- Styles ----------
import "@/styles/index.css";

// ---------- components ----------
import App from "./app/App.tsx";

// ---------- Routes ----------
import Home from "./pages/Home.tsx";
import Club from "./pages/Club.tsx";
import Team from "./pages/Team.tsx";
import CalendarAndResults from "./pages/CalendarAndResults.tsx";
import Contact from "./pages/Contact.tsx";
import PartnersAndSponsors from "./pages/PartnersAndSponsors.tsx";
import Gallery from "./pages/Gallery.tsx";
import Store from "./pages/Store.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // layout global
    children: [
      { path: "/", element: <Home /> },
      { path: "/clube", element: <Club /> },
      { path: "/equipa", element: <Team /> },
      { path: "/calendário", element: <CalendarAndResults /> },
      { path: "/loja", element: <Store /> },
      { path: "/galeria", element: <Gallery /> },
      { path: "/parceiros", element: <PartnersAndSponsors /> },
      { path: "/contacto", element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
