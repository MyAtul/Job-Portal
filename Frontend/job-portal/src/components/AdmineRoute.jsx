import React from 'react'
import { getRole } from '../utils/auth'
import { Navigate } from 'react-router-dom'

const AdmineRoute = ({children}) => {

    const token = localStorage.getItem("token")
    const role = getRole()

    if(!token){
        return <Navigate to='/login'/>
    }

    if(role !=='ADMIN'){
        return <Navigate to='/'/>
    }

  return children
}

export default AdmineRoute