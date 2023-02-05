import { Link } from 'react-router-dom'
import discordIcon from '../assets/discord-mark-white.svg'
import '../index.css'

function Home() {
    return (
        <div className='md:flex bg-neutral-900 h-screen md:justify-center md:items-center xs:block'>
            <div className="md:w-1/2 xs:w-full p-20">
                <div className="md:text-9xl font-bold text-center xs:text-5xl">
                    <span className='bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-indigo-600 [text-shadow:_-100px_0_50px_rgb(225_29_72_/_50%),_100px_0_50px_rgb(79_70_229_/_50%)]'>
                        ServerWar
                    </span>
                </div>
            </div>
            <div className="md:w-1/2 xs:w-full">
                <p className="text-2xl text-gray-400 text-center font-bold my-5 mx-36">
                    ServerWar is a discord bot that can be used by members of a server to play a text-based game simulating a war
                </p>
                <div className='flex justify-center items-center'>
                    <a className='flex justify-center items-center w-44 m-11 bg-indigo-600 h-20 rounded-xl font-bold hover:cursor-pointer' href='https://discord.com/api/oauth2/authorize?client_id=928321488568864799&permissions=2147576896&scope=applications.commands%20bot'>
                        <div className='flex justify-evenly'>
                            <img className='w-1/4' src={discordIcon} />
                            <span className='text-2xl'>Invite</span>
                        </div>
                    </a>
                    <Link to='/commands' className='flex justify-center items-center w-44 m-11 bg-rose-600 h-20 rounded-xl font-bold hover:cursor-pointer'>
                        <div className='flex justify-evenly'>
                            <span className='text-2xl text-gray-800'>Learn More</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
