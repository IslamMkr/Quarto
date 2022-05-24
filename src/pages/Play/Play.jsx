import React, { useState } from 'react'

import './Play.css'

import Game from '../../components/Game/Game'

const Play = () => {

    // Etat de niveau de jeu
    const [gameLevel, setGameLevel] = useState(0)

    // Etat de la partie
    const [playing, setPlaying] = useState(false)

    // Créer une partie de niveau 1
    const createLevelOneGame = () => {
        setGameLevel(1)
        setPlaying(true)
    }

    // Créer une partie de niveau 2
    const createLevelTwoGame = () => {
        setGameLevel(2)
        setPlaying(true)
    }

    // Créer une partie de niveau 3
    const createLevelThreeGame = () => {
        setGameLevel(3)
        setPlaying(true)
    }

    // Créer une partie de niveau 4
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