import React from 'react'
import '../styles.css'
const UserStatus = ({loggedIn,isAdmin}) => {

    return(loggedIn && isAdmin? <h1  >Welcode Admin</h1>: <h1 onCopy={()=>alert("you are hovred the coffe")}>welcome User</h1>)
}

export default UserStatus