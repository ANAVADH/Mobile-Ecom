import axios from "axios"

const BASE_URL = "http://localhost:8080/api/"
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)?.user?.token;
console.log(TOKEN)



export const publicRequest = axios.create({
    baseURL:BASE_URL,
    // headers: {
    //     'Content-Type': 'application/json'
    // },
    // withCredentials: true
})


export const USERRequest = axios.create({
    baseURL:BASE_URL,
    headers:{Authorization:`Bearer ${TOKEN}`}
})