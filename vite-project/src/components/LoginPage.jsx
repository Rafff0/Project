import React from 'react'
import "./loginPage.style.scss"
import { Link } from 'react-router-dom'


const LoginPage = () => {
  return (<main>
  <h1>Welcome to Dumb data fetch app!</h1>
  <div className='parent'>

<Link to="/login">Login</Link>
 


    <Link to="/registration">Registration</Link>


  </div>
    </main>
  )
}

export default LoginPage
