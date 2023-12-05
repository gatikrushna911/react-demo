import RestaurantCard from "./restaurantcard";
import { restList } from "../utils/Constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(restList);

  return (
    <div>
      <div className="filter-alt">
        <button
          className="button-alt"
          onClick={() => {
            const result = restaurantList.filter(
              (restaurant) => restaurant.info.avgRating >= 4.5
            );
            setRestaurantList(result);
          }}
        >
          {"ratings > 4"}{" "}
        </button>
      </div>
      <div className="rest-container">
        {restaurantList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard restData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
