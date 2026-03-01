import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import './App.css'


function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <BrowserRouter>
      <div className="appLayout">

        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

        <div className="mainSection">
          <Navbar setIsOpen={setIsOpen}  />

          <div className="pageContent">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App
