import React from 'react';
import './Game.css';

function Square(props) {


  

  return (
   
    <span className='squared' onClick={props.onClick}> {props.state}  </span>  
    
  );
}

export default Square;
