import React, { useEffect, useState } from 'react'
import "./TechPackData.css"

const TechPackData = () => {

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

    const Filter = (event) => {
        setrecords(data.filter(f =>

            f.category.toLowerCase().includes(event.target.value)
        ))
    }

    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
    };

    const hello = (_id, pdf_url) => {
        console.log(_id)
        console.log(pdf_url)

        openInNewTab(`http://localhost:8080/uploads/${pdf_url}`)
    }

    return (
        <>

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
        </>



    )
}

export default TechPackData

