import React from 'react'

import Table from './Table';
import useFetch from './useFetch'


const Home = () => {
       

  

  
   let {students}= useFetch("http://localhost:7000/students")

 
   const column=[
    {heading:"Name" },
    {heading:"Gender" },
    {heading: "Age"},
    {heading:"Contact_num" },
    {heading: "Room_num"},
    {heading:"Rent" },
    {heading:"Modify" }
   ]
    
  
  
 

  return (
    <div className='table'>
      
              <Table students={students} column={column}/>
              
                
         
      
      
      </div>
  )
                    
}
export default Home


// npx json-server --watch data.json --port 5000