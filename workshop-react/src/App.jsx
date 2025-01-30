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
const myName="lota";
const ValidPassword= () =><h1>Password Is Valid</h1>;

const InvalidPassword= () =><h1>Password Is Invalid</h1>;

// const [count,setCount]=useState(0);
const App=()=>{
    const [counter,setCounter]=useState(0);
    const [list,setList]=useState(["word","Excel","PowerBi"]);


  return(
    <div>

    <h1>displaying the list of itmes</h1>
    {list.map((n)=>(
<ul key={n}>
  <li>{n}</li>
</ul>

    ))}
    <button onClick={()=>{
      setList([...list,'opa']);
    }}>addLotfiToTheList</button>

    <button onClick={()=>{
      list.pop();
      setList(list);

    }}>removeFromArray</button>

  {/* <Weather temp={0}/>
  <UserStatus isAdmin={true} loggedIn={false}/>
  <Gretting timeOfDay="Afternon"/> 
  <StyleCard/>
  <Icon/> */}
  
  <h1>hello app</h1>
  <p>{counter}</p>
  <button onClick={()=>{
    setCounter(counter+1);
  }}>+</button>

<button onClick={()=>{
  setCounter(counter-1);
}}>-</button>



<Problem/>
 </div>
  )

}




export default App