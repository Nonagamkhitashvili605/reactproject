import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Card from "./components/Card.js";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import MainPage from "./views/MainPage.jsx";
import Details from "./views/Details.jsx";
import Contact from "./views/Contact.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>

  <BrowserRouter>
    <App />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/:id" element={<Details />} />
    </Routes>
  </BrowserRouter>
  // </StrictMode>
);
