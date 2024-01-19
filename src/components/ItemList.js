import { REST_LOGO } from "../utils/Constants";

const Itemlist = ({ items }) => {
  //const items = props.items;
  //console.log(items);

  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="border-b-2 py-6 flex">
          <div className=" w-9/12">
            <div className=" text-left text-gray-700 font-light py-2">
              <p>{item.card.info.name}</p>
              <p> ₹{item.card.info.price / 100}</p>
            </div>
            <div className="text-left text-sm text-gray-400">
              {item.card.info.description}
            </div>
          </div>
          <div className="w-3/12 p-4">
            <img
              className="w-full h-28 "
              src={REST_LOGO + item.card.info.imageId}
            ></img>
            <div className="relative text-center inline-block">
              <button className=" mx-10 p-2 rounded-md bg-white text-green-500 shadow-lg">
                ADD
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Itemlist;
