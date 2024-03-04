import { IMG_CDN_LINK } from "../config";
import { restaurantList } from "../config";
import { useState } from "react";

const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, areaName, cuisines, avgRating } = props;
  return (
    <div className="w-64 border-2 bg-gray-200 m-2 flex flex-col justify-center items-center rounded ">
      <img
        src={IMG_CDN_LINK + cloudinaryImageId}
        className="w-56 m-1 border border-black rounded-md"
      ></img>
      <p className="font-bold text-center">
        {name} ({avgRating} stars)
      </p>
      <p className="mt-2">{areaName}</p>
      <p className="mt-2 w-64 h-auto overflow-x-hidden overflow-y-hidden text-ellipsis text-center">
        {cuisines.join(",")}
      </p>
    </div>
  );
};

const Body = () => {
  const [searchValue, setSearchValue] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);
  const toggleSearch = () => {
    const restaurants = restaurantList.filter((r) =>
      r.info.name
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\[\]"'\\?]/g, "")
        .toLowerCase()
        .includes(searchValue.toLowerCase())
    );
    setRestaurants(restaurants);
  };
  // const searchValue = "kfc"; this doesnt work in react
  return (
    <>
      <div className="search-container flex justify-center mt-4 m-2 h-8">
        <input
          className="search-input w-5/12 border-black font border-2 rounded p-2 py-3"
          type="text"
          placholder="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onSubmit={toggleSearch}
        />
        <button
          className="search-btn bg-gray-400 border-2 w-1/12 h-8 border-black rounded mx-4 "
          onClick={toggleSearch}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap justify-center ">
        {restaurants.map((r) => (
          <RestaurantCard key={r.info.id} {...r.info} />
        ))}
      </div>
    </>
  );
};

export default Body;
