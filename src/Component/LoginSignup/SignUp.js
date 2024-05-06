import React, { useState } from 'react'
import './SignUp.css'
import email from "../Assets/email.png"
import password from "../Assets/password.png"
import person from "../Assets/person.png"
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

    const navigate = useNavigate()
    const [value, setValue] = useState("");
    const [isPassword, setPassword] = useState("")
    const [Name, setName] = useState("")
    const [Phone, setPhone] = useState("")


    const handleSubmit = (value, isPassword, Name,Phone) => {
       
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "name": Name,
            "emailId": value,
            "mobile": Phone,
            "password": isPassword
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,

        };

        fetch("http://localhost:8080/Admin/user/register", requestOptions)
            .then((res) => res.json())
            .then((result) => {console.log(result)
                navigate("/")})
            .catch((error) => console.error(error));

    }
    return (
        <div className='container'>
            <div className="header">
                <div className="text">
                    Sign Up
                </div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={person} alt="" />
                    <input type="text" placeholder='Enter Your Name' value={Name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="input">
                    <img src={email} alt="" />
                    <input type="email" placeholder='Enter Your Email' value={value} onChange={(e) => setValue(e.target.value)} />
                </div>
                <div className="input">
                    <img src={person} alt="" />
                    <input type="text" placeholder='Enter Your Phone' value={Phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="input">
                    <img src={password} alt="" />
                    <input type="password" placeholder='Enter Your Password' value={isPassword} onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>
            <div className="forgotpassword">Lost Password? <span>Click Here</span></div>
            <div className="sumbitcontainer">
                <div className="sumbit" onClick={() => { handleSubmit(value, isPassword, Name,Phone) }}>Sign Up</div>
            </div>
            <div className='aabc'>If you have Alredy account ? <span onClick={() => {
                navigate("/");
            }}>Login</span></div>
        </div>
    )
}

export default SignUp
