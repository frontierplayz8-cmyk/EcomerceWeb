import { Canvas } from "@react-three/fiber";
import Navbar from "./Navbar";
import { Suspense, useEffect, useRef } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import Shoe from "./Shoe";
import ImageSlider from "./imageslider";
import CanvasLoader from "./CanvasLoader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { Link } from "react-router-dom";
import Footer from "./footer";
import Login from "./login";
import Register from "./register";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Homepage = () => {
  const shoeRef = useRef(null);

  useEffect(() => {
    const heroTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top center",
        end: "bottom top",
        scrub: 1,
      },
    });
    gsap.to(".hero-right",{
      x:-900,
      y:900,
      scrollTrigger: {
        trigger: ".hero",
        scrub:1.5,
        start: "top top",
        end: "center center"
      }
    })
    const split = new SplitText(".hero2-wrapper p", { type: "chars" });

    const detailTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero2-wrapper",
        start: "top 80%",
      },
    });

    detailTimeline
      .from(
        split.chars,
        {
          y: 100,
          opacity: 0,
          stagger: { amount: 0.4, from: "random" },
          ease: "power3.out",
        },
        "<"
      );
    return () => {
      heroTimeline.kill();
      detailTimeline.kill();
      split.revert();
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  useEffect(() => {
    const poll = setInterval(() => {
      if (!shoeRef.current) return;

      const tlanime = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".hero",
            scrub: 1.5,
            start: "top center",
            end: "bottom center",
          },
        })
        .to(shoeRef.current.rotation, {
          y: "-=" + Math.PI * 2,
          duration: 3,
          ease: "none",
        });

      clearInterval(poll);
    }, 60);

    return () => clearInterval(poll);
  }, []);

  return (
    <>
      <Navbar />
      <main className="homepage-main">
        <div className="hero">
          <div className="hero-left">
            <div className="hero-wrapper">
              <h1>The Future of Footwear</h1>
              <p>Style That Speaks. Comfort That Performs.</p>
              <div className="homepage-button">
            <Link to="/products">
              <button className="button">Shop Now</button>
            </Link>
            </div>
            </div>
          </div>
          <div className="hero-right">
            <Canvas
              className="hero-canvas"
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                zIndex: 1000,
              }}
              camera={{ position: [-10, 50, 48], fov: 45 }}
              dpr={[1, 1.5]}
              gl={{ antialias: true, powerPreference: "high-performance" }}
            >
              <Suspense fallback={<CanvasLoader />}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[10, 20, 10]} intensity={0.5} />
                <Shoe ref={shoeRef} />
                <Environment preset="studio" />
              </Suspense>
            </Canvas>
          </div>
        </div>
        <div className="hero2">
          <div className="hero2-wrapper">
            <h1>Ultra-Comfort Running Shoe</h1>
            <p>
              Experience unmatched comfort and style with our latest running shoe.
              Featuring a lightweight breathable mesh upper, flexible sole, and modern
              design, it&apos;s perfect for daily runs or casual wear. Step into performance
              and elevate your every stride.
            </p>
          </div>
        </div>
        <div className="hero3">
          <ImageSlider />
         </div>
         <Footer />
      </main>
    </>
  );
};

export default Homepage;
