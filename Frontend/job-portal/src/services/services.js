import axios from 'axios'

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