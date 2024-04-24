import React, { useEffect, useRef, useState } from 'react'
import "./login.style.scss"
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import { add } from './authenticationSlice'
import store from '../store/store'

const Login = () => {


  const inpRef1 = useRef(null)
  const inpRef2 = useRef(null)
  const [ok, setOk] = useState(false)

  function changer(){

    const  smth =  store.getState().auth.value.map((elm)=>{
      if(Object.values(elm).includes(inpRef1.current.value) && Object.values(elm).includes(inpRef2.current.value)){
    
        return true
    
      }
      return false
    })

    smth.includes(true)?setOk(true):""
  }

  
 


  return (<div className='main'>
      <h1>Login</h1>
    <div className='div'>
     
      <input ref={inpRef1} type="text"  placeholder='Login'/>
      <input ref={inpRef2} type="password" placeholder='Password' onChange={()=> changer()} />
      <Link className='link'  to={ok?"/main/main/posts":"/login"} onClick={()=>
              {  inpRef1.current.value = ""
                inpRef2.current.value = ""
              ok ||  alert("Incorrect password or login")
                }
      }>Submit</Link>
   
    </div>
      <Link className='return' to="/">Return</Link>
    </div>
  )
}

export default Login
