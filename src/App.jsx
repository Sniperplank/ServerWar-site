import { useState } from 'react'
import discordIcon from './assets/discord-mark-white.svg'
import './App.css'

function App() {
  return (
    <div className='flex bg-neutral-900 h-screen justify-center items-center'>
      <div className="w-1/2">
        <p className="text-9xl text-gray-700 font-bold text-center">
          ServerWar
        </p>
      </div>
      <div className="w-1/3">
        <p className="text-3xl text-gray-700 text-center font-bold mb-5">
          Welcome!
        </p>
        <div className='flex justify-center items-center'>
          <button className='w-44 m-11 bg-indigo-600 h-20 rounded-xl font-bold'>
            <div className='flex justify-evenly'>
              <img className='w-1/4' src={discordIcon} />
              <span className='text-2xl'>Invite</span>
            </div>
          </button>
          <button className='w-44 m-11 bg-rose-500 h-20 rounded-xl font-bold'>
            <div className='flex justify-evenly'>
              <span className='text-2xl text-gray-800'>Learn More</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
