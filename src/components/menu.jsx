import React, { createContext, useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Login from "./login";

const MenuContext = createContext(null);

export function useMenu() {
  return useContext(MenuContext);
}

export function MenuProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);
  const [lastActive, setLastActive] = useState(null);

  function openMenu(payload = null) {
    setData(payload);
    setLastActive(document.activeElement);
    setOpen(true);
  }

  function closeMenu() {
    setOpen(false);
    if (lastActive && typeof lastActive.focus === "function") {
      lastActive.focus();
    }
  }

  function toggleMenu(payload = null) {
    open ? closeMenu() : openMenu(payload);
  }

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") closeMenu();
      if (e.key === "Tab" && open) e.preventDefault();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <MenuContext.Provider
      value={{ open, data, openMenu, closeMenu, toggleMenu }}
    >
      {children}
      <Menu />
    </MenuContext.Provider>
  );
}

function Menu() {
  const { open, data, closeMenu } = useMenu();

  const overlayStyle = {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.4)",
    opacity: open ? 1 : 0,
    visibility: open ? "visible" : "hidden",
    transition: "opacity 200ms ease, visibility 200ms",
    zIndex: 1000,
  };

  const panelWidth = 420;
  const panelStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: panelWidth,
    background: "#111",
    transform: open ? "translateX(0)" : `translateX(-${panelWidth}px)`,
    transition: "transform 250ms cubic-bezier(.2,.9,.2,1)",
    zIndex: 100001,
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
  };

  return (
    <>
      <div style={overlayStyle} onClick={closeMenu} />
      <aside role="dialog" aria-hidden={!open} style={panelStyle}>
        <div className="menuhead" style={{ display: "flex", justifyContent: "space-between" }}>
          <strong style={{
            fontSize: 32,
          }}>Menu</strong>
          <button onClick={closeMenu}>✕</button>
        </div>

        <div style={{ overflow: "auto", flex: 1 }}>
          {data ? (
            <pre style={{ fontSize: 13 }}>{JSON.stringify(data, null, 2)}</pre>
          ) : (
            <p></p>
          )}

          <nav style={{ marginTop: 20 }}>
            <Link className="menu-side" to="/">
              Home
            </Link>
            <Link className="menu-side" to="/products">
              Products
            </Link>
            <Link className="menu-side" to="/about">
              About
            </Link>
            <Link className="menu-side" to="/contact">
              Contact
            </Link>
          </nav>
        </div>
        <div className="login-wrapper">
          <Login />
        </div>

        <button onClick={closeMenu} style={{ marginTop: 12, width: "100%" }}>
          Close
        </button>
      </aside>
    </>
  );
}

export default Menu;
