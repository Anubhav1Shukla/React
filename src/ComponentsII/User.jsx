import React from "react";
import { Link, Outlet } from "react-router-dom";
const User = () => {
  return (
    <div className=" w-1/2 m-auto mt-10">
      <h1 className="text-5xl mb-4 text-red-500">User</h1>

      {/* <p className="mb-2 text-zinc-500">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero amet
      fugiat excepturi officiis! Ullam non laborum maxime labore, mollitia
      repudiandae!
    </p>
    <button className="text-white p-3 bg-green-400 rounded-md">Your Profile</button> */}

      <div className="flex width-1/2 flex-col  mt-5 ">
        <Link className="p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300" to="/user/john">
          John
        </Link>
        <Link className="p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300" to="/user/jack">
          Jack
        </Link>
        <Link className="p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300" to="/user/Doremon">
          Doremon
        </Link>
        <Link className="p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300" to="/user/nobita">
          Nobita
        </Link>
      </div>
      <hr />
      <Outlet/>
    </div>
  );
};

export default User;
