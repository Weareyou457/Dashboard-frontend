import React, { useState } from 'react'
import "./TechPack.css"
const TechPack = () => {

  const [style, setStyle] = useState("")
  const [category, setCategory] = useState("")
  const [collection, setCollection] = useState("")
  const [pdf, setPdf] = useState("")


  const handleClick = (style, category, collection, pdf) => {

    console.log(style);
    console.log(category);
    console.log(collection);
    console.log(pdf);

    const formdata = new FormData();
    formdata.append("style", style);
    formdata.append("category", category);
    formdata.append("collectionss", collection);
    formdata.append("pdf", pdf);

    const requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow"
    };

    fetch("http://localhost:8080/TechPack/add", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }


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
              placeholder="Style no."
              value={style}
              onChange={(e) => {
                setStyle(e.target.value)
              }}

            />
          </div>

          <div className="field">
            <label>Category:</label>
            <input
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value)
              }}

            />
          </div>

          <div className="field">
            <label>Collection:</label>
            <input
              type="text"
              placeholder="Collection"
              value={collection}
              onChange={(e) => {
                setCollection(e.target.value)
              }}

            />
          </div>
          <div className="field">
            <label>PDF:</label>
            <input
              type="file"
              placeholder="PDF"
              onChange={(e) => {
                setPdf(e.target.files[0])
              }}
            />
          </div>

          <button className="sumbit" onClick={() => { handleClick(style, category, collection, pdf) }}>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default TechPack
