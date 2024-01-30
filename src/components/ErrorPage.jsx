import React from "react";

const ErrorPage = (e) => {
  console.log(e);
  return (
    <div className="flex justify-center items-center text-4xl text-orange-500 h-52">
      <h1>Route not found go back! 😊</h1>
    </div>
  );
};

export default ErrorPage;
