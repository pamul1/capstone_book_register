import React, { useState } from 'react'

export const Form = () => {

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [genre, setGenre] = useState("")
    const [publication_year, setPublication] = useState("")

    let url = import.meta.env.VITE_URL
    let token = import.meta.env.VITE_TOKEN

    
    const username = localStorage.getItem("username")
    

    const changeHandlerTitle = (event) => {
        setTitle(event.target.value)
    }

    const changeHandlerAuthor = (event) => {
        setAuthor(event.target.value)
    }

    const changeHandlerGenre = (event) => {
        setGenre(event.target.value)
    }

    const changeHandlerPublication = (event) => {
        setPublication(event.target.value)
    }


    const submitHandler = async () => {

        event.preventDefault()

        let tempBook = {
            title,
            author,
            genre,
            publication_year,
            username
        }

        let newURL = `${url}/book_register`

        let response = await fetch(newURL, {
            method: "POST",
            headers: {
                'Authorization': token,
                'apikey': token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tempBook)
        })

        if (response.ok) {
            setTitle("")
            setAuthor("")
            setGenre("")
            setPublication("")

        } else {
            let err = await response.json()
            console.log(err)
          }
    }


    return (
        <>
            <h1 className='text-center'>Book Form</h1>
            <div className='container-fluid'>
                <form onSubmit={submitHandler}>

                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input onChange={changeHandlerTitle} type="text" className="form-control" value={title} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Author</label>
                        <input onChange={changeHandlerAuthor} type="text" className="form-control" value={author} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Genre</label>
                        <input onChange={changeHandlerGenre} type="text" className="form-control" value={genre} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Publication</label>
                        <input onChange={changeHandlerPublication} type="number" className="form-control" value={publication_year} />
                    </div>

                    <button className='btn btn-primary w-100' > Send Data </button>
                </form>
            </div>
        </>
    )
}