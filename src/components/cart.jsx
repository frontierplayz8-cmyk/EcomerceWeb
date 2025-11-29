import { Trash, X } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import "../components/cart.css";

const Cart = ({ open, onClose, items = [], onUpdateQty, onRemove }) => {
  const drawerRef = useRef(null);
  const overlayRef = useRef(null);
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // GSAP open/close animation
  useEffect(() => {
    if (open) {
      gsap.to(overlayRef.current, {
        opacity: 1,
        pointerEvents: "auto",
        duration: 0.3,
      });

      gsap.to(drawerRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power3.out",
      });
    } else {
      gsap.to(overlayRef.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.3,
      });

      gsap.to(drawerRef.current, {
        x: 400,
        opacity: 0,
        duration: 0.3,
        ease: "power3.in",
      });
    }
  }, [open]);

  return (
    <>
      <div ref={overlayRef} className="cart-overlay" onClick={onClose}></div>

      <div ref={drawerRef} className="cart-drawer">
        <div className="upper-cart">
          <h1 className="upper-h1">Your Cart</h1>
          <X className="upper-h2" onClick={onClose} />
        </div>

        <div className="middle-cart">
          {items.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            items.map((item, idx) => (
              <div key={idx} className="cart-item">
                <div className="left-cart-item">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="cart-item-image"
                  />

                  <div>
                    <h4>
                      {item.name}{" "}
                      {item.selectedSize && `(Size ${item.selectedSize})`}
                    </h4>
                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>

                <div className="right-cart-item">
                  <Trash
                    className="trash-icon"
                    onClick={() => onRemove(item.id, item.selectedSize)}
                  />

                  <div className="right-content">
                    <button
                      className="quantity-button"
                      onClick={() =>
                        onUpdateQty(
                          item.id,
                          item.selectedSize,
                          item.quantity + 1
                        )
                      }
                    >
                      +
                    </button>

                    <span className="quantity-display">
                      {item.quantity}
                    </span>

                    <button
                      className="quantity-button"
                      onClick={() =>
                        onUpdateQty(
                          item.id,
                          item.selectedSize,
                          item.quantity - 1
                        )
                      }
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="lower-cart">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button>Continue to Checkout</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;