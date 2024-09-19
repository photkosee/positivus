import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import "@fontsource-variable/space-grotesk";
import Footer from "./components/sections/Footer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Footer />
  </StrictMode>
);
