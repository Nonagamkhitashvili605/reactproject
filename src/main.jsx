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
import NotFound from "./views/NotFound.jsx";
import Layout from "./views/Layout.jsx";
import Admin from "./views/Admin.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>

  <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<Layout />} />
      {/* index */}
      <Route index element={<MainPage />} />
      {/* regular */}
      <Route path="/contact" element={<Contact />} />
      {/* dynamic */}
      <Route path="/:id" element={<Details />} />
      {/* wildcard */}
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  // </StrictMode>
);
