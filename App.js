import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";
import Footer from "./components/Footer";

// React.createElement => Object => HTMLElement(render)

/*
 * Header
 *  - Logo
 *  - Nav Item
 * Body
 *  - Search
 *  - Resturant Container
 *     - ResturantCard
 * Footer
 *   - Copyright
 *   - Links
 *   - Address
 *   - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <span className="logo">🍔</span>
      </div>
      <div className="nav-items">
        <ul>
          <li>Swiggy Corporate</li>
          <li>Search</li>
          <li>Offers</li>
          <li>Help</li>
          <li>Sign In</li>
          <li>Carts</li>
        </ul>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="hero">
      <h3 className="heading">What's on your mind?</h3>
      <div className="dishes">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png" />
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/897bc750-6b57-4e7d-9365-87c1ab2c6d7e_Chinese2.png" />
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_burger.png" />
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png" />
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/17/58760e8e-324f-479e-88fa-31800120ea38_Rolls1.png" />
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/05a939eb-fd4e-4308-b989-d1c54f4421b3_northindian1.png" />
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png" />
      </div>
    </div>
  );
};

const ResturantCard = (props) => {
  console.log(props);
  return (
    <div className="res-card">
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/4f389302-1f17-40fa-883a-4d1c53f84b02_21001.JPG" />
      <h3>{props.resName}</h3>
      <p>{props.rating}</p>
      <p>{props.cuisine}</p>
      <p>{props.place}</p>
    </div>
  );
};

const MobileSection = () => {
  return (
    <div className="mobile-section">
      <h2>Get the Food King App now!</h2>
      <p>For best offers and discounts curated specially for you.</p>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <h2>Discover best restaurants. Swiggy it!</h2>
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" />
        <input placeholder="Search for Restaurants, items or more"></input>{" "}
      </div>
      <img
        id="right"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
      />
      <div className="varities">
        <div className="card1">
          <h1>FOOD DELIVERY</h1>
          <h3>FROM RESTURANTS</h3>
          <h4>UPTO 60% OFF</h4>
          <div className="arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M13 18l6 -6" />
              <path d="M13 6l6 6" />
            </svg>
          </div>
        </div>
        <div className="card2">
          <h1>INSTAMART</h1>
          <h3>INSTANT GROCERY</h3>
          <h4>UPTO 60% OFF</h4>
          <div className="arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M13 18l6 -6" />
              <path d="M13 6l6 6" />
            </svg>
          </div>
        </div>
        <div className="card3">
          <h1>DINEOUT</h1>
          <h3>EAT OUT & SAVE MORE</h3>
          <h4>UPTO 50% OFF</h4>
          <div className="arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M13 18l6 -6" />
              <path d="M13 6l6 6" />
            </svg>
          </div>
        </div>
      </div>
      <HeroSection />
      <div className="res-container">
        <h3 className="heading">Top restaurant chains in Pune</h3>
        <div className="res-cards">
          <ResturantCard
            resName="Pizza Hut"
            rating="⭐ 4.2 | 30-40 mins"
            cuisine="Italian"
            place="ShivajiNagar"
          />
          <ResturantCard
            resName="KFC"
            rating="⭐ 4.8 | 40-45 mins"
            cuisine="Southern"
            place="Wakad"
          />
          <ResturantCard
            resName="Behrouz Biryani"
            rating="⭐ 5.0 | 50-55 mins"
            cuisine="Indian"
            place="Thergaon"
          />
          <ResturantCard
            resName="Eatsome Rolls"
            rating="⭐ 4.0 | 30-35 mins"
            cuisine="Chinese"
            place="Bhumkar Chowk"
          />
        </div>
      </div>
      <div className="res-container">
        <h3 className="heading">
          Restaurants with online food delivery in Pune
        </h3>
        <div className="res-cards">
          <ResturantCard
            resName="Pizza Hut"
            rating="⭐ 4.2 | 30-40 mins"
            cuisine="Italian"
            place="ShivajiNagar"
          />
          <ResturantCard
            resName="KFC"
            rating="⭐ 4.8 | 40-45 mins"
            cuisine="Southern"
            place="Wakad"
          />
          <ResturantCard
            resName="Behrouz Biryani"
            rating="⭐ 5.0 | 50-55 mins"
            cuisine="Indian"
            place="Thergaon"
          />
          <ResturantCard
            resName="Eatsome Rolls"
            rating="⭐ 4.0 | 30-35 mins"
            cuisine="Chinese"
            place="Bhumkar Chowk"
          />
        </div>
      </div>
      <MobileSection />
      <div className="res-container">
        <h3 className="heading">Best Cuisines Near Me</h3>
        <div className="restaurant">
          <p>Chinese Restaurant Near Me</p>
          <p>South Indian Restaurant Near Me</p>
          <p>North Indian Restaurant Near Me</p>
          <p>Punjabi Restaurant Near Me</p>
          <p>Itaian Restaurant Near Me</p>
          <p>Korean Restaurant Near Me</p>
          <p>Indian Restaurant Near Me</p>
          <p>Kerela Restaurant Near Me</p>
          <p>Andhra Restaurant Near Me</p>
          <p>Sea Food Restaurant Near Me</p>
          <p>Bengali Restaurant Near Me</p>
          <p>
            Show More{" "}
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9L12 15L18 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
