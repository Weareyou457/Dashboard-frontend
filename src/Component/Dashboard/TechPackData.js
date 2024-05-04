import React, { useEffect, useState } from 'react'
import "./TechPackData.css"

const TechPackData = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        const requestOptions = {
            method: "GET",
            redirect: "follow"
        };

        fetch("http://localhost:8080/TechPack/get", requestOptions)
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
                <div> <h1 className='hello'>TechPack Data</h1></div>

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
                                data.map((data, index) => {
                                    return (
                                        <tr>
                                            <td style={{ color: "black" }}>{index + 1}</td>
                                            <td>{data.category}</td>
                                            <td>{data.collectionss}</td>
                                            <td>{data.style}</td>
                                            <td>{data.pdf}</td>

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

