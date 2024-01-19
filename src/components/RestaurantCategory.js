import { useState } from "react";
import Itemlist from "./ItemList";
const RestuarantCategory = ({ data, showItems, setShowItems }) => {
  //const category = props.data;
  //console.log(category);

  //const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems();
  };
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 p-4 shadow-lg">
      <div className="flex justify-between" onClick={handleClick}>
        <span>
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {showItems && <Itemlist items={data.itemCards} />}
    </div>
  );
};

export default RestuarantCategory;
