import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Home from './Components/Home'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
         <Route index element={<Home/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
  )
}

export default App
