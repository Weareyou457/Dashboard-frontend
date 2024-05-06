import React, { useEffect, useState } from 'react'
import "./VendorData.css"
const VendorData = () => {

    const [data, setData] = useState([])
    const [records, setrecords] = useState([])

    useEffect(() => {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch("http://localhost:8080/vendor/get", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result.data)
                setData(result.data)
                setrecords(result.data)
            })
            .catch((error) => console.error(error))
    }, [])


    const Filter = (event)=>{
        setrecords(data.filter(f=>
           
            f.name.toLowerCase().includes(event.target.value)
        ))
    }

    return (
        <>

            <div className='marginn'>
                <div> <h1 className='hello'>Vendor Data</h1></div>

                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><input type="text" className='form-control' onChange={Filter} placeholder='Search By Name'/></div>

                <div className="table-container">
                    <table className="table-rwd">
                        <tbody>
                            <tr>
                                <th />
                                <th>Name</th>
                                <th>Contact</th>
                                <th>Performane</th>
                                <th>rating</th>

                            </tr>

                            {
                                 records.map((data, index) => {
                                    return (
                                        <tr key={index}>
                                            <td style={{ color: "black" }}>{index + 1}</td>
                                            <td>{data.name}</td>
                                            <td>{data.contact}</td>
                                            <td>{data.performance}</td>
                                            <td>{data.rating}</td>

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

export default VendorData
