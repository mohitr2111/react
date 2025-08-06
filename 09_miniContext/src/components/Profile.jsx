import React, {useContext} from 'react'
import UserContext from '../context/userContext'

function Profile() {

    const {user} = useContext(UserContext);
    if(!user) return <div>Please Login</div>
  return (
    <>
        <div>profile</div>
        <div>username: {user.username}</div>
        <div> Welcome {user.username}</div>
    </>
  )
}

export default Profile