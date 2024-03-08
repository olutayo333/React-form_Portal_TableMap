import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className=' mx-auto text-center py-3 mb-5 ' style={{backgroundColor:'#615C99'}}>
      
      <Link to="/portal" className='text-white mx-1' style={{textDecoration:"none"}}> PORTAL </Link>
      <Link to='/form' className='mx-1' style={{textDecoration:"none", color:"white"}}> FORMIK FORM </Link>
    </div>
  )
}

export default Header
