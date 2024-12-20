import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LogIn = () => {

    let username = ""

    const navigate = useNavigate()


    const submitHandler = (event)=>{

        event.preventDefault()
        window.localStorage.setItem("username", username)
        navigate("/report")
    
    }

    const changeHandler = (event) =>{

        username = event.target.value

    }

    return (
        <>

           
            <div className='container mt-5'>
                <div className='row justify-content-center'>
                    <div className="card" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <form onSubmit={submitHandler}>
                                <div className="mb-3">
                                    <label className="form-label">Username</label>
                                    <input onChange={changeHandler}  type="text" className="form-control" />
                                </div>

                                <button className='btn btn-dark'>Sign In</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}