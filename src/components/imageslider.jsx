import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./imageSlider.css";
import image1 from "../assets/image1.webp";
import image2 from "../assets/image2.webp";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.webp";
import image5 from "../assets/image5.jpeg";

const showcaseSlides = [
  {
    id: 1,
    title: "AeroFlex Runner V1",
    subtitle: "Breathable Comfort • Responsive Cushioning • All-Terrain Grip",
    description: "Experience lightweight comfort with AeroFlex MeshRunner V1 — a breathable mesh sneaker designed for all-day cushioning, responsive support, and strong traction on every stride.",
    color: "#FEEFEA",
    image: image1,
  },
  {
    id: 2,
    title: "Stride Pulse 2",
    subtitle: "Stability • Road Ready",
    description:
      "Dual-density foam absorbs impact so you can push tempo runs without punishing your knees.",
    color: "#E7F3FF",
    image: image2,
  },
  {
    id: 3,
    title: "AllCourt Prime",
    subtitle: "Court • Everyday Lifestyle",
    description:
      "Premium leather overlays and a minimalist silhouette make the Prime a go-to on or off the court.",
    color: "#F1F0FF",
    image: image3,
  },
  {
    id: 4,
    title: "Altitude GTX",
    subtitle: "Trail • Weatherproof",
    description:
      "Rugged lugs and a breathable waterproof liner keep you locked in through puddles, mud, and scree.",
    color: "#EEF7F2",
    image: image4,
  },
  {
    id: 5,
    title: "CityFlow Neo",
    subtitle: "Commuter • Slip On",
    description:
      "Effortless on/off and responsive cushioning so you can bounce between meetings in comfort.",
    color: "#FFF6E5",
    image: image5,
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slides = useMemo(() => showcaseSlides, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const activeSlide = slides[currentIndex];

  return (
    <section
      className="slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="slider-copy">
        <p className="slider-eyebrow">{activeSlide.subtitle}</p>
        <h2 className="title">{activeSlide.title}</h2>
        <p className="slider-description">{activeSlide.description}</p>

        <div className="slider-controls">
          <Link className="slider-cta" to="/products">
            Explore collection
          </Link>
          <div className="slider-dots">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                className={`slider-dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              >
                <span />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="slider-visual">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.id}
            className="slider-image"
            style={{ backgroundColor: activeSlide.color }}
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.05, y: -30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img src={activeSlide.image} alt={activeSlide.title} loading="lazy" />
          </motion.div>
        </AnimatePresence>

        <div className="slider-thumbs">
          {slides.map((slide, index) => (
            <motion.button
              key={slide.id}
              className={`slider-thumb ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.02 }}
            >
              <img src={slide.image} alt={slide.title} loading="lazy" />
              <span>{slide.title}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
