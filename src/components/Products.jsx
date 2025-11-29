import React from 'react';
import Navbar from './Navbar';
import Productcard from './productcard';
import "../index.css";
import image1 from "../assets/image1.webp";
import image2 from "../assets/image2.webp";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.webp";
import image5 from "../assets/image5.jpeg";
import image6 from "../assets/image6.jpg";
import Footer from './footer';

const Products = () => {
  return (
    <>
      <Navbar />
      <div className="product-main w-screen flex flex-col justify-center items-center gap-10 p-10">
        <h1 className='product-h1'>
          Our Cetalogue
        </h1>

        <div className="product-wrapper">
          <Productcard id="1" img={image1} price="$120" productname="AeroFlex MeshRunner V1" disc="Lightweight, breathable mesh sneaker with all-day comfort."/>
          <Productcard id="2" img={image2} price="$140" productname="StridePulse 2" disc="Dual-density foam absorbs impact for smoother, safer runs."/>
          <Productcard id="3" img={image3} price="$120" productname="AllCourt Prime" disc="Minimalist leather design makes the Prime a go-to anywhere you go."/>
          <Productcard id="4" img={image4} price="$260" productname="Altitude GTX" disc="Waterproof lining and rugged lugs keep you secure through mud and scree."/>
          <Productcard id="5" img={image5} price="$180" productname="CityFlow Neo" disc="Effortless entry and soft cushioning let you move through meetings in comfort."/>
          <Productcard id="6" img={image6} price="$200" productname="TrailBlaze Pro" disc="Durable construction and aggressive tread for conquering tough trails."/>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
