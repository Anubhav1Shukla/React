import React, { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    console.log("Services Component is Created!");

    return () => {
      console.log("Services Component is Deleted!");
    };
  });
  //useeffect kisi bhi componenet ke life cycle mathod ko use karne ka mathod deta hai first parameter is function (callback ) second paaramter empty array
  //Life-Cycle mathod ko implement karne ka tareeka hai
  return <div>Services</div>;
};

export default Services;
