import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
const UserDetails = () => {

    const {name}=useParams()
    // console.log(d)
    const navigate=useNavigate();


    // const GoBackHandler= () =>{
    //     // navigate("/user");
    //     navigate(-1);
    // }
  return (
    <div className=" w-1/2 m-auto mt-10">
    <h1 className="text-5xl mb-4 text-red-500">User-Detail</h1>
    <h1 className='text-2xl mt-2 text-green-600'>Welcome {name} !</h1>
    <button onClick={()=>navigate(-1)} className="mt-6 px-3 py-2 text-white p-1 bg-green-400 rounded-md">Go Back</button>
  </div>
  )
}

export default UserDetails
