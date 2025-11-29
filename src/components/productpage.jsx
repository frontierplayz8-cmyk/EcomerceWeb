import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import image1 from "../assets/image1.webp";
import image2 from "../assets/image2.webp";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.webp";
import image5 from "../assets/image5.jpeg";
import image6 from "../assets/image6.jpg";
import {
  ShoppingCart,
  Plus,
  Minus,
  Heart,
  Share2,
  Star,
  Truck,
  Shield,
  RotateCcw,
  X,
} from "lucide-react";
import "../index.css";
import "./productpage.css";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "./Cartcontext.jsx";

export function Productpage() {
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  let { handleAddToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "AeroFlex MeshRunner V1",
      price: 120,
      originalPrice: 150,
      rating: 4.5,
      reviews: 128,
      description:
        "Lightweight, breathable mesh sneaker with all-day comfort. Engineered with advanced aeromesh technology for superior ventilation and flexibility.",
      longDescription:
        "Experience the perfect blend of style and performance with the AeroFlex MeshRunner V1. Our innovative aeromesh upper provides exceptional breathability while maintaining structural integrity. The lightweight cushioning system adapts to your foot's natural movement, ensuring comfort throughout your day.",
      features: [
        "Breathable aeromesh upper",
        "Lightweight cushioning system",
        "Flexible sole design",
        "All-day comfort support",
        "Durable construction",
        "Eco-friendly materials",
      ],
      sizes: [7, 8, 9, 10, 11, 12],
      images: [image1, image1, image1, image1],
      inStock: true,
      stockCount: 15,
    },
    {
      id: 2,
      name: "StridePlus 2",
      price: 140,
      originalPrice: 180,
      rating: 4.7,
      reviews: 214,
      description:
        "Next-generation performance sneaker designed for maximum comfort, stability, and stride efficiency.",
      longDescription:
        "StridePlus 2 elevates your daily running experience with a re-engineered foam midsole, adaptive knit upper, and precision-balanced outsole. Designed for both casual runners and dedicated athletes, this model optimizes energy return while maintaining exceptional comfort. Whether you're training, commuting, or hitting the track, StridePlus 2 delivers unmatched support at every step.",
      features: [
        "Adaptive knit upper for superior comfort",
        "Re-engineered dual-density foam for better energy return",
        "Enhanced heel stability cage",
        "Shock-absorbing midsole for long-distance comfort",
        "All-terrain traction outsole",
        "Moisture-wicking interior lining",
      ],
      sizes: [7, 8, 9, 10, 11, 12],
      images: [image2, image2, image2, image2],
      inStock: true,
      stockCount: 22,
    },
    {
      id: 3,
      name: "AllCourt Prime",
      price: 130,
      originalPrice: 165,
      rating: 4.6,
      reviews: 176,
      description:
        "Premium court sneaker built for agility, stability, and all-surface performance.",
      longDescription:
        "AllCourt Prime combines a reinforced leather upper with adaptive cushioning to deliver a balanced blend of durability and comfort. Designed for multi-surface play, its multidirectional traction pattern ensures rapid pivoting, smooth transitions, and maximum court control. Whether you're playing indoors or outdoors, AllCourt Prime offers the perfect mix of resilience and responsiveness.",
      features: [
        "Reinforced premium leather upper",
        "Adaptive cushioning for responsive performance",
        "Enhanced ankle stability padding",
        "All-surface grip outsole for multi-court traction",
        "Moisture-wicking soft inner lining",
        "Impact-resistant heel support structure",
      ],
      sizes: [7, 8, 9, 10, 11, 12],
      images: [image3, image3, image3, image3],
      inStock: true,
      stockCount: 18,
    },
    {
      id: 4,
      name: "Altitude GTX",
      price: 155,
      originalPrice: 190,
      rating: 4.8,
      reviews: 263,
      description:
        "All-weather waterproof trail shoe engineered with GTX protection for rugged outdoor performance.",
      longDescription:
        "Altitude GTX is built for hikers, explorers, and outdoor athletes who demand absolute reliability in any climate. Featuring a durable waterproof GTX membrane, reinforced toe protection, and a high-traction outsole, this shoe handles mud, rain, snow, and steep terrain with ease. Its dual-density cushioning delivers long-distance comfort while maintaining stability on uneven ground, making it the ultimate choice for all-season adventures.",
      features: [
        "Fully waterproof GTX membrane",
        "Reinforced toe and heel protection",
        "High-traction all-terrain rubber outsole",
        "Dual-density cushioning for long hikes",
        "Breathable moisture-control interior",
        "Shock-dispersing midsole structure",
      ],
      sizes: [7, 8, 9, 10, 11, 12],
      images: [image4, image4, image4, image4],
      inStock: true,
      stockCount: 12,
    },
    {
      id: 5,
      name: "CityFlow",
      price: 125,
      originalPrice: 160,
      rating: 4.6,
      reviews: 189,
      description:
        "Lightweight urban sneaker designed for everyday movement, flexibility, and all-day city comfort.",
      longDescription:
        "CityFlow blends minimalist street styling with advanced comfort engineering. Built for people who move constantly, its flexible sole design adapts to sidewalks, stairs, and daily transitions with ease. The breathable knit upper keeps your feet cool during long commutes, while the cushioned midsole absorbs impact to keep you comfortable from morning to night.",
      features: [
        "Breathable knit upper for airflow",
        "Flexible sole for natural movement",
        "Shock-absorbing cushioned midsole",
        "Lightweight urban comfort design",
        "Slip-on friendly structure",
        "Durable everyday outsole",
      ],
      sizes: [7, 8, 9, 10, 11, 12],
      images: [image5, image5, image5, image5],
      inStock: true,
      stockCount: 20,
    },
    {
      id: 6,
      name: "TrailBlaze Pro",
      price: 170,
      originalPrice: 210,
      rating: 4.9,
      reviews: 298,
      description:
        "High-performance trail runner built for extreme terrain, superior grip, and long-distance endurance.",
      longDescription:
        "TrailBlaze Pro is engineered for runners who push beyond the beaten path. Featuring an aggressive multi-directional grip outsole, reinforced toe guard, and adaptive cushioning, this shoe is built to conquer steep climbs, rocky descents, mud, and unpredictable outdoor environments. Its breathable yet durable upper keeps you protected without sacrificing airflow, making TrailBlaze Pro the ultimate choice for serious trail athletes.",
      features: [
        "Aggressive multi-directional trail grip outsole",
        "Reinforced toe guard for rocky terrain",
        "Adaptive cushioning for long-distance comfort",
        "Breathable abrasion-resistant upper",
        "Stability-support heel structure",
        "Water-resistant exterior coating",
      ],
      sizes: [7, 8, 9, 10, 11, 12],
      images: [image6, image6, image6, image6],
      inStock: true,
      stockCount: 14,
    },
  ];
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="product-page">
          <h2>Product Not Found</h2>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="product-page">
        <div className="breadcrumb">
          <span>Home</span>
          <span>/</span>
          <span>Products</span>
          <span>/</span>
          <span>{product.name}</span>
        </div>

        <div className="product-container">
          <div className="product-images-section">
            <div className="main-image-container">
              <div className="image-badge">New</div>
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="main-product-image"
              />
              <div className="image-actions">
                <button className="icon-btn" title="Add to Wishlist">
                  <Heart size={20} />
                </button>
                <button className="icon-btn" title="Share">
                  <Share2 size={20} />
                </button>
              </div>
            </div>

            <div className="thumbnail-gallery">
              {product.images.map((img, index) => (
                <div
                  key={index}
                  className={`thumbnail-wrapper ${
                    selectedImage === index ? "active" : ""
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${index + 1}`}
                    className="thumbnail-image"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="product-info-section">
            <div className="product-header">
              <div className="product-brand">AeroFlex</div>
              <h1 className="product-title">{product.name}</h1>
              <div className="product-rating">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill={i < Math.floor(product.rating) ? "#f97316" : "none"}
                      color={
                        i < Math.floor(product.rating) ? "#f97316" : "#666"
                      }
                    />
                  ))}
                </div>
                <span className="rating-text">{product.rating}</span>
                <span className="reviews-count">
                  ({product.reviews} reviews)
                </span>
              </div>
            </div>

            <div className="product-pricing">
              <div className="current-price">${product.price}</div>
              <div className="original-price">${product.originalPrice}</div>
              <div className="discount-badge">
                Save ${product.originalPrice - product.price}
              </div>
            </div>

            <div className="stock-status">
              {product.inStock ? (
                <span className="in-stock">
                  ✓ In Stock ({product.stockCount} available)
                </span>
              ) : (
                <span className="out-of-stock">Out of Stock</span>
              )}
            </div>

            <div className="product-description">
              <p>{product.description}</p>
            </div>

            <div className="selection-group">
              <div className="selection-label">
                <span>Size</span>
                <a href="#" className="size-guide">
                  Size Guide
                </a>
              </div>
              <div className="size-grid">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`size-option ${
                      selectedSize === size ? "selected" : ""
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="selection-group">
              <div className="selection-label">
                <span>Quantity</span>
              </div>
              <div className="quantity-selector">
                <button
                  className="qty-button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus size={18} />
                </button>
                <input
                  type="number"
                  value={quantity}
                  readOnly
                  className="qty-input"
                />
                <button
                  className="qty-button"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>
            <ToastContainer
              position="top-right"
              autoClose={4000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={true}
              rtl={false}
              draggable
              pauseOnHover
              theme="dark"
            />

            <div className="action-buttons-group">
              <button
                onClick={() => {
                  handleAddToCart(product, quantity, selectedSize);
                  toast.success(`${product.name} added to cart!`);
                }}
                className="primary-btn add-cart-btn"
              >
                <ShoppingCart /> Add to Cart
              </button>
              <button className="secondary-btn buy-now-btn">Buy Now</button>
            </div>

            <div className="features-section">
              <h3>Key Features</h3>
              <div className="features-grid">
                {product.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <div className="feature-icon">✓</div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="trust-badges">
              <div className="trust-item">
                <div className="trust-icon">
                  <Truck size={24} />
                </div>
                <div className="trust-content">
                  <h4>Free Shipping</h4>
                  <p>On orders over $100</p>
                </div>
              </div>
              <div className="trust-item">
                <div className="trust-icon">
                  <RotateCcw size={24} />
                </div>
                <div className="trust-content">
                  <h4>30-Day Returns</h4>
                  <p>Hassle-free returns</p>
                </div>
              </div>
              <div className="trust-item">
                <div className="trust-icon">
                  <Shield size={24} />
                </div>
                <div className="trust-content">
                  <h4>Secure Payment</h4>
                  <p>100% secure checkout</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product-tabs-section">
          <div className="tabs-container">
            <div className="tabs-header">
              <button className="tab-btn active">Description</button>
              <button className="tab-btn">Specifications</button>
              <button className="tab-btn">Reviews</button>
              <button className="tab-btn">Shipping</button>
            </div>
            <div className="tabs-content">
              <div className="tab-panel active">
                <h3>Product Description</h3>
                <p>{product.longDescription}</p>
                <h4>Why Choose AeroFlex MeshRunner V1?</h4>
                <ul>
                  <li>
                    Advanced aeromesh technology for maximum breathability
                  </li>
                  <li>
                    Lightweight design reduces fatigue during extended wear
                  </li>
                  <li>Flexible sole adapts to your natural foot movement</li>
                  <li>Durable construction ensures long-lasting performance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Productpage;
