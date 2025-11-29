import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import { RedirectToSignIn, SignIn, SignUp } from "@clerk/clerk-react";
import SSOCallback from "./components/SSOcallback";
import Cart from "./components/cart";
import Menu from "./components/menu";

const Homepage = lazy(() => import("./components/homepage"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Products = lazy(() => import("./components/Products"));
const Productpage = lazy(() => import("./components/productpage"));

const Ecommerce = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<Menu />} />
        <Route element={<Cart />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/productpage/:id" element={<Productpage />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-in/*" element={<SignIn routing="path" />} />
          <Route path="/sign-up/*" element={<SignUp routing="path" />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/sso-callback" element={<SSOCallback />} />
      </Routes>
    </Suspense>
  );
};

export default Ecommerce;
