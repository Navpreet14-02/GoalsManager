import React, { useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa';

function Login() {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })

    // console.log(userData);
    const {email, password} = userData;

    function changeUserData(e){
        const {name,value} = e.target;

        setUserData(prevData=>{
            return {...prevData,[name]:value}
        })
    }

    const onSubmit=(e)=>{
        e.preventDefault()
    }

    return (
        <>
            <section className="heading">
                <h1><FaSignInAlt /> Login</h1>
                <p>Login and start setting goals</p>
            </section>
            <section className="form">
                <form action="" onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type="email" className="form-control" id='email' name='email' value={email} placeholder='Enter your Email' onChange={(e)=>changeUserData(e)} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id='passwd' name='password' value={password} placeholder='Enter Password' onChange={(e)=>changeUserData(e)} />
                    </div>
                    <div className="form-group">
                        <button type='submit' className="btn btn-block">Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Login