import React from "react";
import { useDispatch, useSelector } from "react-redux";
import RestaurantMenuCard from "../RestaurantMenu/RestaurantMenuCard";
import { clearCart } from "../../ReduxStore/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((store) => store.cart.items);
  const itemCount = Object.keys(cartItem).length;

  const handleClick = () => {
    dispatch(clearCart());
  };

  return (
    <div className="w-4/5 m-auto mt-10">
      <div className="text-2xl font-bold  my-6 flex justify-between">
        <h1>Cart Items: </h1>
        <button
          onClick={handleClick}
          className="bg-red-600 text-white border-0 rounded-lg px-4 py-2 hover:bg-red-950"
        >
          Clear Cart
        </button>
      </div>
      {itemCount == 0
        ? "cart is empty"
        : Object.keys(cartItem).map((itemId) => (
            <RestaurantMenuCard key={itemId} data={cartItem[itemId]} />
          ))}
    </div>
  );
};

export default Cart;
