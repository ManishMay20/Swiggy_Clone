import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RestaurantMenuCard from "../RestaurantMenu/RestaurantMenuCard";
import { clearCart } from "../../ReduxStore/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((store) => store.cart.items);
  const itemCount = Object.keys(cartItem).length;

  const handleClick = () => {
    dispatch(clearCart());
  };

  window.scrollTo(0, 0);

  return (
    <div className="px-2 min-h-full min-w-full md:w-4/5 lg:2/3 m-auto mt-5 md:mt-10">
      <div className=" sm:text-2xl font-bold  my-6 flex justify-between">
        <h1>Cart Items: </h1>
        <button
          onClick={handleClick}
          className="bg-red-600 text-white border-0 rounded-lg px-4 py-2 hover:bg-red-950"
        >
          Clear Cart
        </button>
      </div>

      {itemCount == 0 && (
        <div className="flex flex-col w-full items-center top-10">
          <img
            className="w-3/4 sm:w-1/2 max-w-md"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
            alt="cart empty image"
          />
          <h2 className="text-xl font-bold pt-3">Your cart is empty</h2>
          <p className="max-w-fit">
            You can go to home page to view more restaurants
          </p>
          <Link to="/">
            <button className="bg-red-600 rounded-lg mt-3 text-white font-bold p-2">
              SEE RESTAURANTS NEAR YOU
            </button>
          </Link>
        </div>
      )}
      {itemCount != 0 &&
        Object.keys(cartItem).map((itemId) => (
          <RestaurantMenuCard key={itemId} data={cartItem[itemId]} />
        ))}
    </div>
  );
};

export default Cart;
