import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LogIn } from './ScreenComponents/LogIn'
import { Navbar } from './Components/NavBar'
import { Form } from './Components/Form'
import { Report } from './Components/Report'


function App() {
 

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/'  element={<LogIn />} ></Route>
          <Route path='/form'  element={<Form />} ></Route>
          <Route path='/report'  element={<Report />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
