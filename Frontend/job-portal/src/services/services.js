import axios from 'axios'
import App from '../App'

const API_URL = "http://localhost:8080"

export const getJobs =  () =>{
    return axios.get(`${API_URL}/jobs`)
}

export const addJob = (job) =>{
    return axios.post(`${API_URL}/jobs`,job)
}

export const updateJob = (id,job) =>{
    return axios.put(`${API_URL}/jobs/${id}`,job)
}

export const deleteJob = (id) =>{
    return axios.delete(`${API_URL}/jobs/${id}`)
}

export const getJobById = (id) =>{
    return axios.get(`${API_URL}/jobs/${id}`)
}

export const searchJobs = (keyword) =>{
    return axios.get(`${API_URL}/jobs/search?keyword=${keyword}`)
}

export const getJobByPage = (page,size) =>{
    return axios.get(`${API_URL}/jobs/page?page=${page}&size=${size}`)
}

export const getJobsByLocation = (location) =>{
    return axios.get(`${API_URL}/jobs/location?location=${location}`)
}

export const getJobsBySkill = (skill) =>{
    return axios.get(`${API_URL}/jobs/skill?skill=${skill}`)
}

export const getJobsBySalary = (salary) =>{
    return axios.get(`${API_URL}/jobs/salary?salary=${salary}`)
}

export const getJobsByCompany = (company) =>{
    return axios.get(`${API_URL}/jobs/company?company=${company}`)
}

export const getJobsSorted = (page,size,sortBy) =>{
    return axios.get(`${API_URL}/jobs/page?page=${page}&size=${size}&sortBy=${sortBy}`)
}

export const getJobscount = () =>{
    return axios.get(`${API_URL}/jobs/count`)
}

export const getFilterJobs = (location,skill,company,salary,sortBy)=>{
    return axios.get(`${API_URL}/jobs/filter`,
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
    return axios.get(`${API_URL}/jobs/locations`)
}

export const getCompanies = ()=>{
    return axios.get(`${API_URL}/jobs/companies`)
}

export const getSkills = ()=>{
    return axios.get(`${API_URL}/jobs/skills`)
}