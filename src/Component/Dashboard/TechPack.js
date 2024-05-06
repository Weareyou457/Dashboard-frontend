import React, { useState,useEffect } from 'react'
import "./TechPack.css"
import "./TechPackData.css"
const TechPack = () => {

  const [style, setStyle] = useState("")
  const [category, setCategory] = useState("")
  const [collection, setCollection] = useState("")
  const [pdf, setPdf] = useState("")


  const handleClick = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const formData = new FormData();
    formData.append("style", style);
    formData.append("category", category);
    formData.append("collectionss", collection);
    formData.append("pdf", pdf);

    try {
      const response = await fetch("http://localhost:8080/TechPack/add", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };


  const [data, setData] = useState([])
    const [records, setrecords] = useState([])
    useEffect(() => {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch("http://localhost:8080/TechPack/get", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                // console.log(result.data)
                setData(result.data)
                setrecords(result.data)
            })
            .catch((error) => console.error(error))
    }, [])

    const Filter = (event)=>{
        setrecords(data.filter(f=>
           
            f.category.toLowerCase().includes(event.target.value)
        ))
    }

    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
      };

    const hello=(_id,pdf_url)=>{
        console.log(_id)
        console.log(pdf_url)
        
        openInNewTab(`http://localhost:8080/uploads/${pdf_url}`)
    }
  

  return (
  <div className='hdbeb'>
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

          <button className="sumbit" onClick={handleClick}>Submit</button>
        </div>
      </form>
    </div>

    <div className='marginn'>
                <div> <h1 className='hello'>TechPack Data</h1></div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><input type="text" className='form-control' onChange={Filter} placeholder='Search By Category' /></div>
                <div className="table-container">
                    <table className="table-rwd">
                        <tbody>
                            <tr>
                                <th />
                                <th>category</th>
                                <th>Collections</th>
                                <th>Style</th>
                                <th>PDF url</th>

                            </tr>

                            {
                                records.map((data, index) => {
                                    return (
                                        <tr key={index}>
                                            <td style={{ color: "black" }}>{index + 1}</td>
                                            <td>{data.category}</td>
                                            <td>{data.collectionss}</td>
                                            <td>{data.style}</td>
                                            <td ><div onClick={() => hello(data._id, data.pdf)}>{data.pdf}</div></td>

                                        </tr>
                                    )
                                })
                            }


                        </tbody>
                    </table>
                </div>
            </div>





    </div>
  )
}

export default TechPack
