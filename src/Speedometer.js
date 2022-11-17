import ReactSpeedometer, { CustomSegmentLabelPosition } from "react-d3-speedometer";
import React, { useEffect } from 'react'

function Speedometer({avg}) {

    useEffect(()=>{
        console.log("in speedometer val", {avg})
    })
    
  return (
  
      <div>
  
  <ReactSpeedometer
  
  minValue={-1}
  maxValue={1}
  segments={3}
  value={avg}
  
  //currentValueText={valu}
  
    />
  
  
  
  
  </div>
    
  )
}

export default Speedometer