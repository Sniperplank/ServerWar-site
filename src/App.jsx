import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Commands from './pages/Commands'
import Help from './pages/Help'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <nav className='flex absolute left-0 right-0 justify-center items-center h-14 p-8'>
        <Link className='px-3 py-2 text-xl text-gray-300 font-medium mx-8 hover:border-b-4 border-rose-600 hover:text-rose-600' to='/'>Home</Link>
        <Link className='px-3 py-2 text-xl text-gray-300 font-medium mx-8 hover:border-b-4 border-rose-600 hover:text-rose-600' to='/commands'>Commands</Link>
        <Link className='px-3 py-2 text-xl text-gray-300 font-medium mx-8 hover:border-b-4 border-rose-600 hover:text-rose-600' to='/help'>Help</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/commands' element={<Commands />} />
        <Route path='/help' element={<Help />} />
      </Routes>
    </div>
  )
}

export default App
