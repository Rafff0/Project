import React, { useEffect, useState } from 'react'
import "./posts.style.scss"

const Comments = () => {




    const [data , setData] = useState([])
    const [finish , setFinish] = useState(false)
    
    
    useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/comments")
       .then(dat=> dat.json())
    .then(dat=> {
        setData(...data,dat)
        setTimeout(()=>{
          setFinish(true)
        },1000)
    })
    .catch((err)=>{throw new Error(err)})
    
    
    },[])
    
    
    
      return (
        <>
       
    
         <section className='sec'>
           {finish? new Array(20).fill(null).map((elm,idx)=>{
             return  <div style={{backgroundColor:`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`}} className='posts' key={Math.random()}>
              <h3><span>{data[idx].id}</span>  {data[idx].name.slice(15) || data[idx].name }</h3>
              <p className='mail'>{data[idx].email}</p>
              <p>{data[idx].body.slice(15)}</p>
              </div>
           }):<div id='loader'><span class="material-symbols-outlined">
           cached
           </span></div>}
         </section>
        </>
      )
}

export default Comments