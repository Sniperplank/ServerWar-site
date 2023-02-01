import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className='flex bg-neutral-900 h-screen justify-center items-center'>
      <div className="w-1/2">
        <p className="text-8xl text-gray-700 font-bold text-center">
          ServerWar
        </p>
      </div>
      <div className="bg-rose-600 rounded-xl shadow border p-8 w-1/2">
        <p className="text-3xl text-gray-700 font-bold mb-5">
          Welcome!
        </p>
        <p className="text-gray-500 text-lg">
          React and Tailwind CSS in action
        </p>
      </div>
    </div>
  )
}

export default App
