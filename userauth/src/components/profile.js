import React from 'react'
import { Link } from 'react-router-dom'

function Profile() {
    return (
        <div className='container'>
            <h1>Your Profile</h1>
            <h3>Name</h3>
            <h3>Age</h3>
            <h3>Address</h3>
            <h3>Email</h3>

            <Link to='/Login'>LOG IN</Link>
        </div>
    )
}

export default Profile