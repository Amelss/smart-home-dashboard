import React from 'react'
import {Link} from 'react-router-dom'


export default function Navigation() {

  
  return (
    <div className="bg-navPurple rounded-3xl w-24 h-screen xl:h-full">
      <nav className=''>
        <Link to={'/'}><img src="./assets/verve-images/home.png" alt="home"  className='mx-auto mb-20 mt-14 w-7'/></Link> 
        <Link to={'dashboard'}> <img src="./assets/verve-images/dashboard.png" alt="dashboard" className='bg-dashboardBackground nav-images rounded-l-full w-10  '/></Link>
        <Link to={'rooms'}><img src="./assets/verve-images/lamp.png" alt="lamp" className='nav-images w-5' /></Link>
        <Link to={'security'}><img src="./assets/verve-images/security.png" alt="security" className='nav-images w-5'/></Link>
        <Link to={'location'}><img src="./assets/verve-images/location.png" alt="location" className='nav-images w-5'/></Link>
        <Link to={'users'}><img src="./assets/verve-images/users.png" alt="users"className='nav-images w-5' /></Link>
        <Link to={'thermostats'}><img src="./assets/verve-images/levels.png" alt="levels" className='nav-images w-5'/></Link>
        <Link to={'logout'}><img src="./assets/verve-images/exit.png" alt="exit" className='mx-auto mb-5 mt-40 xl:mt-24 2xl:mt-48 w-5'/></Link>
      </nav>






      
    </div>
  );
}
