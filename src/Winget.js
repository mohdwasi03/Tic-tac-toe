import React from 'react'
import ReactSpeedometer from "react-d3-speedometer";
//import './Winget.css'

function Winget() {
  return (
    <>

<div className="container">
    <strong>Sentiment Across all Media</strong>
    <div className="speedometer-card">
    <ReactSpeedometer
        width={240}
                    height={150}
                    needleHeightRatio={0.75}
                    labelFontSize={"12px"}
                    startColor={"#F47560"}
                    endColor={"#61CDBB"}
                   
                    valueTextFontSize={"12px"}
                    minValue={-1}
                    maxValue={1}
                    value={0.9}
                    ringWidth={19}
                    needleColor={"#6A6A85"}
    
    customSegmentLabels={[
      {
        text: "Negative",
        position: "INSIDE",
        color: "#555",
      },
      
      {
        text: "Neutral",
        position: "INSIDE",
        color: "#555",
        fontSize: "19px",
      },

      {
        text: "Positive",
        position: "INSIDE",
        color: "#555",
      },
    ]}
  />
    

    </div>

    </div>
    
    </>
  )
}

export default Winget