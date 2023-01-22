import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import useFetch from './useFetch'

const Update = () => {
let history=useHistory()
 let {id}=useParams();
        let  {students:stud}= useFetch(`http://localhost:7000/students/${id}`)

    let [Name,setName]=useState(stud.Name)
  let [Gender,setGender]=useState(stud.Gender)
  let [Age,setAge]=useState(stud.Age)
  let [Contact_num,setContact_num]=useState(stud.Contact_num)
  let [Room_num,setRoom_num]=useState(stud.Room_num)
  let [Rent,setRent]=useState(stud.Rent)

     console.log(stud)
const handleUpdate=(e)=>{
   
    e.preventDefault(stud);
  
    let details={Name,Gender,Age,Contact_num,Room_num,Rent}
    
    fetch(`http://localhost:7000/students/${stud.id}`,{
           
            method:"PUT",
            headers:{
              "Accept":"application/json",
              "Content-Type":"application/json"},
            body:JSON.stringify(details)
           }                   
    )
    .then(()=>{
      alert("Student deatails updated");
      history.push("/home")});
        }

  return (
    <div className='updiv'>
         <form className='updateform'>
          <div>
            <label htmlFor='Name' >Name:</label><input type="text" value={Name} onChange={(e)=>{setName(e.target.value)}} />
            <label htmlFor='Gender'>Gender:</label><input type="text" value={Gender} onChange={(e)=>{setGender(e.target.value)}} />
            <label htmlFor='Age'>Age:</label><input type="number" value={Age} onChange={(e)=>{setAge(e.target.value)}} />
            <label htmlFor='Contact_num'>Contact_num:</label><input type="tel" value={Contact_num} onChange={(e)=>{setContact_num(e.target.value)}}/>
            <label htmlFor='Room_num'>Room_num:</label><input type="number" value={Room_num} onChange={(e)=>{setRoom_num(e.target.value)}}/>
            <label htmlFor='Rent'>Rent:</label><input type="number" value={Rent} onChange={(e)=>{setRent(e.target.value)}} />
            <button id='upbut' onClick={handleUpdate}>Submit</button>
            </div>
          
        </form>
    </div>
  )
}

export default Update