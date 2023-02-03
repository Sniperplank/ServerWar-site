import React from 'react'
import pfp from '../assets/Jinx pfp.jpg'

function Help() {
    return (
        <div className='flex bg-neutral-900 justify-center items-center h-screen'>
            <div className='absolute w-1/3 h-7  bg-slate-400 [box-shadow:_-200px_0_100px_rgb(225_29_72_/_80%),_200px_0_100px_rgb(79_70_229_/_80%)]'></div>
            <div className='container bg-zinc-800 w-1/3 h-fit rounded-xl z-10'>
                <div className='bg-fuchsia-900 w-full h-20 rounded-t-xl pt-7 pl-7'>
                    <div className='bg-zinc-800 w-24 h-24 rounded-full p-2'>
                        <img className='rounded-full w-20 h-20' src={pfp} />
                        <div className='bg-zinc-900 w-9 h-9 rounded-full p-2 relative bottom-6 left-12'>
                            <div className='bg-green-600 w-5 h-5 rounded-full '></div>
                        </div>
                    </div>
                </div>
                <div className=' bg-zinc-900 w-11/12 h-[65%] rounded-xl m-6 mt-16'>
                    <div className='p-3 text-lg font-bold'>
                        Sniperplank<span className='text-gray-400 font-bold'>#0620</span>
                    </div>
                    <hr className='w-[95%] mx-auto border-zinc-800'></hr>
                    <div className='p-3 text-sm font-bold'>
                        ABOUT ME
                    </div>
                    <div className='pl-3 text-sm font-bold text-gray-400'>
                        Send me a message below if you need any help with the bot
                    </div>
                    <div className='p-3 text-sm font-bold'>
                        DISCORD MEMBER SINCE
                    </div>
                    <div className='pl-3 pb-5 text-sm font-bold text-gray-400'>
                        Jan 14, 2017
                    </div>
                    <hr className='w-[95%] mx-auto border-zinc-800'></hr>
                    <form className='flex justify-center items-center h-20 pt-1'>
                        <input className='bg-zinc-800 w-11/12 h-[80%] rounded-md p-4 placeholder:text-zinc-500' placeholder='Message @Sniperplank'></input>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Help