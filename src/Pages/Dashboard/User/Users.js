import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function User() {
    const [users,setUsers]=useState([])
    const [runUseEffect,setrunUseEffect]=useState(0)
    async function deleteUser(id){
        try {
            const res=await axios.delete(`http://localhost:5001/api/users/${id}`)
            if(res.status===200){
            setrunUseEffect((pre)=>pre+1)
        }
        } catch (error) {
            console.log("None")
        }
      
    }
    useEffect(()=>{
        fetch('http://localhost:5001/api/users')
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res.data);
            setUsers(res.data);
        })

    },[runUseEffect])
    // useEffect(()=>{
    //     fetch(`http://localhost:5001/api/users/65b4b523494accf65914f45c`)
    //     .then((res)=>res.json())
    //     .then((res)=>{
    //         console.log(res.data);
    //         // setUsers(res.data);
    //     })

    // },[])
    const showUsers=users.map((user,index)=>
    <tr key={index}>
        <td>{index+1}</td>
        <td>{user.firstName}</td>
        <td>{user.email}</td>
        <td>
            <Link to={`${user._id}`} >
        <i className="fa-solid fa-pen" style={{
            color:"#74afb9",
            fontSize:"20px",
            paddingRight:"4px",
            cursor:'pointer'

        }}></i>
        </Link>
            <i 
            onClick={()=>deleteUser(user._id)}
            className="fa-solid fa-trash" style={{
            color:'#df0000',
            fontSize:"20px",
            cursor:'pointer'
            }}></i> 
            </td>
        </tr>
        )
    return (
        <div style={{padding:"20px"}}>
            <table>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                        {showUsers}
                </tbody>
                <tfoot></tfoot>
            </table>
        </div>
    )
}