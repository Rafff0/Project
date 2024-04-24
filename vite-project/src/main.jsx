import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import LoginPage from './components/LoginPage.jsx'
import Login from './components/Login.jsx'
import Registration from './components/Registration.jsx'
import {Provider} from "react-redux"
import store from './store/store.js'
import MainPage from './components/MainPage.jsx'
import Posts from './components/Posts.jsx'
import Comments from './components/Comments.jsx'
  import ImagesPage from './components/ImagesPage.jsx'
import {useParams} from "react-router-dom"




const router = createBrowserRouter([
{
  path:"/",
  element:<App/>
},
{
  path:"/login",
  element:<Login/>
},
{
  path:"/registration",
  element:<Registration/>
},
{
  path:"/main",
  element:<MainPage/>,
  children:[
    {
      path:`main/posts`,
  element: <Posts/>
  },
    {
      path:"main/comments",
  element: <Comments/>
  },
    {
      path:"main/images",
  element: <ImagesPage/>
  },
  ]
}



]
) 


ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider store={store}>
 <React.StrictMode>
   <RouterProvider router={router}/>
   
  </React.StrictMode>
 </Provider>
)
