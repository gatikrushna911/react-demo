import RestaurantCard, { withPromoted } from "./RestaurantCard";
import { restList } from "../utils/Constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(null);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.3532772&lng=85.8265977&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();

    // console.log(
    //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    // );

    setRestaurantList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  }

  const RestaurantcardPromoted = withPromoted(RestaurantCard);
  const restPromotedFlag = true;
  if (restaurantList === null) return "";
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
      <div></div>
      <div className="flex flex-wrap">
        {restaurantList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restPromotedFlag ? (
              <RestaurantcardPromoted restData={restaurant} />
            ) : (
              <RestaurantcardPromoted restData={restaurant} />
            )}
            {/* <RestaurantcardPromoted restData={restaurant} /> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
