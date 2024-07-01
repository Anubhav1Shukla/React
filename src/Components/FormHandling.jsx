import React, { useRef, useState } from 'react'

function FormHandling() {

            //UseReference
    // const name=useRef(null);
    // const age=useRef(null);
    // const email=useRef(null);
    // const handleSubmit =(details)=>{
    //     details.preventDefault();
    //     console.log(name.current.value,age.current.value,email.current.value,email.current.value)
    // }

           //controlled components
    // const [val,setVal]=useState({name:" ", email:""})

    // const handleSubmit =(details)=>{
    //     details.preventDefault();
    //     console.log(val);
    // }
                    //Hook

  return (
                //UseRefrence
    // <form action="" onSubmit={handleSubmit}>
    //     <input ref={name} type="text"  placeholder='name' />
    //     <input ref={age} type="text" placeholder='age' />
    //     <input ref={email} type="text" placeholder='Email' />
    //     <input type="Submit" />
    // </form>

        //Controlled components
        // <form action="" onSubmit={handleSubmit}>
        //     <input onChange={(event)=>setVal({...val,name:event.target.value})} type="text" placeholder='name' />
        //     <input onChange={(event)=>setVal({...val,email:event.target.value})} type="email" placeholder='email' />
        //     <input type="Submit" />
        // </form>


        //Hook
        <form action="">
            
        </form>

  )
}

export default FormHandling



//form handling
// form submission par website reload ho jati hai aur react ka main focus ye hai ki webpage reload nahi hona chaiye varna kya fayada react ka
// three tyes to handle form reloading
// useRef = is tareeke mein hum har input ko select kar lete hai and unki value tab nikaalte hai jab form submit hota hai. useRef ke through kisi bhi html input ko select kar sakte ho
// controlled componenets = aap jab bhi kuch likhe useState ke through data real time par update kar dein jaise hi kuch type ho set state kar do nayi value ke barabar
// react hook form