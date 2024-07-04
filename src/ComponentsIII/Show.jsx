import React from 'react'
import { useState,useEffect } from 'react';
import axios from '../Utils/axios';

const Show = () => {

    const [products, setproducts] = useState([]);
  const getproducts = () => {
   

    axios
      .get("/products")
      .then((products) => {
        // console.log(products);
        setproducts(products.data);
      })
      .catch((err) => console.error(err));
  };


  useEffect(()=>{
    getproducts();
},[])



  return (
    <>

{/* <button onClick={getproducts} className="px-5 py-2 bg-red-300 rounded-md">
        Call Product API
      </button>
        <hr /> */}
    <ul className='pt-5'>
        {products.length > 0 ? (
          products.map((p) => (
            <li key={p.id} className="mb-3 w-1/4 p-5 bg-red-200 rounded-lg">

              {p.title }
            </li>
          ))
        ) : (
          <h1>Loading....</h1>
        )}
      </ul>
      </>
  );
};

export default Show
