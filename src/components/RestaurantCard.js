import { useParams } from "react-router-dom";
import { REST_LOGO } from "../utils/Constants";
const RestaurantCard = (props) => {
  const { id, cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    props.restData.info;

  return (
    <div className="rest-card">
      <img className="rest-logo" src={REST_LOGO + cloudinaryImageId} />

      <h4>{name}</h4>
      <h5>{cuisines.join(",")}</h5>
      <h5>{avgRating}</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default RestaurantCard;
