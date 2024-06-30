import React from "react";

function Props({text,color}) {
  return (
        <button className={`m-2 px-3 py-1 text-zinc-100 text-xs ${color} rounded-md`}>{text}</button>
  )
}

export default Props;

//props introduction:-
//props use karte hai aapke componenets ko reusbale banane ke liye , consider kare aapke pass ek button hai and aapko aapkko us button ko alag alag jagah daalna hai aap mein , to app ek button component bannaye and uska data hard coded karne ki jagah parent component se send karde and child component par use kar le
