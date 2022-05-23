import React from 'react'

import './Play.css'

import Game from '../../components/Game/Game'

const Play = () => {
    return (
        <div className='play'>
            <Game gameLevel={1}/>
        </div>
    )
}

export default Play