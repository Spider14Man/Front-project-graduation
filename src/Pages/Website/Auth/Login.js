import { useState } from 'react';
import '../../../style.css';
import axios  from "axios";
import Header from '../../../component/Header';
export default function Login() {
    const [email,setEmail]=useState('')
   
    const [password,setPassword]=useState('')
    const [accept,setAccept]=useState(false)
   
   async function Submit(e) {
    let flag=true;
        e.preventDefault();
        setAccept(true);
        if (password.length<8) {
            flag=false
        }else{
            flag=true
        }
        try {
            if (flag) {
                let response=await axios.post('http://localhost:5001/api/users/login',{
                    email:email,
                    password:password
                });
                console.log(response.status);
                if(response.status===200){
                    window.localStorage.setItem('email',email);
                    // window.location.pathname='/home'
                    console.log(response.data.token);
                }
                // Send info
    }
            
        } catch (error) {
            console.log((error.response.status));
            // {
            //     setEmailError="<p>ERROR</p>"
            // }
        }

    }
    return ( 
    <div>
        <Header/>
        <div className='root'>
            <form action="" className="wrapper" onSubmit={Submit}>
                <h1>Sign In</h1>
                
                <div className="input-box">
                    <input type="email" name="" id="" placeholder="Email"b value={email} required onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                {/* { accept&&emailError===400 && <p className="error">Email is Already Exists </p>} */}
                <div className="input-box">
                    <input type="password" name="" id="" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                {/* {password.length<8  &&<p className="error">password must be more than 8 character</p>} */}
               
          
           
           
                <button className="btn" type="submit">Login</button>
            
        </form>
        </div>
    </div>
    )
}