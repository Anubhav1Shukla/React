import React, { useState } from 'react'

//UseState basic, intermidiate and advanced

function UseState() {

    // const [score,setScore]=useState(100);
    // const [banned,setBanned]=useState(false);
    // const [val,setValue]=useState(0);
    // const [val,setValue]=useState({name:"Anubhav Shukla", isBanned:false});
    // const [val,setVal]=useState({name:"Anubhav Shukla", age:20})
    // const [val,setVal]=useState([1,2,3,4,5,6]);
    // const [val,setValue]=useState(true);
  
      // const [val,setVal]=useState([
      //   {name:"Anubhav Shukla", age:20},
      //   {name:"Pihu", age:21},
      //   {name:"Tanay", age:23}
      // ]);

  return (
   <div className='w-full h-screen bg-zinc-300 flex justify-center items-center'>
      {/* <h1>{score}</h1> */}
      {/* <button onClick={()=>setScore(200)} className='px-2 py-1 mt-2 rounded-full text-xs bg-blue-500 text-white'>Change</button> */}
      {/* <h1>{banned.toString()}</h1> */}
      {/* <button onClick={()=>setBanned(!banned)} className='px-2 py-1 mt-2 rounded-full text-xs bg-blue-500 text-white'>ban karo</button> */}
      {/* <h1>{val}</h1>
      <button onClick={()=>setValue((prev)=>prev+1)} className='px-2 py-1 mt-2 rounded-full text-xs bg-blue-500 text-white '>Add+1</button>
      <button onClick={()=>setValue((prev)=>prev-1)} className='px-2 py-1 mt-2 rounded-full text-xs bg-blue-500 text-white '>Sub-1</button> */}
      {/* <h1>name: {val.name}</h1> */}
      {/* <h2>banned: {val.isBanned.toString()}</h2> */}
      {/* <button onClick={()=>setValue({...val, isBanned: !val.isBanned})} className='px-3 py-1 bg-blue-500 text-white text-xs rounded-full'>Change</button> */}
      {/* <button onClick={()=>setValue({...val, isBanned: !val.isBanned})} className={`px-3 py-1 ${val.isBanned ? "bg-blue-500" : "bg-red-500"} rounded-full text-white text-xs`}>Change</button> */}

        {/* UseStatement state ko update karta karta apne hissab se function completion ke baad, to fix performmance issues */}

       {/* <button onClick={()=>{
         setVal({...val, gender:"male"});
         console.log(val);
       }}>Click</button> 
        */}

       {/* useState Arrays */}

        {/* {val.map(item=><h1>{item*2}</h1>)} */}

        {/* <button onClick={()=>setVal(()=>val.filter((item,index)=>index!=val.length-1))} className='px-2 py-1 text-ts text-white rounded-full bg-blue-500'>Click</button> */}


        {/* useState Arrays 2nd*/}

        {/* //Removal from Arrays */}

        {/* {val.map(item=><h1>{item}</h1>)} */}
        {/* <button onClick={()=>setVal(()=>val.filter((item,index)=>index!=2))} className='px-2 py-1 text-ts text-white rounded-full bg-blue-500'>Click</button> */}
        {/* <button onClick={()=>setVal(()=>val.filter(item=> item%2!=0))} className='px-2 py-1 text-ts text-white rounded-full bg-blue-500'>Click</button> */}

        {/* <button onClick={()=>setVal([...val,7])} className='px-2 py-1 text-ts text-white rounded-full bg-blue-500'>Click</button> */}

        {/* useState addition in object part2 */}

        {/* {val.map((item)=>(
          <div>
            <h1>{item.name}</h1>
            <h2>{item.age}</h2>
          </div>
        ))}

        <button onClick={()=>setVal(()=>val.map(item=>item.name === "Tanay"? ({name: "Tanay",age:24}) : item))}>Click</button> */}
          
       {/* UseState Hook */}

      {/* val:{val.toString()} */}

      {/* print bahar jaao if val is false and print mat jao if val is true */}
          {/* <h1>
            {val==false ?"BAAHAR JAAO":"MAT JAAO"}
          </h1>
          <button onClick={()=>{setValue(()=>!val)}} className='px-2 py-1 bg-blue-400 rounded-md'>Change</button> */}

            {/* practice create something */}
            <div className='w-60 h-32 bg-zinc-500 rounded overflow-hidden'>
              <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1589859509530-1bef96699d28?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="coder-img" />
              
            </div>
     </div> 
  )
}

export default UseState


//State ek data hota hai ,react is data ka khayal rakhta hai ,jab bhi ye data change hota react page ko update karta hai 


//maan lete hai aapke game mein score bydefault 0 se suru hota hai furture mein wo score badhega by 10 aur aapko page pe show karna hai jab score badhe ,to use case mein aapka score variable ek state mein rakhna jaruari hai ,kyuki react sirf uyse change krta hai jo state mein hota hai 
