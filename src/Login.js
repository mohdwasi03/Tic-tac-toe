import { React, useState} from 'react';

import  Error from "./Error";


import { Redirect } from 'react-router-dom';



function Login (){
    
    
    const [email,updateEmail] = useState("");
    const [password,updatePassword] = useState("");
    const[isWrong,updateIswrong]=useState(true);
    const[login,updateLogin]=useState(false)
    

function handlelogin(){
    updateLogin(true)
if (email==="wasi" && password ==="abcd"){
    updateIswrong(false)
    
    localStorage.setItem('login',JSON.stringify(true))
}

else
    updateIswrong(true)
    
    }


    return(

        <>
       
 
<input type="text" value={email}  placeholder='email'  onChange={e=> updateEmail(e.target.value) }/>
<input  type="text" value={password} placeholder='password' onChange={e=> updatePassword(e.target.value) }/>


<button onClick={handlelogin} > Login IN </button> 
{console.log(isWrong)}
{login? ( !isWrong  ? <Redirect to="/start" logins={true} /> : <Error />) :  <></>}
{/*login? ( !isWrong  ? <Game state{...updateLogin()} /> : <Error />) :  <></>*/}  {/* rendering game on login page */}

</>

    );
}



export default Login;