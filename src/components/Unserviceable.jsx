import React from "react";

const Unserviceable = () => {
  return (
    <div className="flex w-full mt-20 justify-center items-center flex-col">
      <img
        className="w-60"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_476,h_476/portal/m/location_unserviceable.png"
      />
      <h1 className="font-bold text-xl mt-4">Location Unserviceable</h1>
      <p>We don’t have any services here till now. Try changing location.</p>
    </div>
  );
};

export default Unserviceable;
