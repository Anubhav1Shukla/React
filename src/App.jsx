import React, { useState } from "react"
// import Card from "./Components/Card";
// import UseState from "./Components/UseState";
import Props from "./Components/Props";

function App(){



    const data =[
      {name:"Raj",profession:"Student",image:"https://images.unsplash.com/photo-1688572865439-be9cd43b6986?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friend:false},
      {name:"Ravi",profession:"CEO",image:"https://images.unsplash.com/photo-1617330527074-fe659f90e7b5?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  friend:false},
      {name:"Sarthak",profession:"IAS",image:"https://images.unsplash.com/photo-1571153041245-5c72320bc914?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  friend:false},
      {name:"Sanky",profession:"SP",image:"https://plus.unsplash.com/premium_photo-1686803469619-24c33c76c340?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  friend:false}
    ];
    
    const[realdata,setRealData]=useState(data);
    //state jaha banati hai vahi modify hoti hai
  const handleFriendsButton=(cardindex)=>{
    setRealData((prev)=>{
      return prev.map((item,index)=>{
        if (index === cardindex) {
            return { ...item, friend: !item.friend };
        }
         return item;
      })
    })
  }
  return (
    <>
     

      {/* <Card/> */}
      {/* <UseState/>  */}
      {/* <Props text="Know More" color="bg-blue-500"/> */}
      {/* <Props text="Download..." color="bg-red-500"/>
      <Props text="Feedback" color="bg-yellow-500"/> */}

        <div className="w-full h-screen bg-zinc-300 flex gap-3 items-center justify-center">
      {realdata.map((item,index)=>(
        <Props key={index} image={item.image} name={item.name} friend={item.friend} profession={item.profession} handleClick={()=>handleFriendsButton(index)}/>
      ))}
      </div>
    
    </>
  );
}

export default App;
