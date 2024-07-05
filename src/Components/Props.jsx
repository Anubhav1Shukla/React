import React from "react";

function Props({index,handleClick,name,image,profession,friend}) {
    // const {name,image,profession}=values;
  return (
        // <button className={`m-2 px-3 py-1 text-zinc-100 text-xs ${color} rounded-md`}>{text}</button>
        <div className="w-52 bg-white rounded-md overflow-hidden">
            <div className="w-full h-44 bg-sky-300">
                <img className="w-full h-full object-cover " src={image} alt="" />
            </div>
            <div className="w-full p-3">
                <h3 className="text-xl font-semibold">{name}</h3>
                <h5 className="text-xs">{profession}</h5>
                {/* props drilling event handling */}
                <button onClick={handleClick} className="mt-4 px-10 py-1 text-xs text-white bg-blue-500 font-semibold rounded-md">{friend ===true ?"Friends" : "Add Friend"}</button>
            </div>
        </div>
  );
}

export default Props;

//props introduction:-
//props use karte hai aapke componenets ko reusbale banane ke liye , consider kare aapke pass ek button hai and aapko aapkko us button ko alag alag jagah daalna hai aap mein , to app ek button component bannaye and uska data hard coded karne ki jagah parent component se send karde and child component par use kar le



// practice 
// humara data actually main app componenet main hoga aur hum use props ke through pass karenge cards mein , har card par ek button hoga and hamein add friend button par click hone par alert dena hai



// props drilling :---> ek jagah se dusri jagah data ko bhejna with the help of props that is caled data drilling 
// image :---> https://res.cloudinary.com/practicaldev/image/fetch/s--YWOuVoW6--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sx5c2nw5nideoz5vqe8q.png
// Data flow from parent to child only 