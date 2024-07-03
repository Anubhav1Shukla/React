import React from 'react'

function FormCard({user,handleRemove,id}) {
  return (
        
      
          <div className='w-52 h-full bg-zinc-100 rounded-md flex flex-col items-center p-2 '>
          <div className='image w-10 h-10 rounded-full bg-zinc-400 overflow-hidden'>
              <img className='w-full h-full object-cover' src={user.image} alt="" />
          </div>
          <h1 className='mt-1 text-xl font-semibold text-center leading-none'>{user.name}</h1>
          <h4 className='opacity-40 text-xs font-semibold'>{user.email}</h4>
          <p className='mt-2 text-center text-xs font-semibold leading-1 tracking-tight'>Hi I am Anubhav Shukla.I am Software Developer in India.</p>
          <button onClick={()=>handleRemove(id)} className='px-3 py-1 bg-red-600 text-xs rounded-lg font-semibold text-white mt-4'>Remove It</button>
        </div>
     
        )}


export default FormCard
