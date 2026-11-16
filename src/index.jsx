import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./global.scss";

const base = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={base}>
    <App />
  </BrowserRouter>
);
