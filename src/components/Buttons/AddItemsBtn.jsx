import React, { useEffect } from "react";
import {
  decrementItemCount,
  incrementItemCount,
} from "../../ReduxStore/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const AddItemsBtn = ({ itemCount, setItemCount, data }) => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  // Watch for changes in cartItem and update setItemCount
  useEffect(() => {
    if (cartItem[data.id] === undefined) setItemCount(0);
    if (data && cartItem[data.id]) {
      setItemCount(cartItem[data.id].count);
    }
  }, [cartItem, data, setItemCount]);

  const increment = () => {
    const id = data?.id;
    dispatch(incrementItemCount(id));
  };

  const decrement = () => {
    const id = data?.id;
    dispatch(decrementItemCount(id));
  };

  return (
    <div className="flex justify-between text-lg leading-none ">
      <div
        onClick={decrement}
        className="flex justify-center items-center w-1/3  "
      >
        -
      </div>
      <div className="w-1/3">{itemCount}</div>
      <div
        onClick={increment}
        className="flex justify-center items-center w-1/3 "
      >
        +
      </div>
    </div>
  );
};

export default AddItemsBtn;
