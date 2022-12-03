import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{listStyleType:'none',textDecoration:'none',display:'flex'}}>
        <Link to = '/Register'><li style={{listStyleType:'none' , flex:'1'}}>Register</li></Link>
       <Link to = '/e-verify'> <li style={{listStyleType:'none', flex:'1',paddingLeft:'100px'}}>E-verify</li></Link>
        
    </div>
  )
}

export default Navbar