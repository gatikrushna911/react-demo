import { useParams } from "react-router-dom";
import { REST_LOGO } from "../utils/Constants";
const RestaurantCard = (props) => {
  const { id, cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    props.restData.info;

  return (
    <div className="m-1 p-1 w-80 border border-solid border-1">
      <img className=" h-72 w-72" src={REST_LOGO + cloudinaryImageId} />
      <h4>{name}</h4>
      <h5>{cuisines.join(",")}</h5>
      <h5>{avgRating}</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

//higher order components. This complenent will take a component and return the componet on polishing this
export const withPromoted = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute m-2 p-2 text-white bg-black shadow-lg font-extralight">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
