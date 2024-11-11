import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Axiosss=()=>{
    const[email,setEmail]=useState([])

    useEffect(()=>{
        data={
            "token": "string" ,// Token de sesión generado en el sistema de usuarios.
            "userId": "string" // Id del usuario del cual se consultan los correos.
            }
        axios.get("/email",data)
        .then(res => {
            console.log(res.data);
            if(res.status===200){
                setEmail(res.data);
            }else{
                alert("Salio mal ");
            }
            
        })
        .catch((err) => console.log(err))

    },[])
    return(
        <>
        {email.map((data,i)=>{
            return(
                <div key={i}>
                    <h1>{data}</h1>
                </div>
            )
        })}
        </>
    )
};
export default Axiosss;