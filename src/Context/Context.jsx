import { createContext, useState } from "react";





export const UserContext=createContext();


const Context = (props) => {
    const [users,setUsers] = useState([
    {id:0, username:"Anubhav", email:"stock@gmail.com", city:"India"},
    {id:1, username:"Ayush", email:"Trading@gmail.com", city:"Germany"},
    {id:2, username:"Arpit", email:"arp@gmail.com", city:"USA"},
    {id:3, username:"Ajeet", email:"ajet@gmail.com", city:"South-Africa"},
    ])



  
  return <UserContext.Provider value={{users,setUsers}}>{props.children}</UserContext.Provider>;
}

export default Context
