import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_LOGO } from "../utils/Constants";
import RestuarantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const { restid } = useParams();
  const [showIndex, setShowIndex] = useState(null);

  // console.log(restid);
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  useEffect(() => {
    fetchRestaurantsMenu();
  }, []);
  const MENU_URL =
    MENU_LOGO + restid + "&catalog_qa=undefined&submitAction=ENTER";
  //console.log(MENU_URL);
  const fetchRestaurantsMenu = async () => {
    const result = await fetch(MENU_URL);
    const json = await result.json();
    // console.log(json);
    setRestaurantMenu(json?.data);
  };

  //+ params  + "&catalog_qa=undefined&submitAction=ENTER"}

  if (restaurantMenu == null) return "";
  const { name, areaName, costForTwoMessage, cuisines } =
    restaurantMenu.cards[0]?.card?.card?.info;
  // const { itemCards } =
  //   restaurantMenu.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
  //     ?.card;

  const { cards } = restaurantMenu.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
  const categories = cards.filter(
    (menu) =>
      menu.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  //console.log(categories);

  return (
    <div className="text-centers">
      <h4 className="font-bold my-6 text-2xl">
        {name} - {areaName}
      </h4>
      <p className="font-bold text-lg">{cuisines.join(",")}</p>

      {categories.map((categories, index) => (
        <RestuarantCategory
          key={categories.card.card.title}
          data={categories?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowItems={() => setShowIndex(index)}
        />
      ))}
      {/* <ul>
        {itemCards.map((item) => (
          <li>
            {(key = item?.card?.info?.id)}
            {item?.card?.info?.name}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
