import {React} from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import  About from "./About";
import  Contact from "./Contact";
import  Error from "./Error";
import Game from "./Game";
import Welcome from "./Welcome";
import Login from "./Login";
import Apis from "./Apis";
import Menu from "./Menu";
import Start from "./Start";
import Speedometer from './Speedometer';
import Speedometer2 from './Speedometer2';
import Dashboard from './Dashboard';
import Winget from './Winget';

const App = ()=> {


  return (
    <>

<Switch>
{/*<Route  path='/' component={Welcome} />*/}
<Route exact path='/' component={Welcome}/>
<Route exact path='/login' component={Login }/> 
<Route exact path='/about' component={About}   />
<Route  exact path='/contact'component={Contact} />
<Route  exact path='/apis'component={Apis} />
<Route  exact path='/menu'component={Menu} />
{/*<Route exact path ='/game'  component={()=> <Game authorised={false} />} />   {/*<Game authorised={false} /> */}    
<Route exact path ='/game'  component={Game}  /> 
<Route exact path='/start' component={Start}/>
<Route exact path='/speedometer' component={Speedometer}/>
<Route exact path='/winget' component={Winget}/>
<Route exact path='/speedometer2' component={Speedometer2}/>
<Route exact path='/dashbord' component={Dashboard}/>
2

<Route   component={Error} />
</Switch> 



    </>
  )
}

export default App;
