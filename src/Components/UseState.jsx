import React, { useState } from 'react'

function UseState() {

    // const [score,setScore]=useState(100);
        const [banned,setBanned]=useState(false);

  return (
    <div className='p-4'>
      {/* <h1>{score}</h1> */}
      {/* <button onClick={()=>setScore(200)} className='px-2 py-1 mt-2 rounded-full text-xs bg-blue-500 text-white'>Change</button> */}
      <h1>{banned.toString()}</h1>
      <button onClick={()=>setBanned(!banned)} className='px-2 py-1 mt-2 rounded-full text-xs bg-blue-500 text-white'>ban karo</button>
    </div>
  )
}

export default UseState


//State ek data hota hai ,react is data ka khayal rakhta hai ,jab bhi ye data change hota react page ko update karta hai 


//maan lete hai aapke game mein score bydefault 0 se suru hota hai furture mein wo score badhega by 10 aur aapko page pe show karna hai jab score badhe ,to use case mein aapka score variable ek state mein rakhna jaruari hai ,kyuki react sirf uyse change krta hai jo state mein hota hai 
