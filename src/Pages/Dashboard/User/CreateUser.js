import { useState } from "react";
import SubmitComponent from "../../../component/Forms/SubmitComponent";

export default function CreateUser(){
    const [name,setName]=useState("")
    const [lastName,setLastName]=useState("")
    const [email,setEmail]=useState('')
    return (<div className="parent">
    <SubmitComponent 
            button="Sign Up"
             name={name} 
             email={email}
             secondName={lastName}
             method="post"
             url="register"
             location='/dashboard/users'
             title="Create User As Admin"
             localStorage={false}
             />
             </div>)
}