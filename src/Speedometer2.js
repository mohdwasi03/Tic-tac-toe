import React from 'react'
import Speedometer3 from './Speedometer3'
import './Speedometer2.css'



function Speedometer2() {
   
  return (
    <>
    <div className="container">
    <div className="parent-row-column">
    <strong>Sentiment Across all Media</strong>
    </div>
    <div className='parent-container-row'>
    <div className="row">
    <Speedometer3 sentiment_value={0.1} connector={"news"}/>
    
    <Speedometer3 sentiment_value={0.6} connector={"twitter"}/>
    <Speedometer3 sentiment_value={-0.1} connector={"facebook"} />
    
    </div>
    <div className="row">
    <Speedometer3 sentiment_value={0.1} connector={"instagram"}/>
    <Speedometer3 sentiment_value={-0.6} connector={"reddit"}/>
    <Speedometer3 sentiment_value={0.1} connector={"youtube"}/>
    </div>
    </div>
    </div>

{/* nxttttt-----------------------------------------------------------------------------------------------------------------------------*/ }
















    </>

  )
}

export default Speedometer2