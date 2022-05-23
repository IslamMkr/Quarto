import React, { useState } from 'react'

import './Game.css'

import PiecesPool from '../PiecesPool/PiecesPool'
import QuartoBoard from '../QuartoBoard/QuartoBoard'

import Piece from '../Piece/Piece'

import GameLogic from '../../GameLogic'

const todos = [
    "Placez la pièce sur l'échequier",
    "Choisissez une pièce et confirmez"
]

const players = [
    "Joueur 01",
    "Joueur 02"
]

const Game = ({ gameLevel, newGame }) => {
    const [gameBoard, setGameBoard] = useState(
        [
        '', '', '', '',
        '', '', '', '',
        '', '', '', '',
        '', '', '', ''
        ]
    )

    const [player, setPlayer] = useState(players[0])
    const [whatToDo, setToDo] = useState([todos[1]])

    const [usedPieces, setUsedPieces] = useState([])
    const [selectedPiece, setSelectedPiece] = useState('')
    const [pieceConfirmed, setPieceConfirmed] = useState(false)

    const [playing, setPlaying] = useState(true)

    const pieceSelected = (pieceDesc) => {
        if (playing) {
            if (!pieceConfirmed) {
                setSelectedPiece(pieceDesc)
            }
        }
    }

    const pieceClicked = () => {
        // Do nothing
    }

    const handleConfirmation = () => {
        if (playing) {
            if (selectedPiece !== '') {
                if (player === players[0]) {
                    setPlayer(players[1])
                } else {
                    setPlayer(players[0])
                }

                setPieceConfirmed(true)
                setToDo(todos[0])
            }
        }
    }

    const tileSelected = (number) => {
        if (playing) {
            if (pieceConfirmed) {   
                if (gameBoard[number] === "") {
                    let board = gameBoard.map ((tile, index) => index === number ? selectedPiece : tile)
                    setGameBoard(board)
                    setUsedPieces([...usedPieces, selectedPiece])
                    setSelectedPiece('')

                    if (GameLogic.checkForAWin(board, gameLevel)) {
                        setPlaying(false)
                    }
                }

                setPieceConfirmed(false)
                setToDo(todos[1])
            }
        }
    }

    const handleNewGame = () => {
        newGame()
    }

    return (
        <div className='game'>
            {
                playing ?  
                    <div className='instructions'>
                        <div className="player-instructions">
                            <h1 className='player'>{player}</h1>
                            <h4>{whatToDo}</h4>
                        </div>
                        <div className='confirmation'>
                            <div className='selected-piece'>
                                {
                                    selectedPiece !== '' &&
                                    <Piece pieceDesc={selectedPiece} onClick={pieceClicked} />
                                }
                            </div>
                            {
                                !pieceConfirmed &&
                                <button className='btn'
                                        onClick={handleConfirmation}>Confirmer</button>
                            }
                        </div>
                    </div> 
                    :
                    <div>
                        <h1>{player} a gagné la partie !</h1> 
                        <div className='level' onClick={handleNewGame}>
                            <h4>Nouvelle Partie</h4>
                        </div>
                    </div>
            }
            <hr />
            <div className='play-zone'>
                <QuartoBoard gameBoard={gameBoard} onTileSelected={tileSelected} />
                <PiecesPool usedPieces={usedPieces}  onPieceSelected={pieceSelected} />
            </div>
        </div>
    )
}

export default Game