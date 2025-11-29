import { createRoot } from "react-dom/client";
import "./index.css";
import Ecommerce from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";
import { CartProvider } from "./components/Cartcontext.jsx";
import { MenuProvider } from "./components/menu.jsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
console.log("CLERK KEY =", PUBLISHABLE_KEY);
createRoot(document.getElementById("root")).render(
  <ClerkProvider
    publishableKey={PUBLISHABLE_KEY}
    appearance={{
      baseTheme: dark,
    }}
  >
    <BrowserRouter>
      <MenuProvider>
        <CartProvider>
          <Ecommerce />
        </CartProvider>
      </MenuProvider>
    </BrowserRouter>
  </ClerkProvider>
);
