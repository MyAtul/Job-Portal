import axios from 'axios'
import App from '../App'

const API_URL = "https://job-portal-backend-2913.onrender.com"

const api = axios.create({
    baseURL:API_URL
})

api.interceptors.request.use((config)=>{

    const token = localStorage.getItem("token")

    if(token){

        console.log(
            "seding Headre:",
            `Bearer ${token}`
        )
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})

export const getJobs =  () =>{
    return api.get(`${API_URL}/jobs`)
}

export const addJob = (job) =>{
    return api.post(`${API_URL}/jobs`,job)
}

export const updateJob = (id,job) =>{
    return api.put(`${API_URL}/jobs/${id}`,job)
}

export const deleteJob = (id) =>{
    return api.delete(`${API_URL}/jobs/${id}`)
}

export const getJobById = (id) =>{
    return api.get(`${API_URL}/jobs/${id}`)
}

export const searchJobs = (keyword) =>{
    return api.get(`${API_URL}/jobs/search?keyword=${keyword}`)
}

export const getJobByPage = (page,size) =>{
    return api.get(`${API_URL}/jobs/page?page=${page}&size=${size}`)
}

export const getJobsByLocation = (location) =>{
    return api.get(`${API_URL}/jobs/location?location=${location}`)
}

export const getJobsBySkill = (skill) =>{
    return api.get(`${API_URL}/jobs/skill?skill=${skill}`)
}

export const getJobsBySalary = (salary) =>{
    return api.get(`${API_URL}/jobs/salary?salary=${salary}`)
}

export const getJobsByCompany = (company) =>{
    return api.get(`${API_URL}/jobs/company?company=${company}`)
}

export const getJobsSorted = (page,size,sortBy) =>{
    return api.get(`${API_URL}/jobs/page?page=${page}&size=${size}&sortBy=${sortBy}`)
}

export const getJobscount = () =>{
    return api.get(`${API_URL}/jobs/count`)
}

export const getFilterJobs = (location,skill,company,salary,sortBy)=>{
    return api.get(`${API_URL}/jobs/filter`,
        {
            params:{
                location,
                skill,
                company,
                salary,
                sortBy
            }
        }
        
    )
}

export const getLocations = ()=>{
    return api.get(`${API_URL}/jobs/locations`)
}

export const getCompanies = ()=>{
    return api.get(`${API_URL}/jobs/companies`)
}

export const getSkills = ()=>{
    return api.get(`${API_URL}/jobs/skills`)
}

export const loginUser = (user) =>{
    return axios.post(`${API_URL}/auth/login`,user)
}

export const registerUser = (user)=>{
    return axios.post(`${API_URL}/auth/register`,user)
}