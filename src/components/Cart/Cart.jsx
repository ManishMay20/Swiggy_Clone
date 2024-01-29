import React from "react";
import { useSelector } from "react-redux";
import RestaurantMenuCard from "../RestaurantMenu/RestaurantMenuCard";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const itemCount = Object.keys(cartItem).length;
  return (
    <div className="w-4/5 m-auto mt-10">
      <h1 className="text-2xl font-bold  my-6">Cart Items: </h1>
      {itemCount == 0
        ? "cart is empty"
        : Object.keys(cartItem).map((itemId) => (
            <RestaurantMenuCard key={itemId} data={cartItem[itemId]} />
          ))}
    </div>
  );
};

export default Cart;
