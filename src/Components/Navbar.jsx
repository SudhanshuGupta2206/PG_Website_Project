import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
const Navbar = () => {
const [searchval,setSearchval]=useState()

  return (
    <nav className='navbar'>

    <div className='logo'>
      <img src="https://thumbs.dreamstime.com/b/building-logo-icon-vector-metro-city-builders-illustration-building-logo-icon-vector-metro-city-illustration-isolated-white-140632109.jpg" alt="no img" />
      <small>MyHomePG</small>
      </div>

    <div className='searchbar'>
      <input type="text" placeholder='Serach here' value={searchval} onChange={(e)=>{setSearchval(e.target.value)}} />
      <Link to={`/search${searchval}`}><button id='sbut'><SearchIcon/></button></Link>
      </div>

    <div className='homebutton'>
      <Link to="/home">
      <button id='hombut'>Home</button>
      </Link>
      
      </div>

    <div className='addbutton'>
      <Link to="/add"> <button id='addbut'>Add Students</button></Link>
   
      </div>

    <div>
      <Link to="/about"><button id='navabout'>About</button></Link>
    </div>

    </nav>
  )
}

export default Navbar