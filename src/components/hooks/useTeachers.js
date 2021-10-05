import { useEffect, useState } from "react"

// load all the teachers 
const useTeachers = () => {
    const [teachers, setTeachers]= useState([]);

    useEffect(()=>{
        fetch('./teachers.JSON')
        .then(res=>res.json())
        .then(data=> setTeachers(data))
    },[]);

    return [teachers];

}

export default useTeachers;