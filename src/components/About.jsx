import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import "../components/about.css";
import Earth3d from "./Earth3d";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

gsap.registerPlugin(ScrollTrigger, SplitText);

const About = () => {
  useEffect(() => {
    const split = new SplitText(".abouthero2 p", { type: "words" });

    gsap.set(split.words, {
      willChange: "transform, opacity",
      force3D: true,
      overflow: "hidden",
    });

    const effecttl = gsap.timeline({
      scrollTrigger: {
        trigger: ".abouthero2",
        start: "top center",
        refreshPriority: -1,
      },
    });

    effecttl.from(
      split.words,
      {
        y: 30,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: {
          amount: 0.4,
          from: "start",
        },
        force3D: true,
      },
      0
    );

    console.log("Animation loaded");

    return () => {
      if (split) {
        split.revert();
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <>
      <main>
        <Navbar />
        <div className="hero">
          <div className="about-hero-left">
            <Earth3d />
          </div>
          <div className="about-hero-right">
            <div className="herotext">
              <h2>
                <span className="highlight">Mercer</span> - Your Gateway to
                Sustainable Shopping!
              </h2>
              <p className="subheading">
                At Mercer, we merge global inspiration with eco-conscious
                innovation to shape the footwear of tomorrow.
              </p>
            </div>
          </div>
        </div>
        <div className="abouthero2">
          <h1>Our Story</h1>
          <p>
            Mercer began with a simple frustration—shoes looked good, but didn’t
            feel good. Stylish designs lacked comfort, and comfortable shoes
            lacked personality. So we set out to build what we couldn’t find
            anywhere else: footwear that blends innovation, everyday
            performance, and clean design. It started in a small workspace with
            sketches, fabric scraps, and endless prototypes. We tested, failed,
            redesigned, and tested again. Every time we asked the same question:
            How can this be better? Today, that question drives everything we
            make. From dual-density midsoles to premium uppers and modern
            silhouettes, Mercer is built for people who move—with intention,
            ambition, and style. We don’t chase trends. We craft essentials that
            evolve with you. This isn’t just a brand. It’s a mindset. Move
            better. Live better.
          </p>
        </div>
        <div className="about-reputation-section">
          <h2 className="reputation-title">Mercer's Global Reputation</h2>
          <p className="reputation-subtitle">
            Trusted by millions worldwide for quality, innovation, and
            sustainability
          </p>
          <div className="reputation-stats">
            <Swiper
              spaceBetween={20}
              mousewheel={true}
              keyboard={true}
              thumbs={true}
              loop={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
                1280: { slidesPerView: 6 },
                1536: { slidesPerView: 6 },
                1920: { slidesPerView: 6 },
              }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className="stat-card">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Countries Served</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="stat-card">
                  <div className="stat-number">2M+</div>
                  <div className="stat-label">Happy Customers</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="stat-card">
                  <div className="stat-number">500K+</div>
                  <div className="stat-label">Products Sold</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="stat-card">
                  <div className="stat-number">4.8★</div>
                  <div className="stat-label">Average Rating</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="stat-card">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Years of Excellence</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="stat-card">
                  <div className="stat-number">98%</div>
                  <div className="stat-label">Customer Satisfaction</div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="reputation-highlights">
            <div className="highlight-card">
              <h3>🌍 Global Presence</h3>
              <p>
                From New York to Tokyo, Mercer footwear is trusted by customers
                in over 50 countries, bringing sustainable style to every corner
                of the world.
              </p>
            </div>
            <div className="highlight-card">
              <h3>🏆 Award Winning</h3>
              <p>
                Recognized by industry leaders for innovation in sustainable
                footwear design and commitment to environmental responsibility.
              </p>
            </div>
            <div className="highlight-card">
              <h3>💚 Eco-Certified</h3>
              <p>
                Certified by leading environmental organizations for our
                sustainable manufacturing processes and carbon-neutral shipping
                initiatives.
              </p>
            </div>
          </div>
        </div>

        <div className="about-values-section">
          <div className="values-container">
            <h2 className="values-title">Why Choose Mercer?</h2>
            <p className="values-subtitle">
              We're not just making shoes—we're crafting a movement toward
              sustainable, stylish, and comfortable footwear.
            </p>

            <div className="values-grid">
              <Swiper
                spaceBetween={10}
                thumbs={true}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                breakpoints={{
                  480: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  950: { slidesPerView: 3 },
                  1024: { slidesPerView: 4 },
                  1280: { slidesPerView: 5 },
                  1536: { slidesPerView: 6 },
                  1920: { slidesPerView: 6 },
                }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <div className="value-item">
                    <div className="value-icon">✨</div>
                    <h3>Innovation First</h3>
                    <p>
                      Cutting-edge technology meets timeless design. Every pair
                      is engineered for performance and style.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="value-item">
                    <div className="value-icon">🌱</div>
                    <h3>Sustainability</h3>
                    <p>
                      Eco-friendly materials and carbon-neutral processes. We're
                      committed to protecting our planet.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="value-item">
                    <div className="value-icon">👟</div>
                    <h3>Comfort Redefined</h3>
                    <p>
                      Dual-density midsoles and premium materials ensure all-day
                      comfort without compromising style.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="value-item">
                    <div className="value-icon">🎨</div>
                    <h3>Timeless Design</h3>
                    <p>
                      We don't chase trends. Our designs are built to last, both
                      in quality and aesthetic appeal.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="value-item">
                    <div className="value-icon">🌍</div>
                    <h3>Global Community</h3>
                    <p>
                      Join millions of customers worldwide who trust Mercer for
                      their everyday adventures.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="value-item">
                    <div className="value-icon">💎</div>
                    <h3>Premium Quality</h3>
                    <p>
                      Rigorous testing and quality control ensure every pair
                      meets our high standards of excellence.
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="values-cta">
              <Link to="/products">
                <button className="values-btn">Explore Our Collection</button>
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
};

export default About;
