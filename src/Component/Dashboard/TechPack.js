import React from 'react'
import "./TechPack.css"
const TechPack = () => {
  return (
    <div className='alfaiz'>
    <form >
        <h1>Tech Pack</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Style no.:</label>
            <input
              type="text"
              name="Styleno"
              placeholder="Style no."
             
            />
          </div>
          
          <div className="field">
            <label>Category:</label>
            <input
              type="text"
              name="Category"
              placeholder="Category"
              
            />
          </div>
         
          <div className="field">
            <label>Collection:</label>
            <input
              type="text"
              name="Collection"
              placeholder="Collection"
             
            />
          </div>
          <div className="field">
            <label>PDF:</label>
            <input
              type="file"
              name="PDF"
              placeholder="PDF"
             
            />
          </div>
         
          <button className="sumbit">Submit</button>
        </div>
      </form>
      </div>
  )
}

export default TechPack
