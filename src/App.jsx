import { useState } from 'react' 
import Navbar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import AllItems from './components/AllItems'
import AddItemForm from './components/AddItemForm'

function App() { 


  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/items' element={<AllItems />} />
          <Route path='/form' element={<AddItemForm />} /> 
        </Routes>
      </main>
    </>
  )
}

export default App
