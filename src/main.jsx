import { createRoot } from "react-dom/client";
import "./index.css";
import Ecommerce from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";
import { CartProvider } from "./components/Cartcontext.jsx";
import { MenuProvider } from "./components/menu.jsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
createRoot(document.getElementById("root")).render(
  <ClerkProvider frontendApi={PUBLISHABLE_KEY} navigate={(to) => window.history.pushState(null, '', to)} appearance={{ baseTheme: dark, }} >
    <BrowserRouter basename="/EcomerceWeb">
      <MenuProvider>
        <CartProvider>
          <Ecommerce />
        </CartProvider>
      </MenuProvider>
    </BrowserRouter>
  </ClerkProvider>
);
