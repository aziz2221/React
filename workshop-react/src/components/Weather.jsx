import React from 'react'
import { CgAdidas } from "react-icons/cg";


const styles={color:'yellow',backgroundColor:'red',margin:'20px'};
const Weather = (prop) => {
    if(prop.temp<15){
        return<CgAdidas style={{padding:'20px',fontWeight:'bolder',fontSize:'100px'}} />

        
    }
    else if(prop.temp<25){
      return <h1>It's nice outside</h1>
    }
    else{
      return <h1>It's hot outside</h1>
    }

}


export default Weather