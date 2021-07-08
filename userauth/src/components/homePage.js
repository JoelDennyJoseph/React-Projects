import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div>
            <p>This is the Home Page</p>
            <Link to='/Login'>Login</Link>
        </div>
    )
}

export default HomePage
