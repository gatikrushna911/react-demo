import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_LOGO } from "../utils/Constants";
const RestaurantMenu = () => {
  const { restid } = useParams();

  console.log(restid);
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  useEffect(() => {
    fetchRestaurantsMenu();
  }, []);
  const MENU_URL =
    MENU_LOGO + restid + "&catalog_qa=undefined&submitAction=ENTER";
  console.log(MENU_URL);
  const fetchRestaurantsMenu = async () => {
    const result = await fetch(MENU_URL);
    const json = await result.json();
    setRestaurantMenu(json?.data);
  };

  //+ params  + "&catalog_qa=undefined&submitAction=ENTER"}

  if (restaurantMenu == null) return "";
  const { name, areaName, costForTwoMessage } =
    restaurantMenu.cards[0]?.card?.card?.info;
  const { itemCards } =
    restaurantMenu.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  return (
    <div>
      <h4>
        {name} - {areaName}
      </h4>
      <p>{costForTwoMessage}</p>
      <h4>Menus</h4>
      <ul>
        {itemCards.map((item) => (
          <li>{item?.card?.info?.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
