import React,{useState, useEffect} from 'react';
import './Game.css';
import Square from './Square.js';
import  {Link}  from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Menu from "./Menu";
import Login from "./Login";

const atbegin=["","","","","","","","",""]

function Game() {
 

  
const [setgame,updateGame]=useState(atbegin)
const [isX, updateX] =useState(false)
//const [check,updateCheck]=useState(true)




useEffect(()=>{
  /*const data1=  localStorage.getItem('login');
  const datas2=JSON.parse(data1);
  console.log("datas2",datas2);
  if(!datas2){
    console.log("entered");
    updateCheck(false)
  //<Redirect to="/start"  /> ;
  }*/
  console.log(" not entered")
  const data=localStorage.getItem('hello');
  
  updateGame(JSON.parse(data));
  console.log("data",JSON.parse(data));
},[])
useEffect(() => {

  localStorage.setItem('hello',JSON.stringify(setgame))
  let winner = Winner()
      
  
  
  if (winner) {
    
    
    //updateGame(setgame)
    alert(`${winner} won the game`);
    <Redirect to="/apis"  />

}
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [setgame])

/*useEffect(()=>{
  localStorage.setItem('hello',JSON.stringify(setgame))

})*/






const clicked=(index) =>{

  let winne = Winner()
      
 
  if (winne) {return }
  
  let s= Array.from(setgame);
  if (s[index])
            return;

  s[index]= isX ?'X':'O';
  if(s[index]==='X'|| s[index]==='O' )
  updateGame(s);
  
  updateX(!isX);
  
}

const clearGame = () => {
  updateGame(atbegin)
}



const Winner = () => {
  const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
  ];
  console.log('Class: App, Function: checkWinner ==', setgame[0], setgame[1], setgame[2]);
  for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (setgame[a] && setgame[a] === setgame[b] && setgame[a] === setgame[c]) {
         if(setgame[a]==='X' ||  setgame[a]==='O')        
          return setgame[a];
      }
  }
  return null;
}
  






  return (
    <>

    {/*!logins ?<> <p>Please login!!</p> <Login/></>: <>*/}
    <Menu />
    <div className='head' >
    
    <div>
    {/*<Link to="/login"> <button className="logout-bbtn" > logout </button> </Link>*/}
      
</div>
    <p className='status'> TURN: {isX ?'X':'O'} </p>

    <div className='row jc '>
   
            <Square state={setgame[0]} onClick={()=>clicked(0)} />
            <Square state={setgame[1]} onClick={()=>clicked(1)}/>
            <Square state={setgame[2]} onClick={()=>clicked(2)}/>
            </div>
            <div className='row jc'>
            <Square state={setgame[3]} onClick={()=>clicked(3)}/>
            <Square state={setgame[4]} onClick={()=>clicked(4)}/>
            <Square state={setgame[5]} onClick={()=>clicked(5)}/>
            </div>
            <div className='row jc'>
            <Square state={setgame[6]} onClick={()=>clicked(6)}/>
            <Square state={setgame[7]} onClick={()=>clicked(7)}/>
            <Square state={setgame[8]} onClick={()=>clicked(8)}/>
            </div>
      <button className='reset' onClick={clearGame}> RESET</button>
    </div>
    {/*</>*/}
    </>
    
  );
}

export default Game;
