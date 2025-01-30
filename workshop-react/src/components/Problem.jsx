import React from 'react'
import { BsDisplay } from 'react-icons/bs';

const Problem = () => {
  const input =[

    ["a","b","c"],
    ["c","d","f"],
    ["d","f","g"],
  ];
    return (
        <div>
            
            
             <p style={{color:"blue"}}>Problem</p>

        {input.flat().map((x)=>(
            
            <ul key={x}>
                <li><p style={{color:"red"}} >{x}</p></li>
            </ul>
        ))
        }
  
  </div>
  )
}

export default Problem