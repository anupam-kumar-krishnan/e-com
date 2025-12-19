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
  const { resData } = props;
  return (
    <div className="res-card">
      <img src={resData.image} />
      <h3>{resData.name}</h3>{" "}
      <p className="rating">
        <i className="fa fa-star" aria-hidden="true"></i> {resData.avgRating}
      </p>
      <p>
        {resData.cuisines.join(",")} | {resData.place}
      </p>
      <p>
        <i className="fa fa-clock-o time" aria-hidden="true"></i>{" "}
        {resData.timeToPrepare} |{" "}
        <i className="fa fa-map-marker map" aria-hidden="true"></i>{" "}
        {resData.distance}
      </p>
    </div>
  );
};

const resObj = {
  restaurants: [
    {
      id: 1,
      name: "KFC",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2025/10/17/0be4f55a-55f4-432f-9e76-eea1132525c6_243625.JPG",
      avgRating: 4.3,
      avgPrice: 300,
      distance: "2.5 km",
      timeToPrepare: "25 mins",
      place: "Hinjewadi",
      cuisines: ["Chicken"],
      menu: [
        {
          id: 101,
          name: "Bucket for Two",
          image:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/wmn6qpsqazt1ln8hylum",
          price: 599,
          rating: 4.6,
          orderedCount: 3200,
          prepTime: 20,
        },
        {
          id: 102,
          name: "Zinger Burger",
          image:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/13/c399fbf4-8312-48c0-b661-fa2e052845cf_c96b26a6-55c6-43ff-8231-03e6c10cc4b6.jpg",
          price: 199,
          rating: 4.4,
          orderedCount: 5400,
          prepTime: 15,
        },
        {
          id: 103,
          name: "Popcorn Chicken",
          image:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/xwunbsyx5mjosb47pgpi",
          price: 179,
          rating: 4.2,
          orderedCount: 4100,
          prepTime: 10,
        },
        {
          id: 104,
          name: "Hot Chicken Wings",
          image:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/ubpofq5tlhdgwh2lzo8d",
          price: 249,
          rating: 4.5,
          orderedCount: 2900,
          prepTime: 15,
        },
        {
          id: 105,
          name: "Indian Tandoori Chicken Roll",
          image:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/7/9/4c966f38-c191-4d0e-a54c-c70b832e4de1_69ee13c1-f267-4385-ab98-6efbc811de33.jpg",
          price: 149,
          rating: 4.1,
          orderedCount: 1800,
          prepTime: 15,
        },
      ],
    },
    {
      id: 2,
      name: "Domino's",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2025/11/11/3dc529b2-49da-4cf8-8a96-bf2b0a8d281c_24404.JPG",
      avgRating: 4.1,
      avgPrice: 350,
      distance: "3.1 km",
      timeToPrepare: "30 mins",
      place: "Thergaon",
      cuisines: ["Italian"],
      menu: [
        {
          id: 201,
          name: "Margherita Pizza",
          image:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/7/22/f3b8f6fb-bf73-4ee0-bed8-a6a57742f7cb_19f4a228-886b-4072-a5c8-3417090132ae.jpg",
          price: 199,
          rating: 4.3,
          orderedCount: 6200,
          prepTime: 15,
        },
        {
          id: 202,
          name: "Farmhouse Pizza",
          image:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/7/22/3bf9271f-30b4-49ad-975b-d593c89ec049_3e0d37d9-cb4d-41b2-9e7d-55af5b187dcc.jpg",
          price: 459,
          rating: 4.5,
          orderedCount: 4800,
          prepTime: 20,
        },
        {
          id: 203,
          name: "Peppy Paneer",
          image:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/7/22/5d638141-3d2d-495d-ad9d-9778e6d3db45_bc5886b8-4158-466a-9cb6-9c86e83e3d51.jpg",
          price: 399,
          rating: 4.4,
          orderedCount: 5100,
          prepTime: 15,
        },
        {
          id: 204,
          name: "Garlic Bread",
          image:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/7/22/7c0b042d-7bc4-4ff8-945d-4c6e7c4ff313_f46d1f9f-5ffa-4e74-8e9e-c0c26ad4fb60.jpg",
          price: 129,
          rating: 4.2,
          orderedCount: 7400,
          prepTime: 10,
        },
        {
          id: 205,
          name: "Choco Lava Cake",
          image:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/7/22/441953ea-96f7-4efc-81b7-f4a6cf9ee25c_0edcc9f8-ba9e-405b-af70-a774f326f935.jpg",
          price: 109,
          rating: 4.6,
          orderedCount: 8900,
          prepTime: 6,
        },
      ],
    },
    {
      id: 3,
      name: "Pizza Hut",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/4f389302-1f17-40fa-883a-4d1c53f84b02_21001.JPG",
      avgRating: 4.0,
      avgPrice: 400,
      distance: "4.0 km",
      timeToPrepare: "35 mins",
      place: "Wakad",
      cuisines: ["Italian"],
      menu: [
        {
          id: 301,
          name: "Veggie Supreme",
          image:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/4/17/2f6b03bf-3bb0-40cd-a5b8-7f0cfdf21998_7cc4fe8f-d5f8-44ed-ada9-0a719fc4d89f.jpg_compressed",
          price: 499,
          rating: 4.4,
          orderedCount: 3600,
          prepTime: 18,
        },
        {
          id: 302,
          name: "Chicken Supreme",
          image:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/4/17/e4d15638-5d14-444b-96ce-0314b1d4b0dc_e626776a-fa5d-4302-9c53-58893fe5c90d.jpg_compressed",
          price: 549,
          rating: 4.5,
          orderedCount: 4100,
          prepTime: 20,
        },
        {
          id: 303,
          name: "Margherita Ultimate Cheese Pizza",
          image:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/9/22/f0061ceb-be06-448d-97c0-dbe18d1b7176_b653ba04-9cda-4fd9-bf2d-697a48a1b24b.jpg",
          price: 579,
          rating: 4.3,
          orderedCount: 2800,
          prepTime: 22,
        },
        {
          id: 304,
          name: "Cheesy Garlic Bread",
          image:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/4/17/37c2d298-6a39-4042-8052-099eac78fa89_2e24c2e3-723d-4022-8201-fa1321af5f8a.jpg",
          price: 159,
          rating: 4.2,
          orderedCount: 5200,
          prepTime: 9,
        },
        {
          id: 305,
          name: "Brownie",
          image:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/4/16/c99e2359-999f-410a-be36-89f5dd86fc4e_be0bb96e-ae2b-405a-abaa-a80f7551c3a5.jpg",
          price: 109,
          rating: 2.4,
          orderedCount: 43,
          prepTime: 6,
        },
      ],
    },
    {
      id: 4,
      name: "Burger King",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/b94bd788-14eb-45ab-b1ed-cb984521d7ff_42581.jpg",
      avgRating: 4.2,
      avgPrice: 250,
      distance: "1.8 km",
      timeToPrepare: "20 mins",
      place: "Koramangala",
      cuisines: ["Burgers"],
      menu: [
        {
          id: 401,
          name: "Whopper",
          image:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/11/29/dc90cc06-f883-430d-be4b-75141c8064d9_6b832721-694c-4df4-96f0-308388144da0.jpg",
          price: 199,
          rating: 4.5,
          orderedCount: 6800,
          prepTime: 15,
        },
        {
          id: 402,
          name: "Veg Whopper",
          image:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/7/5/ad7622d7-ea12-428d-8803-3bd9f9da190e_2e7ae0e7-8b22-446d-9d65-4c96ec3df716.jpg",
          price: 179,
          rating: 4.3,
          orderedCount: 5200,
          prepTime: 11,
        },
        {
          id: 403,
          name: "Chicken Wing Fried",
          image:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/19/0879980b-5f95-459b-b995-48d42143a3c6_aab3a5ad-b4be-45fe-b5ab-a9bae30d64af.jpg",
          price: 149,
          rating: 4.2,
          orderedCount: 4600,
          prepTime: 15,
        },
        {
          id: 404,
          name: "Crispy Veg Burger",
          image:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/11/20/4389cb8d-93e5-4dd5-8013-73a927dd6b31_622133db-f6cc-4f88-ba37-118df0b143ce.jpg",
          price: 59,
          rating: 4.0,
          orderedCount: 9300,
          prepTime: 10,
        },
        {
          id: 405,
          name: "Chocolate Shake",
          image:
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/19/cddbd1f0-c2fc-4af3-a108-b482cc0027e2_0564277b-594b-4aa9-a7cd-6796803092fc.jpg",
          price: 139,
          rating: 4.4,
          orderedCount: 3900,
          prepTime: 5,
        },
      ],
    },
  ],
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
          {resObj.restaurants.map((restaurant) => (
            <ResturantCard key={restaurant.id} resData={restaurant} />
          ))}
        </div>
      </div>
      <div className="res-container">
        <h3 className="heading">
          Restaurants with online food delivery in Pune
        </h3>
        <div className="res-cards">
          {resObj.restaurants.map((restaurant) => (
            <ResturantCard key={restaurant.id} resData={restaurant} />
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
