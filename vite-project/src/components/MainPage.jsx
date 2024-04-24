import React, { useEffect, useState } from 'react'
import { Link,  Outlet } from 'react-router-dom'
import "./mainPage.style.scss"



const MainPage = () => {

const [data , setData] = useState([])
const [clicked , setClicked] = useState(1)


useEffect(()=>{
fetch("https://jsonplaceholder.typicode.com/users")
   .then(dat=> dat.json())
.then(dat=> {
    setData(...data,dat)
  
})
.catch((err)=>{throw new Error(err)})


},[])



  return (
    <>
     <nav>
        <div><Link onClick={()=>{
      
      setClicked(4)
       
    }} className={`link ${clicked==4?"underline":""}`} to={"/main"}>
        <span id='span' className="material-symbols-outlined">
home
</span>
          </Link>
        </div>
        <div></div>
        <Link  onClick={()=>{
      
          setClicked(1)
           
        }} className={`link ${clicked==1?"underline":""}`} to={"main/posts"}>Posts</Link>
        
        <Link  onClick={()=>{
           
            setClicked(2)
            
        }} className={`link ${clicked==2?"underline":""}`} to={"main/comments"}>Comments</Link>
        
        <Link onClick={()=>{
          setClicked(3)
           
        }}  className={`link  ${clicked==3?"underline":""}`} to={"main/images"}>Images</Link>
        <div></div>
        <Link className='link' to={"/"}>Logout</Link>
     </nav>
     <Outlet></Outlet>
     
     
    </>
  )
}

export default MainPage
