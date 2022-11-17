import './Welcome.css';
import React from 'react';
import  {Link}  from 'react-router-dom';
function Welcome() {
  return (
    
    <>

{localStorage.setItem('login',JSON.stringify(false))}
<div className="entry-page">
   <h2>ACTIVATE YOUR BRAIN CELLS</h2>
 

<Link to="/login"> <button className="button" > Continue with login </button> </Link>
<Link to="/menu"> <button className="button" > Continue with Navbar </button> </Link>
<Link to="/apis"> <button className="button" > Continue with Api calls </button> </Link>
</div>

</>

  );
}

export default Welcome;
