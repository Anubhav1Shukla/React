import React, { useState } from 'react'

//UseState basic intermidiate and advanced

function UseState() {

    // const [score,setScore]=useState(100);
    // const [banned,setBanned]=useState(false);
    // const [val,setValue]=useState(0);
       const [val,setValue]=useState({name:"Anubhav Shukla", isBanned:false});

  return (
    <div className='p-4'>
      {/* <h1>{score}</h1> */}
      {/* <button onClick={()=>setScore(200)} className='px-2 py-1 mt-2 rounded-full text-xs bg-blue-500 text-white'>Change</button> */}
      {/* <h1>{banned.toString()}</h1> */}
      {/* <button onClick={()=>setBanned(!banned)} className='px-2 py-1 mt-2 rounded-full text-xs bg-blue-500 text-white'>ban karo</button> */}
      {/* <h1>{val}</h1>
      <button onClick={()=>setValue((prev)=>prev+1)} className='px-2 py-1 mt-2 rounded-full text-xs bg-blue-500 text-white '>Add+1</button>
      <button onClick={()=>setValue((prev)=>prev-1)} className='px-2 py-1 mt-2 rounded-full text-xs bg-blue-500 text-white '>Sub-1</button> */}
      <h1>name: {val.name}</h1>
      <h2>banned: {val.isBanned.toString()}</h2>
      <button onClick={()=>setValue({...val, isBanned: !val.isBanned})} className='px-3 py-1 bg-blue-500 rounded-full text-white'>Change</button>

    </div>
  )
}

export default UseState


//State ek data hota hai ,react is data ka khayal rakhta hai ,jab bhi ye data change hota react page ko update karta hai 


//maan lete hai aapke game mein score bydefault 0 se suru hota hai furture mein wo score badhega by 10 aur aapko page pe show karna hai jab score badhe ,to use case mein aapka score variable ek state mein rakhna jaruari hai ,kyuki react sirf uyse change krta hai jo state mein hota hai 
