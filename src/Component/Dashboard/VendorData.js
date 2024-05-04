import React, { useEffect, useState } from 'react'
import "./VendorData.css"
const VendorData = () => {

    const [data, setData] = useState([])
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
            })
            .catch((error) => console.error(error))
    }, [])


    return (
        <>

            <div className='marginn'>
                <div> <h1 className='hello'>Vendor Data</h1></div>

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
                                data.map((data, index) => {
                                    return (
                                        <tr>
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
