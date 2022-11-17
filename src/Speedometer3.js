import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
import './Speedometer2.css'




function Speedometer3(props) {
    let text = props.connector+": "+props.sentiment_value


  return (
   <div className="parent-container-column">
    
   
    
    <ReactSpeedometer
      minValue={-1}
      maxValue={1}
        segments={5}
        value={props.sentiment_value}
        currentValueText= {text}
        textColor	=	'red'
        ringWidth={7}
        width={120}
        height={8}
        dimensionUnit={"em"}
        needleHeightRatio={0.7   }
        needleColor={"#6A6A85"}
        maxSegmentLabels={5}
        customSegmentStops={[-1,-0.5,0,0.5,1]}
        valueTextFontSize={"10px"}
        labelFontSize={"8px"}
        paddingHorizontal={0.1}
        paddingVertical={0.1}
        pointerWidth={0.5}
        pointerTailLength={0.1}

        />
      {/*  <a href="#" class="fa fa-facebook"></a>*/}
       
        </div>
       
    
  )
}
Speedometer3.propTypes = {
  sentiment_value: Speedometer3.float
 
};

export default Speedometer3
