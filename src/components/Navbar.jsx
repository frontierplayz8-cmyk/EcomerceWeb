import logo from "../assets/logo.png";
import { Form, Link } from "react-router-dom";
import { Menu, ShoppingCart } from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import Cart from "./cart";
import { useCart } from "./Cartcontext";
import { useMenu } from "./menu";


const Navbar = () => {
  const {
    cartOpen,
    setCartOpen,
    cartItems,
    handleAddToCart,
    handleUpdateQty,
    handleRemoveItem
  } = useCart();
  const { toggleMenu } = useMenu();
  return (
  <div className="nav flex items-center justify-between px-6 h-20 shadow-md bg-white">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" className="h-14" />
        </Link>
      </div>

      <div className="menu flex gap-8 text-lg">
        <Link className="menu-tag" to="/">Home</Link>
        <Link className="menu-tag" to="/products">Products</Link>
        <Link className="menu-tag" to="/about">About</Link>
        <Link className="menu-tag" to="/contact">Contact</Link>
      </div>
      <div className="menu-bar">
        <Menu size={42} color="black" strokeWidth={2.5} onClick={() => toggleMenu()}/>
      </div>
    <div className="nav-right flex items-center gap-5">
        <ShoppingCart
          onClick={() => setCartOpen(true)}
          color="#111"
          size={32} />

        <SignedIn>
          <UserButton appearance={{ baseTheme: "dark" }} />
        </SignedIn>

        <SignedOut>
          <Link to="/sign-in" className="login2">
            Login
          </Link>
        </SignedOut>
      </div>
      <Cart
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onAdd={handleAddToCart}
        onUpdateQty={handleUpdateQty}
        onRemove={handleRemoveItem} />
    </div>
  );
};

export default Navbar;
