import React from 'react'
import ReactDom from 'react-dom'
import './App.css'
import './index.css'
import Login from './components/login';
import Register from './components/register'
import Main from './components/main';
import {useState} from 'react';
import { Form } from 'semantic-ui-react';
import {BrowserRouter ,Route,Switch} from 'react-router-dom';
function App() {

  const [dishes, setDishes] = useState(['בקר', 'עוף', 'פרגית', 'שניצל', 'כבד']);
  return (

    
    <div 
     >

{/* <h1 className="div1">logo</h1>
<h2 className="div2">sign in</h2>
 <h1 className="div3">sign up</h1> */}
{/* <Register/> */}
{/* <Main dishes={dishes}/> */}
{/* <Login/> */}
{/* <Login/> */}

<Switch>
<Route path="/login" component={Login}/>
<Route path="/sign" component={Register}/>

</Switch>
</div>
  );
}


export default App;
