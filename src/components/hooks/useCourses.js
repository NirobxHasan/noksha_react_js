
import { useState, useEffect  } from 'react';

// fetch course information 
const useCourses = () =>{
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('./data.JSON')
            .then(res=>res.json())
            .then(data=>  setCourses(data))
    },[])
    return [courses, setCourses];
} 


export default useCourses;