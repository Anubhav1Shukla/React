import React, { useRef } from 'react'

function FormHandling() {
    const name=useRef(null);
    const age=useRef(null);
    const email=useRef(null);
    const handleSubmit =(details)=>{
        details.preventDefault();
        console.log(name.current.value,age.current.value,email.current.value,email.current.value)
    }

  return (
    <form action="" onSubmit={handleSubmit}>
        <input ref={name} type="text"  placeholder='name' />
        <input ref={age} type="text" placeholder='age' />
        <input ref={email} type="text" placeholder='Email' />
        <input type="Submit" />
    </form>
  )
}

export default FormHandling



//form handling
// form submission par website reload ho jati hai aur react ka main focus ye hai ki webpage reload nahi hona chaiye varna kya fayada react ka
// three tyes to handle form reloading
// useRef = is tareeke mein hum har input ko select kar lete hai and unki value tab nikaalte hai jab form submit hota hai. useRef ke through kisi bhi html input ko select kar sakte ho
// controlled componenets
// react hook form