import React from 'react'
import { useEffect, useState } from 'react'

export const Report = () => {

    const [report, setReport] = useState([])

    const url = import.meta.env.VITE_URL
    const token = import.meta.env.VITE_TOKEN

    const getReport = async () => {
        let newURL = `${url}/book_register?order=id.desc`
        console.log(newURL)

        let response = await fetch(newURL, {
            method: "GET",
            headers: {
                "Authorization": token,
                "apikey": token
            }
        })
        console.log(response)
        if (response.ok) {
            let data = await response.json()
            console.log(data)
            setReport(data)

        }
    }

    useEffect(() => {
        getReport()

    })

    return (
        <>
            <h1 className="text-center">Book Register</h1>
            <table className='table'>

                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Genre</th>
                        <th>Publication</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        report.map((item) => (

                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>{item.author}</td>
                                <td>{item.genre}</td>
                                <td>{item.publication_year}</td>
                            </tr>

                        ))
                    }

                </tbody>

            </table>

        </>
    )
}