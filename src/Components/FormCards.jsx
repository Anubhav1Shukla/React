import React from 'react'
import FormCard from './FormCard'
function FormCards({users,handleRemove}) {
  return (
    <div className='w-full  max-h-96 overflow-auto p-4 flex justify-center gap-4 flex-wrap'>
      {users.map((item,index)=>{

       return <FormCard id={index} handleRemove={handleRemove} user={item} key={index}/>
      })}     
    
    
    
    </div>
  )
}

export default FormCards
