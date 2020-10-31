import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => { // שם

    // משתנים ופונקציות

    return (
        <div>

     
        <Link to='/login'>login</Link>
        <Link to='/sign'>sign up</Link>
        {/* <button class="ui button">sign in</button> */}
        </div>
    )
}

export default HomePage;
