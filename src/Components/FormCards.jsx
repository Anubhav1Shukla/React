import React from 'react'
import FormCard from './FormCard'
function FormCards({users}) {
  return (
    <div className='w-full max-h-96 overflow-auto p-4 flex justify-center gap-4 flex-wrap'>
     <FormCard users={users}/>
    
    
    </div>
  )
}

export default FormCards
