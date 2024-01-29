import { useEffect, useState } from 'react';
import '../../../style.css';
import axios  from "axios";
import Header from '../../../component/Header';
import SubmitComponent from '../../../component/Forms/SubmitComponent';
export default function SignUp() {
    const [name,setName]=useState("")
    const [lastName,setLastName]=useState("")
    const [email,setEmail]=useState('')
   
  
    return (
        <div>
            <Header/>
            <SubmitComponent 
            button="Sign Up"
             name={name} 
             email={email}
             secondName={lastName}
             method="post"
             url="register"
             location='/home'
             title="Register"
             localStorage={true}
             />
        </div>

    )
}