// import React from "react";

// function Card() {
//   const data = [
//     {
//       image:
//         "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       name: "Mens Wears",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sequi quos itaque explicabo architecto maiores!",
//     instock:true
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1546213290-e1b492ab3eee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       name: "Women Wears",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sequi quos itaque explicabo architecto maiores!",
//     instock:false
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1595991209266-5ff5a3a2f008?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       name: "Child Wears",
//       description:
//         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sequi quos itaque explicabo architecto maiores!",
//     instock:false
//     },
//   ];

//   return (
//     <div className="w-full h-screen flex items-center justify-center gap-10 bg-zinc-200">
//       {data.map((elem, index) => (
//         <div
//           key={index}
//           className="w-52 bg-zinc-100 rounded-md overflow-hidden"
//         >
//           <div className="w-full h-32 bg-zinc-300">
//             <img
//               className="w-full h-full object-cover"
//               src={elem.image}
//               alt="shopimg"
//             />
//           </div>
//           <div className="w-full px-3 py-4">
//             <h2 className="font-bold">{elem.name}</h2>
//             <p className="text-xs mt-3 pr-5">
//             {elem.description}
//             </p>
//             <button className={`px-2 py-2 ${elem.instock ? 'bg-blue-600' : 'bg-red-600'} text-ts rounded-full text-zinc-100 mt-4`}>{elem.instock ? "In Stock" : "Out Of Stock"}</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Card;


// conditionoal rendering & event handling
import React from 'react'

function Card() {

    const data = [
        {name:"Sajnee Re", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita earum rerum magnam enim nemo magni?"},
        {name:"Hanuman Chalisha", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita earum rerum magnam enim nemo magni?"},
        {name:"Ishq", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita earum rerum magnam enim nemo magni?"},
    ]

const handleClickDownload = ()=>{alert("Download Started!");}

  return (
    <div className='w-full h-screen bg-zinc-300 flex flex-col gap-10 items-center justify-center'>
    {data.map((elem,index)=>(
        <div className='w-60  song px-3 py-2 bg-zinc-100 rounded'>
        <h3 className='font-semibold text-xl'>{elem.name}</h3>
        <p className='text-xs mt-2 '>{elem.description}</p>
        <button onClick={handleClickDownload} className='px-2 py-1 bg-blue-500 text-ts font-semibold text-zinc-100 rounded-mt-3'> Download Now</button>
      </div>
    ))}
    </div>
  )
}

export default Card

