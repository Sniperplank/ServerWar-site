import React from 'react'

function Commands() {
    return (
        <div className='flex bg-neutral-900 justify-center items-center h-screen'>
            <div>
                <table className="table-fixed">
                    <thead>
                        <tr>
                            <th className='w-1/4'>Name</th>
                            <th className='w-1/4'>Description</th>
                            <th className='w-1/4'>Options</th>
                            <th className='w-1/4'>Cooldown</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>/help</td>
                            <td>Help on how to participate in the war</td>
                            <td>None</td>
                            <td>None</td>
                        </tr>
                        <tr>
                            <td>/commands</td>
                            <td>List all available commands</td>
                            <td>None</td>
                            <td>None</td>
                        </tr>
                        <tr>
                            <td>/joinwar</td>
                            <td>Use this command to participate in the war</td>
                            <td>None</td>
                            <td>None</td>
                        </tr>
                        <tr>
                            <td>/profile</td>
                            <td>Check your profile</td>
                            <td>None</td>
                            <td>None</td>
                        </tr>
                        <tr>
                            <td>/health</td>
                            <td>Show how much health you have</td>
                            <td>None</td>
                            <td>None</td>
                        </tr>
                        <tr>
                            <td>/shield</td>
                            <td>Show how much shield you have</td>
                            <td>None</td>
                            <td>None</td>
                        </tr>
                        <tr>
                            <td>/money</td>
                            <td>Show how much money you have</td>
                            <td>None</td>
                            <td>None</td>
                        </tr>
                        <tr>
                            <td>/attack</td>
                            <td>Attack another player</td>
                            <td>
                                <ol>
                                    <li>Target: mention of the player you want to attack</li>
                                </ol>
                            </td>
                            <td>10s</td>
                        </tr>
                        <tr>
                            <td>/buy</td>
                            <td>Buy items to help in the war</td>
                            <td>
                                <ol>
                                    <li>Health: sets player health to 100</li>
                                    <li>Shield: sets player shield to 100</li>
                                </ol>
                            </td>
                            <td>60s</td>
                        </tr>
                        <tr>
                            <td>/beg</td>
                            <td>Beg for money. Win anything from $1 to $500</td>
                            <td>None</td>
                            <td>3600s</td>
                        </tr>
                        <tr>
                            <td>/give</td>
                            <td>Give another player money</td>
                            <td>
                                <ol>
                                    <li>Plauer: mention of the player you want to give money</li>
                                    <li>Amount: amount of money to give the player</li>
                                </ol>
                            </td>
                            <td>60s</td>
                        </tr>
                        <tr>
                            <td>/quitwar</td>
                            <td>Use this command to quit the war and delete your profile</td>
                            <td>None</td>
                            <td>None</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Commands