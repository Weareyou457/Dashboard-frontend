import React, { useState } from 'react'
import "./TechPack.css"
const Vendor = () => {

  const [name, setName] = useState("")
  const [contact, setContact] = useState("")
  const [performance, setPerformance] = useState("")
  const [rating, setRating] = useState("")
  const [res, setRes] = useState("")

  const handleClick = (name, contact, performance, rating) => {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "name": name,
      "contact": contact,
      "performance": performance,
      "rating": rating
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("http://localhost:8080/vendor/add", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        setRes(result.message)
        console.log(result.message)
      }
      )
      .catch((error) => console.error(error));


  }

  return (
    <div className='alfaiz' >
      <div >
        <h1>Vendor Details</h1>
        <div className="ui divider"></div>
        <div className="form">
          <div className="field">
            <label>Vendor Name:</label>
            <input
              type="text"

              placeholder="Vendor Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
            />
          </div>

          <div className="field">
            <label>Contact Info:</label>
            <input
              type="text"

              placeholder="Contact Info"
              value={contact}
              onChange={(e) => {
                setContact(e.target.value)
              }}
            />
          </div>

          <div className="field">
            <label>Performance :</label>
            <input
              type="text"

              placeholder="Performance"
              value={performance}
              onChange={(e) => {
                setPerformance(e.target.value)
              }}
            />
          </div>

          <div className="field">
            <label>Rating :</label>
            <input
              type="text"

              placeholder="Rating"
              value={rating}
              onChange={(e) => {
                setRating(e.target.value)
              }}
            />
          </div>


          {res !== "" && <p >{res}</p>}

          <div className="sumbit" onClick={() => { handleClick(name, contact, performance, rating) }}>Submit</div>
        </div>
      </div>
    </div>
  )
}

export default Vendor
