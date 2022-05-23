import React, { useState } from 'react'

import './Play.css'

import Game from '../../components/Game/Game'

const Play = () => {

    const [gameLevel, setGameLevel] = useState(0)
    const [playing, setPlaying] = useState(false)

    const createLevelOneGame = () => {
        setGameLevel(1)
        setPlaying(true)
    }

    const createLevelTwoGame = () => {
        setGameLevel(2)
        setPlaying(true)
    }

    const createLevelThreeGame = () => {
        setGameLevel(3)
        setPlaying(true)
    }

    const createLevelFourGame = () => {
        setGameLevel(4)
        setPlaying(true)
    }

    return (
        <div className='play'>
            {
                playing ? 
                    <Game gameLevel={gameLevel} newGame={() => setPlaying(false)} /> :

                    <div className="new-game">
                        <h1>Créer une nouvelle partie</h1>
                        <div className="levels">
                            <div className="level" onClick={createLevelOneGame}>
                                <h4>Niveau 01</h4>
                            </div>
                            <div className="level" onClick={createLevelTwoGame}>
                                <h4>Niveau 02</h4>
                            </div>
                            <div className="level" onClick={createLevelThreeGame}>
                                <h4>Niveau 03</h4>
                            </div>
                            <div className="level" onClick={createLevelFourGame}>
                                <h4>Niveau 04</h4>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Play