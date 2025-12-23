import MobileSection from "./MobileSection";
import HeroSection from "./HeroSection";
import RestaurantCard from "./ResturantCard";
import resObj from "../utils/mockData";
import react, { useEffect, useState } from "react";

const Body = () => {
  // State Variable - Super Powerful Variable
  let [listofRestaurants, setListofRestaurants] = useState(resObj.restaurants);

  useEffect(() => {
    console.log("useEffect Called");
  }, []);

  return (
    <div className="body">
      <div className="search">
        <h2>Discover best restaurants. Check Food King!</h2>
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" />
        <input placeholder="Search for Restaurants, items or more  🔍"></input>
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
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic here

            const filteredList = listofRestaurants.filter(
              (resObj) => resObj.avgRating > 4
            );
            setListofRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        <h3 className="heading">Top restaurant chains in Pune</h3>
        <div className="res-cards">
          {/* resObj.restaurants */}
          {listofRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} resData={restaurant} />
          ))}
        </div>
      </div>
      <hr className="divider" />
      <div className="res-container">
        <h3 className="heading">
          Restaurants with online food delivery in Pune
        </h3>
        <div className="res-cards">
          {resObj.restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} resData={restaurant} />
          ))}
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
          <p>Show More</p>
        </div>
      </div>
    </div>
  );
};

export default Body;
