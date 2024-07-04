import React, { useEffect, useState } from "react";
import axios from '../Utils/axios';
const Services = () => {
  const [first, setfirst] = useState("This is Normal data");
  const [second, setsecond] = useState("This is Very large data");

  const getusers = () => {
 

    axios
      .get("/users")
      .then((users) => {
        console.log(users);
        // setproducts(products.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getusers();
    console.log("Service Component is Created!");

    return () => {
      console.log("Service Component is Deleted!");
    };
  }, [second]);
  //useeffect kisi bhi componenet ke life cycle mathod ko use karne ka mathod deta hai first parameter is function (callback ) second paaramter empty array(jab empty array lagate hai to redering nahi hoti sirf vahi component update hota hai jisme ham kuch changes karte hai)
  //Life-Cycle mathod ko implement karne ka tareeka hai

  return (
    <div>
      <h1>{first}</h1>
      <button
        onClick={() => setfirst("Normal Data has been changed!")}
        className="rounded-md mb-10 bg-red-200 p-2"
      >
        Change Normal Data
      </button>

      <h1>{second}</h1>
      <button
        onClick={() => setsecond("Large Data has been changed!")}
        className="rounded-md mb-10 bg-blue-200 p-2"
      >
        Change Large Data
      </button>
    </div>
  );
};

export default Services;
