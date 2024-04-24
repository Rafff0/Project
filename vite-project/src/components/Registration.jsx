import React, { useRef } from 'react'
import "./login.style.scss"
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import { add } from './authenticationSlice'
import store from '../store/store'

const Registration = () => {

  const dispatch = useDispatch()
const {value} = useSelector((counter)=>counter)
const inpRef1 = useRef(null)
const inpRef2 = useRef(null)
const inpRef3 = useRef(null)

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
      <h1>Registration</h1>
    <div className='div'>
      
      <input required  ref={inpRef1} type="text"  placeholder='Login'/>
      <input required ref={inpRef2} type="password" placeholder='Password'onChange={()=>changer()} />
      <input ref={inpRef3} type="text" placeholder='Mail' />
      <Link className='link' to={"/main/main/posts"} onClick={()=>{
        dispatch(add({login:inpRef1.current.value, psw:inpRef2.current.value, mail:inpRef3.current.value}))
        inpRef1.current.value = ""
        inpRef2.current.value = ""
        inpRef3.current.value = ""
        alert("You registered succesfully")
      }
        
        }>Submit</Link>
      
    </div>
      <Link className='return' to="/">Return</Link>
    </div>
  )
}

export default Registration
