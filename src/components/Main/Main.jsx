import React, { useContext } from 'react'
import { UserDataContext } from '../../context/Context'

function Main() {

  const data = useContext(UserDataContext)

  const { auth, user, setIsAuthhorized } = data

  console.log(data);
  console.log(auth);
  console.log(user);
  // setIsAuthhorized

  return (
    <div>
     main 
     <h1>{auth ? "Authorized user" : "UnAuthorized user"}</h1>
     <button onClick={() => {
      setIsAuthhorized(!auth)
     }}>Log Out</button>
    </div>
  )
}

export default Main
