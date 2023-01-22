import React from 'react'

const About = () => {
  return (
    <div className='aboutable'>
        
            <table>
                <thead>
                    <tr>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Location</th>
                    <th>Photos</th>
                    </tr>
                   
                </thead>
                <tbody>
                    <tr>
                        <td>133, near Subway, <br/>1st Phase, Gandhi Bazaar,<br/> J. P. Nagar, Bengaluru,<br/> Karnataka 560078</td>
                        <td>099459 39527</td>
                        <td>Basavanagudi</td>
                        <td><img src="https://5.imimg.com/data5/FG/PT/GLADMIN-24039720/paying-guest-service-500x500.jpg" alt="no img" height="200px" width="200px"  /></td>
                    </tr>
                    <tr>
                        <td colSpan="4"> <h1>This website is<br/> created by<br/> Mr.Sudhanshu Gupta</h1></td>
                    </tr>
                </tbody>
            </table>
        
        
     </div>
  )
}

export default About