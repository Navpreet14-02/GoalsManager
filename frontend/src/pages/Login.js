import React, { useEffect, useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa';
import {useSelector,useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import { login, reset } from '../features/Auth/authSlice';
import Spinner from '../components/Spinner';

function Login() {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })

    // console.log(userData);
    const { email, password } = userData;

    // const { name, email, password, confirmPass } = userData;

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user,isLoading,isError,isSuccess,message} = useSelector  ((state)=>state.auth)

    useEffect(() => {
        if(isError){
          toast.error(message)
        }
        
        if(isSuccess || user){
          navigate('/')
        }
  
        dispatch(reset())
  
      }, [user,isError,isSuccess,message,navigate,dispatch])
      

    function changeUserData(e) {
        const { name, value } = e.target;

        setUserData(prevData => {
            return { ...prevData, [name]: value }
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const user = {
            email,password,
        }

        dispatch(login(user))
    }
    
    if(isLoading){
        return <Spinner/>
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
                        <input 
                        type="email" className="form-control" 
                        id='email' 
                        name='email' 
                        value={email} 
                        placeholder='Enter your Email' onChange={(e) => changeUserData(e)} />
                    </div>
                    <div className="form-group">
                        <input
                            type="password" className="form-control" id='passwd'
                            name='password'
                            value={password}
                            placeholder='Enter Password' onChange={(e) => changeUserData(e)} />
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