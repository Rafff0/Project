import React, { useEffect, useState } from 'react'
import "./posts.style.scss"

const Posts = () => {




    const [data , setData] = useState([])
    const [finish , setFinish] = useState(false)
    
    
    useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
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
                <h3>{data[idx].title.slice(0,9)}</h3>
                <p>{data[idx].body}</p>
             </div>
           }):<div id='loader'><span class="material-symbols-outlined">
           cached
           </span></div>}
         </section>
        </>
      )
}

export default Posts
