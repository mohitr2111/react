import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './layout.jsx'
import Home from './components/BODY/Home/Home.jsx'
import About from './components/BODY/About/About.jsx'
import Github, { githubFollower } from './components/BODY/Github.jsx'
import Contact from './components/BODY/Contact/Contact.jsx'
import User from './components/BODY/user.jsx'
import LoginPage from './components/BODY/LoginPage.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='github' element={<Github />} loader={githubFollower}/>
      <Route path='user/:userid' element={<User />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
