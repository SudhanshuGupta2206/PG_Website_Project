import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import useFetch from './useFetch'

const AddStudents = () => {

  let history=useHistory()

  let [Name,setName]=useState("")
  let [Gender,setGender]=useState("")
  let [Age,setAge]=useState("")
  let [Contact_num,setContact_num]=useState("")
  let [Room_num,setRoom_num]=useState("")
  let [Rent,setRent]=useState("")
  // let {students}= useFetch("http://localhost:5000/students")

const handleSubmit=(e)=>{

  e.preventDefault();

  let studDetails={Name,Gender,Age,Contact_num,Room_num,Rent}
  
  fetch("http://localhost:7000/students",{
         
          method:"POST",
          headers:{
            "Accept":"application/json",
            "Content-Type":"application/json"},
          body:JSON.stringify(studDetails)
         }                   
  )
  .then(()=>{
    alert("Student deatails added");
    history.push("/home")})
}

  return (
    <div className='formbox'>
        <form >
          <div>
            <label htmlFor='Name' >Name:</label><input type="text" value={Name} onChange={(e)=>{setName(e.target.value)}} />
            <label htmlFor='Gender'>Gender:</label><input type="text" value={Gender} onChange={(e)=>{setGender(e.target.value)}} />
            <label htmlFor='Age'>Age:</label><input type="number" value={Age} onChange={(e)=>{setAge(e.target.value)}} />
            <label htmlFor='Contact_num'>Contact_num:</label><input type="tel" value={Contact_num} onChange={(e)=>{setContact_num(e.target.value)}}/>
            <label htmlFor='Room_num'>Room_num:</label><input type="number" value={Room_num} onChange={(e)=>{setRoom_num(e.target.value)}}/>
            <label htmlFor='Rent'>Rent:</label><input type="number" value={Rent} onChange={(e)=>{setRent(e.target.value)}} />
            <button id='addbut2' onClick={handleSubmit}>Submit</button>
            </div>
          
        </form>
    </div>
  )
}

export default AddStudents

// {history.push("/home")}