
import  { useEffect, useState } from 'react'
const useFetch = (request) => {
    let [students,SetStudents]=useState([])
    useEffect(()=>{
        let student=fetch(request)
        student.then((response)=>{ return response.json()} )
        .then((data)=>{SetStudents(data)})
      },[])
  return {students}
}

export default useFetch