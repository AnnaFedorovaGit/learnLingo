import axios from "axios";


const instance = axios.create({
    baseURL: "https://learnlingo-64672-default-rtdb.europe-west1.firebasedatabase.app/",
})

export const requestAllTeachers = async () => { 
    const { data } = await instance.get('/teachers');
    return data;
} 