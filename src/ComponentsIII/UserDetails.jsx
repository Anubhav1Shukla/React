import React, { useContext } from 'react'
import { UserContext } from '../Context/Context'
import { Navigate, useNavigate, useParams } from 'react-router-dom';


const UserDetails = () => {
 const {id} = useParams()
 const Navigate=useNavigate();
 const {users}= useContext(UserContext);
    console.log(users[id]);
  return (
    <div>

      <h1 className='text-2xl font-bold text-red-500'>{users[id].id}</h1>
      <h1 className='text-2xl font-bold text-red-500'>{users[id].username}</h1>
      <h3 className='text-xl font-bold text-red-500'>{users[id].email}</h3>
      <h3 className='text-xl font-bold text-red-500'>{users[id].city}</h3>

      <button onClick={()=>Navigate(-1)} className= ' mt-5 bg-red-100 p-2 rounded-lg'>Go Back</button>
      
    </div>
  )
}

export default UserDetails
