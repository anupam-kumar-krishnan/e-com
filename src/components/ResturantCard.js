const RestaurantCard = (props) => {
  const { resData } = props;

  if (!resData) return null; // safety guard

  const { name, image, avgRating, timeToPrepare, cuisines, place, distance } =
    resData;
  return (
    <div className="res-card">
      <img src={resData.image} />
      <h3>{name}</h3>{" "}
      <p className="rating">
        <i className="fa fa-star star" aria-hidden="true"></i> {avgRating} •{" "}
        {timeToPrepare}
      </p>
      <p>
        {cuisines.join(",")} | {place}
      </p>
      <p>
        <i className="fa fa-map-marker map" aria-hidden="true"></i>{" "}
        {resData.distance}
      </p>
    </div>
  );
};

export default RestaurantCard;
