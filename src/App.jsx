import React, { useState } from "react"
// import Card from "./Components/Card";
// import UseState from "./Components/UseState";
// import Props from "./Components/Props";
import PropsEx from "./Components/PropsEx";
import Navbar from "./Components/Navbar";
function App(){


      


//     const data =[
//       {name:"Raj",profession:"Student",image:"https://images.unsplash.com/photo-1688572865439-be9cd43b6986?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friend:false},
//       {name:"Ravi",profession:"CEO",image:"https://images.unsplash.com/photo-1617330527074-fe659f90e7b5?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  friend:false},
//       {name:"Sarthak",profession:"IAS",image:"https://images.unsplash.com/photo-1571153041245-5c72320bc914?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  friend:false},
//       {name:"Sanky",profession:"SP",image:"https://plus.unsplash.com/premium_photo-1686803469619-24c33c76c340?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  friend:false}
//     ];
    
  //   const[realdata,setRealData]=useState(data);
  //   //state jaha banati hai vahi modify hoti hai
  // const handleFriendsButton=(cardindex)=>{
  //   setRealData((prev)=>{
  //     return prev.map((item,index)=>{
  //       if (index === cardindex) {
  //           return { ...item, friend: !item.friend };
  //       }
  //        return item;
  //     })
  //   })
  // }


    // Music Project

    const data=[
      {name: "Sajni Re", image: "https://images.unsplash.com/photo-1526218626217-dc65a29bb444?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", artist: "Arjit Singh",added: false},
      {name: "Jai Mata di", image:"https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", artist: "Vishal Mishra",added: false},
      {name: "Maa", image: "https://images.unsplash.com/photo-1565145368739-29e5a81be478?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", artist: "Lata Mangeshkar",added: false},
      {name: "Devi Mata", image: "https://images.unsplash.com/photo-1524650359799-842906ca1c06?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", artist: "Jubin Nautiyal",added: false},
      {name: "Hanuman Chalisha", image:"https://images.unsplash.com/photo-1507676385008-e7fb562d11f8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", artist: "South Reddy",added: false},
    ]

      const[songData,setSongData]=useState(data);

      const handleClick = (index) =>{
          setSongData((prev)=>{
            return prev.map((item,itemIndex)=>{
              if(itemIndex === index)
                  return {...item,added: !item.added};
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

        {/* <div className="w-full h-screen bg-zinc-300 flex gap-3 items-center justify-center">
      {realdata.map((item,index)=>(
        <Props key={index} image={item.image} name={item.name} friend={item.friend} profession={item.profession} handleClick={()=>handleFriendsButton(index)}/>
      ))}
      </div>
     */}
       
       {/* Props Exercise */}

       <div className="w-full h-screen bg-zinc-200">
        <Navbar data={songData}/>
        <div className="px-20 flex flex-wrap gap-8 mt-12">
       {songData.map((obj,index)=>{
        return <PropsEx key={index} data={obj} handleClick={handleClick} index={index} />
       })}
        </div>
       </div>


    </>
  );
}

export default App;
