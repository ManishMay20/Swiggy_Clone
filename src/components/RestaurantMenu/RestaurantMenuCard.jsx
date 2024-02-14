import React, { useEffect, useState } from "react";
import { IMG_URL } from "../../constans";
import { useDispatch, useSelector } from "react-redux";
import { addItems, incrementItemCount } from "../../ReduxStore/cartSlice";
import AddItemsBtn from "../Buttons/AddItemsBtn";

const RestaurantMenuCard = ({ data }) => {
  const [itemCount, setItemCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const foodType = data?.itemAttribute?.vegClassifier || data?.isVeg;
  const isBestseller = data?.isBestseller;
  const dispatch = useDispatch();
  const cartItem = useSelector((store) => store.cart.items);

  const handleClick = () => {
    if (cartItem[data?.id] === undefined) {
      dispatch(addItems(data));
      setItemCount(1);
    } else {
      dispatch(incrementItemCount(data?.id));
      setItemCount(cartItem[data?.id].count);
    }
  };
  useEffect(() => {
    if (data && cartItem[data.id]) {
      setItemCount(cartItem[data.id].count);
    }
  }, [cartItem, data, setItemCount]);

  if (!data) return;
  const price = data?.price || data?.defaultPrice;
  return (
    <div className="flex justify-between pb-5 md:pb-10 border-b-2 p-2 my-3">
      <div>
        <div className="flex gap-3 items-end">
          {(foodType === "VEG" || foodType == 1) && (
            <img className="w-5" src={`/images/VEG.png`} />
          )}
          {(foodType === "NONVEG" || foodType === undefined) && (
            <img className="w-5" src={`/images/NONVEG.png`} />
          )}
          {isBestseller && (
            <div className="flex items-center gap-1">
              <img className="w-3 h-3" src="/images/bestseller.png" />
              <p className="text-yellow-500 font-bold text-xs"> Best Seller</p>
            </div>
          )}
        </div>
        <h2 className="font-medium text-gray-700 text-sm sm:text-base mt-2">
          {data?.name}
        </h2>
        <p className="font-medium text-gray-700 text-sm sm:text-base">
          ₹ {price / 100}
        </p>
      </div>
      <div className="min-h-28 max-h-28 min-w-32 max-w-32 relative pl-2">
        {data?.imageId ? (
          <img
            className="w-full h-full rounded-lg object-cover"
            src={IMG_URL + data?.imageId}
            alt="items_image"
            style={{ display: isLoaded ? "block" : "none" }}
            onLoad={() => setIsLoaded(true)}
          />
        ) : (
          <div
            className="w-full h-full  text-center rounded-lg object-cover text-sm text-gray-400"
            style={{ backgroundColor: "#f0f0f0" }}
          >
            {" "}
            image not available{" "}
          </div>
        )}
        <button className="bg-white text-xs font-bold w-4/5 rounded shadow-sm hover:shadow-lg absolute text-green-400 cursor-pointer border -bottom-2 left-1/2 transform -translate-x-[46%]">
          {itemCount == 0 ? (
            <div onClick={handleClick} className="w-full h-full py-2">
              ADD
            </div>
          ) : (
            <AddItemsBtn
              itemCount={itemCount}
              setItemCount={setItemCount}
              data={data}
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default RestaurantMenuCard;
