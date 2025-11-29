import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const handleAddToCart = (product, quantity, selectedSize) => {
    if (!selectedSize) return alert("Please select a size");

    setItems((prev) => {
      const existing = prev.find(
        (item) =>
          item.id === product.id &&
          item.selectedSize === selectedSize
      );

      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.selectedSize === selectedSize
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity,
          selectedSize,
        },
      ];
    });

    setCartOpen(true);
  };

  const handleUpdateQty = (id, size, newQty) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === id && item.selectedSize === size
            ? { ...item, quantity: Math.max(1, newQty) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveItem = (id, size) => {
    setItems((prev) =>
      prev.filter(
        (item) =>
          !(item.id === id && item.selectedSize === size)
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: items,
        cartOpen,
        setCartOpen,
        handleAddToCart,
        handleUpdateQty,
        handleRemoveItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}