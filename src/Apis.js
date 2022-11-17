
import React, {  useState } from 'react'
import Menu from "./Menu";
import Speedometer from './Speedometer';


const Apis = () =>{
const [keyword , updateKeyword]= useState("")
const [tweets,updateTweets]= useState([])
const [sentiment,updateSentiment]= useState([])


let avg;

 
const getdata= async()=>{
    console.log(keyword)
    //let ss=`https:/${keyword}//v5`
    //console.log(ss)
    
    let api=await fetch(`https://alivecore360.com/api/stats/v5?key=15d273cc-0b8a-4460-9cd8-55fa55a3e1c1&Twitter_handler=${keyword}&lang=en&optional_connectors=livesearch&days=10&type=posts`);
  
    
   let api_data= await api.json()
  
//let datas=api_data.stats.twitter.timelineStats.timeline
let c=api_data.stats.twitter.timelineStats.timeline
 let d=c.map((i)=>i?.posts)
 let f=d
 let a=[]
 d.forEach((i)=>i?.forEach((j)=>a?.push(j.tweet)))
 console.log("a",a)
 updateTweets(a)
 
 let k=[]

 f.forEach((i)=>i.forEach((j)=>k.push(j.sentimentSubjectivity)))
  updateSentiment(k)
  console.log("k",k)
  //updateSentiment([])
  console.log("get data senyiment", sentiment)

   
}

const speedometer=()=>{
    var sum = 0;
for( var i = 0; i < sentiment.length; i++ ){
    sum += parseInt( sentiment[i], 10 ); 
}

 avg = sum/sentiment.length;
console.log("avg",avg);
return avg;
}




    
    return (
        <>
<Menu />
<div>
<input type="text" value={keyword}  placeholder='keyword'  onChange={e=> updateKeyword(e.target.value) }/>
<button onClick={getdata} > search </button> 

</div>
<div><button onClick={speedometer}>get Speedometer</button> </div>
{avg= speedometer()}

<Speedometer avg={avg}/>
<div>
<ul>
{tweets.map((i)=> <li> {i}</li>)}
</ul>
</div>

</>
    )

}

export default Apis
