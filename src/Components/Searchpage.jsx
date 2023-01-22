
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Searchdisplay from './Searchdisplay'
import useFetch from './useFetch'

const Searchpage = () => {
   let {searchval}=useParams()

   let {students}=useFetch("http://localhost:7000/students")
  return (
    <div>
     {/* <h1>input:{searchval}</h1> */}
     
     <Searchdisplay student={students.filter((member)=>{return member.Name.toLowerCase().includes(searchval.toLowerCase())})}/>
     
    </div>
  )
}

export default Searchpage