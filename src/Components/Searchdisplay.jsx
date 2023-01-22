import React from 'react'

const Searchdisplay = ({student}) => {
  return (
    <div className='sd'>
         <h1>Student details</h1>
        {
        student.map((student,index)=>{
           return (
           
           <div className='searchdetails'>
            
            <table>
            <tbody >
              <tr >
                <td><h3>Name</h3></td><td>{student.Name}</td>
              </tr>
              <tr>
                <td><h3>Gender</h3></td><td>{student.Gender}</td>
              </tr>
              <tr>
                <td><h3>Age</h3></td><td>{student.Age}</td>
              </tr>
              <tr>
                <td><h3>Contact_num</h3></td><td>{student.Contact_num}</td>
              </tr>
              <tr>
                <td><h3>Room_num</h3></td><td>{student.Room_num}</td>
              </tr>
              <tr>
                <td><h3>Rent</h3></td><td>{student.Rent}</td>
              </tr>
            </tbody>
            </table>
            
           </div>
           )
        })
      }
    </div>
  )
}

export default Searchdisplay