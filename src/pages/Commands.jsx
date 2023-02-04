import React from 'react'

function Commands() {
    return (
        <div className='flex bg-neutral-900 justify-center'>
            <div className='absolute top-1/2 w-1/2 h-7  bg-slate-400 [box-shadow:_-300px_0_100px_rgb(79_70_229_/_80%),_300px_0_100px_rgb(225_29_72_/_80%)]'></div>
            <div className='m-28 z-10'>
                <table className="table-fixed bg-gray-900 rounded-lg">
                    <thead className='border-b-2 border-gray-600'>
                        <tr>
                            <th className='w-1/4 p-5'>Name</th>
                            <th className='w-1/4'>Description</th>
                            <th className='w-1/4'>Options</th>
                            <th className='w-1/4'>Cooldown</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='border-b bg-gray-800 border-gray-700'>
                            <td className='p-5'>/help</td>
                            <td className='p-5'>Help on how to participate in the war</td>
                            <td className='p-5'>None</td>
                            <td className='p-5'>None</td>
                        </tr>
                        <tr className='border-b bg-gray-800 border-gray-700'>
                            <td className='p-5'>/commands</td>
                            <td className='p-5'>List all available commands</td>
                            <td className='p-5'>None</td>
                            <td className='p-5'>None</td>
                        </tr>
                        <tr className='border-b bg-gray-800 border-gray-700'>
                            <td className='p-5'>/joinwar</td>
                            <td className='p-5'>Use this command to participate in the war</td>
                            <td className='p-5'>None</td>
                            <td className='p-5'>None</td>
                        </tr>
                        <tr className='border-b bg-gray-800 border-gray-700'>
                            <td className='p-5'>/profile</td>
                            <td className='p-5'>Check your profile</td>
                            <td className='p-5'>None</td>
                            <td className='p-5'>None</td>
                        </tr>
                        <tr className='border-b bg-gray-800 border-gray-700'>
                            <td className='p-5'>/health</td>
                            <td className='p-5'>Show how much health you have</td>
                            <td className='p-5'>None</td>
                            <td className='p-5'>None</td>
                        </tr>
                        <tr className='border-b bg-gray-800 border-gray-700'>
                            <td className='p-5'>/shield</td>
                            <td className='p-5'>Show how much shield you have</td>
                            <td className='p-5'>None</td>
                            <td className='p-5'>None</td>
                        </tr>
                        <tr className='border-b bg-gray-800 border-gray-700'>
                            <td className='p-5'>/money</td>
                            <td className='p-5'>Show how much money you have</td>
                            <td className='p-5'>None</td>
                            <td className='p-5'>None</td>
                        </tr>
                        <tr className='border-b bg-gray-800 border-gray-700'>
                            <td className='p-5'>/attack</td>
                            <td className='p-5'>Attack another player</td>
                            <td className='p-5'>
                                <ol>
                                    <li>Target: mention of the player you want to attack</li>
                                </ol>
                            </td>
                            <td className='p-5'>10s</td>
                        </tr>
                        <tr className='border-b bg-gray-800 border-gray-700'>
                            <td className='p-5'>/buy</td>
                            <td className='p-5'>Buy items to help in the war</td>
                            <td className='p-5'>
                                <ol>
                                    <li>Health: sets player health to 100</li>
                                    <li>Shield: sets player shield to 100</li>
                                </ol>
                            </td>
                            <td className='p-5'>60s</td>
                        </tr>
                        <tr className='border-b bg-gray-800 border-gray-700'>
                            <td className='p-5'>/beg</td>
                            <td className='p-5'>Beg for money. Win anything from $1 to $500</td>
                            <td className='p-5'>None</td>
                            <td className='p-5'>3600s</td>
                        </tr>
                        <tr className='border-b bg-gray-800 border-gray-700'>
                            <td className='p-5'>/give</td>
                            <td className='p-5'>Give another player money</td>
                            <td className='p-5'>
                                <ol>
                                    <li>Player: mention of the player you want to give money</li>
                                    <li>Amount: amount of money to give the player</li>
                                </ol>
                            </td>
                            <td className='p-5'>60s</td>
                        </tr>
                        <tr className='border-b bg-gray-800 border-gray-700'>
                            <td className='p-5'>/quitwar</td>
                            <td className='p-5'>Use this command to quit the war and delete your profile</td>
                            <td className='p-5'>None</td>
                            <td className='p-5'>None</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Commands