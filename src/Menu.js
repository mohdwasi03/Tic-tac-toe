import React, { useEffect } from 'react'
import { NavLink,Link } from 'react-router-dom';
import './Menu.css';
import { Redirect } from 'react-router-dom';

const Menu = () =>{

    useEffect(()=>{
       const data=  localStorage.getItem('login')
       if(!data)
       <Redirect to="/login"  /> 
    },[])

    const handlelogout=()=>{
localStorage.setItem("login",false);
//<NavLink exact  activeClassName="activate"    to="/login"> logout  </NavLink>
    }

return (
    
<>
<div className='menu' >

<NavLink   exact  activeClassName="activate"  to="/about"> About Us </NavLink>
<br/>


<NavLink  exact  activeClassName="activate"  to="/contact"> Contact Us </NavLink>
<br/>

<NavLink  exact  activeClassName="activate"  to="/game"> Game </NavLink>
<br/>
<NavLink  exact  activeClassName="activate"  to="/apis"> Data </NavLink>
<br/>
{/*<NavLink exact  activeClassName="activate"    to="/login"> logout  </NavLink>*/}
<Link to='/login'>
<button onClick={handlelogout} > Logout </button> </Link>
</div>
</>

    
    )

}

export default Menu
