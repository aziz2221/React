import React, { useState } from 'react'
import Person from './components/Person';
import Product from './components/product';
import Card from './components/card';
import UserStatus from './components/UserStatus';
import Gretting from './components/greeting';
import Weather from './components/Weather';
import StyleCard from './components/StyleCard';
import Icon from './components/Icon';
import Problem from './components/Problem';
import Hello from './components/Class';
const myName="lota";
const ValidPassword= () =><h1>Password Is Valid</h1>;

const InvalidPassword= () =><h1>Password Is Invalid</h1>;

// const [count,setCount]=useState(0);
const App=()=>{
    const [counter,setCounter]=useState(0);
    const [list,setList]=useState(["word","Excel","PowerBi"]);


  return(
    <div>

   


<Problem/>
<Hello/>
 </div>
  )

}




export default App