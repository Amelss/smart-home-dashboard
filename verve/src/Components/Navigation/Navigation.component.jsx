import React from 'react'
import { Link } from 'react-router-dom'
import './navigation.css'


export default function Navigation() {

  
  return (

    <div className="bg-navPurple main-nav rounded-3xl w-24 h-screen xl:h-full">
      <div className='group'>
        <nav className='navbar'>
          <ul className=' nav-bar-items'>
            <li className='list-none '>
              <Link to={'/'}><img src="./assets/verve-images/home.png" alt="home" className='mx-auto mb-20 mt-14 w-7' /></Link>
            </li>
            
            <li className='list-none menu-items bg-dashboardBackground rounded-l-full active'>
              <Link to={'/'} className=""><img src="./assets/verve-images/dashboard.png" alt="dashboard" className='h-10 nav-images tab-group' /></Link>
            </li>
            
            <li className="list-none menu-items">
              <Link to={'rooms'} className="menu-items"><img src="./assets/verve-images/lamp.png" alt="lamp" className='nav-images w-5' /></Link>
            </li>
            
              <li className="list-none">
              <Link to={'security'}><img src="./assets/verve-images/security.png" alt="security" className='nav-images w-5' /></Link>
            </li>

            <li className="list-none">
              <Link to={'location'}><img src="./assets/verve-images/location.png" alt="location" className='nav-images w-5' /></Link>
            </li>

            <li className="list-none">
              <Link to={'users'}><img src="./assets/verve-images/users.png" alt="users" className='nav-images w-5' /></Link>
            </li>

            <li className="list-none">
              <Link to={'thermostats'}><img src="./assets/verve-images/levels.png" alt="levels" className='nav-images w-5' /></Link>
            </li>

            <li className="list-none">
              <Link to={'logout'}><img src="./assets/verve-images/exit.png" alt="exit" className='mx-auto mb-5 mt-40 xl:mt-24 2xl:mt-48 w-5' /></Link>
            </li>

          </ul>
        </nav>
    </div>





      
      </div>
   
  );
}
