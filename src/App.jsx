import React from 'react'
import Navbar from './components/Navbar'
import { useLocation } from 'react-router-dom'
const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <div>
      {!isOwnerPath && <Navbar />}
      <Home></Home>
    </div>
  )
}

export default App
