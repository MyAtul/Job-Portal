import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../services/services'
import { toast } from 'react-toastify'

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async (e)=>{
        e.preventDefault()

        try{
            const response = await loginUser({
                username,
                password
            })

            localStorage.setItem("token",response.data.token)

            toast.success("Login Successfull")
            navigate("/")
        }catch(error){

            toast.error("Invalid Username or Password")
            console.log(error)
        }
    }
  return (
    <div className='min-h-screen flex items-center justify-center'>

        <form
            onSubmit={handleSubmit}
            className='bg-amber-50 p-8 rounded-lg w-96'
        >

            <h1 className='text-2xl font-bold mb-6 text-center text-black'>
                Login
            </h1>

            <input
                type='text'
                placeholder='Username'
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                className='w-full p-3 mb-4 rounded text-black'
            />

            <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className='w-full p-3 mb-4 rounded text-black'
            />
            
            <div className='w-full flex justify-center'>
                <button
                type='submit'
                className=' bg-green-500 py-3 rounded w-36 hover:bg-green-600 active:scale-95'
            >
                Login
            </button>
            </div>
            

        </form>

    </div>
  )
}

export default Login