import React from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from "react-router-dom";

const Table = ({students,column}) => {

    let history=useHistory()
    
   let handleDelete=(id)=>{
    fetch(`http://localhost:7000/students/${id}`,{method:"DELETE"})
    .then(()=>{window.location.reload();})
}
  return (
    <div>
        
        
        <table border={2}>

<thead>
 <tr>
   {column.map((item)=>{ return <th>{item.heading}</th>})}
 </tr>
 </thead> 
 <tbody>

{ students.map((candidate,index)=>{
   return (

      
     <tr key={index}>
     <td>{candidate.Name}</td>
     <td>{candidate.Gender}</td>
     <td>{candidate.Age}</td>
     <td>{candidate.Contact_num}</td>
     <td>{candidate.Room_num}</td>
     <td>{candidate.Rent}</td>
     <td><Link to={`/update${candidate.id}`}><button id='edit' >Edit</button></Link>
    &nbsp; <button id='deletebut' onClick={()=>{handleDelete(candidate.id)}}>Delete</button></td>
    
   </tr>
   
   

   
)})}</tbody>
 
 
</table>




    </div>
  )
}

export default Table