import React, { useState } from 'react'
import './SignUp.css'
import hello from "../Assets/email.png"
import password from "../Assets/password.png"
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate();
    const [value, setValue] = useState("");
    const[isPassword,setPassword]=useState("")
    const[Message,setMessage]=useState("")
    
    const handleSubmit = (value,isPassword) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        const raw = JSON.stringify({
          "emailId": value,
          "password": isPassword,
        });
        
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow"
        };
        
        fetch("http://localhost:8080/Admin/user/login", requestOptions)
          .then((response) => response.text())
          .then((json) => {
            console.log(json)
            console.log(json.status)
                if(json){
                    setMessage(json.message)
                    navigate("/main")
                }
                else{
                    setMessage(json.message)
                }
              }
        )
          .catch((error) => console.error(error));
        
      }
    return (
        
    <div className='container'>
        <div className="header">
            <div className="text">
                Login
            </div>
            <div className="underline"></div>
        </div>
        
        <div className="inputs">
            <div className="input">
                <img src={hello} alt=""  />
                <input type="email" placeholder='Enter Your Email' value={value} onChange={(e)=>setValue(e.target.value)}/>
            </div>
            <div className="input">
                <img src={password} alt="" />
                <input type="password" placeholder='Enter Your Password' value={isPassword} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
        </div>
        <div className="message">{Message}</div>
        <div className="forgotpassword">Lost Password? <span>Click Here</span></div>
        <div className="sumbitcontainer">
            <div className="sumbit" onClick={()=>{handleSubmit(value,isPassword)}}>Login</div>
        </div>
        <div className='hello' style={{paddingLeft:100}}>If you Dont have Alredy account ? <span onClick={()=>{
            navigate("/SignUp");
        }}>Sign Up</span></div>
    </div>
   
  )
}

export default Login
