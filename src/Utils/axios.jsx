import React from "react";
import axios from "axios";

const axios = () => {
  const getproducts = () => {
    const api = "https://fakestoreapi.com/products";

    axios
      .get(api)
      .then((products) => {
        console.log(products);
      })
      .catch((err) => console.error(err));
  };

  return <div className="pt-[5%] pl-[5%]">
    <button onClick={getproducts} className="rounded px-5 py-2 bg-red-300">
        All Products Api
    </button>
  </div>;
};

export default axios;
