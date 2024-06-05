import React, { useContext } from 'react'
import { UserDataContext } from '../../context/Context'

function Profile() {

  const user = useContext(UserDataContext)

  console.log(user);

  return (
    <div>
      Profile component
      {user.name} {user.age}
    </div>
  )
}

export default Profile
