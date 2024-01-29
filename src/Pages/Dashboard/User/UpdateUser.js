
import { useEffect, useState } from 'react';
import SubmitComponent from '../../../component/Forms/SubmitComponent';
export default function UpdateUser() {
    const [name,setName]=useState("")
    const [lastName,setLastName]=useState("")
    const [email,setEmail]=useState("")
    const id=window.location.pathname.split("/").slice(-1)[0];
    // const [flag,setFlag]=useState(false)
    // console.log("HEELLO");
      useEffect(()=>{
        fetch(`http://localhost:5001/api/users/${id}`)
        .then((res)=>res.json())
        .then((res)=>{
            setName(res.data.firstName);
            setLastName(res.data.lastName);
            setEmail(res.data.email);
            // setEmail(data[0].email)
            // setUsers(res.data);
        })

    },[])
//    async function Submit(e) {
//         let flag =true;
//         e.preventDefault();
//         setAccept(true)
//         if(name===''||password.length<8||password!==passwordR){
//             flag=false;
//         }else {
//             flag=true;
//         }
//         // console.log(flag);
//         try {
//             if (flag===true) {
//                 // console.log("HI");
//                 let response=await axios.patch(`http://localhost:5001/api/users/${id}`,{
//                     firstName:name,
//                     lastName:lastName,
//                     email:email,
//                     password:password
//                 });
//                 // Send info
//                 console.log(response.status);
//                 if (response.status===200) {
//                     // console.log("respose is "+response.status);
//                     window.localStorage.setItem(
//                         'email',email
//                     )
//                     window.location.pathname="/dashboard/users";
//                 }
//     }
            
//         } catch (error) {
//             setEmailError(error.response.status)
//             // {
//             //     setEmailError="<p>ERROR</p>"
//             // }
//         }
        
//     }
    return (
           <div> 
            <h1>Update User</h1>        
               <SubmitComponent button="Update Information" 
                name={name}
                email={email}
                secondName={lastName}
                method="update"
                url={`users/${id}`}
                id={id}
                title="Update Here"
                localStorage={false}
                 />
           </div>
    )
}