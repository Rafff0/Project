import React, { useEffect, useState } from 'react'
import "./imagesPage.style.scss"

const ImagesPage = () => {



    const [data , setData] = useState([])
    const [finish , setFinish] = useState(false)
    
    
    useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/photos")
       .then(dat=> dat.json())
    .then(dat=> {
        setData(...data,dat)
        setTimeout(()=>{
          setFinish(true)
        },2000)
    })
    .catch((err)=>{throw new Error(err)})
    
    
    },[])
    
    
    
      return (
        <>
       
    
         <section className='imageSec'>
           {finish? new Array(20).fill(null).map((elm,idx)=>{
             return <div  key={Math.random()}>

              <div className='imgDiv'>
                <img src={`${data[idx].url}`} alt="" />
                <h3>{data[idx].title.slice(0,20)}</h3>
              </div>
              <div className='onlyImg'>
                <img src={`${data[idx].url}`} alt="" />
              </div>
             </div>
           }):<div id='loader'><span class="material-symbols-outlined">
           cached
           </span></div>}
         </section>
        </>
      )
}

export default ImagesPage