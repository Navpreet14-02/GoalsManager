import React, { useEffect, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import { FaUser } from 'react-icons/fa';
import { register, reset } from '../features/Auth/authSlice';
import Spinner from '../components/Spinner';

function Register() {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPass: '',
    })

    // console.log(userData);
    const { name, email, password, confirmPass } = userData;

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user,isLoading,isError,isSuccess,message} = useSelector((state)=>state.auth)

    useEffect(() => {
      if(isError){
        toast.error(message)
      }
      
      if(isSuccess || user){
        navigate('/')
      }

      dispatch(reset())

    }, [user,isError,isSuccess,message,navigate,dispatch])
    


    function changeUserData(e){
        const {name,value} = e.target;

        setUserData(prevData=>{
            return {...prevData,[name]:value}
        })
    }

    const onSubmit=(e)=>{
        e.preventDefault()

        if(password!==confirmPass){
            toast.error('Passwords do not match')
        }
        else{
            const user = {
                name,email,password,
            }
            dispatch(register(user))
        }
    }

    if(isLoading){
        return <Spinner/>
    }

    return (
        <>
            <section className="heading">
                <h1><FaUser /> Register</h1>
                <p>Please Create an account</p>
            </section>
            <section className="form">
                <form action="" onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type="text" className="form-control" id='name' name='name' value={name} placeholder='Enter your Name' onChange={(e)=>changeUserData(e)} />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" id='email' name='email' value={email} placeholder='Enter your Email' onChange={(e)=>changeUserData(e)} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id='passwd' name='password' value={password} placeholder='Enter Password' onChange={(e)=>changeUserData(e)} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id='confirmPwd' name='confirmPass' value={confirmPass} placeholder='Confirm Password' onChange={(e)=>changeUserData(e)} />
                    </div>
                    <div className="form-group">
                        <button type='submit' className="btn btn-block">Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Register