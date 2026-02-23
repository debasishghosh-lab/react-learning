import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router'

function App() {
 

  return (
    <>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </>
  )
}

export default App
