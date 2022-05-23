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

const Game = ({ gameLevel }) => {
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

    const [selectedPiece, setSelectedPiece] = useState('')
    const [usedPieces, setUsedPieces] = useState([])
    const [pieceConfirmed, setPieceConfirmed] = useState(false)

    const pieceSelected = (pieceDesc) => {
        if (!pieceConfirmed) {
            setSelectedPiece(pieceDesc)
        }
    }

    const pieceClicked = () => {
        // Do nothing
    }

    const handleConfirmation = () => {
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

    const tileSelected = (number) => {
        if (pieceConfirmed) {   
            if (gameBoard[number] === "") {
                let board = gameBoard.map ((tile, index) => index === number ? selectedPiece : tile)
                setGameBoard(board)
                setUsedPieces([...usedPieces, selectedPiece])
                setSelectedPiece('')

                if (GameLogic.checkForAWin(board, gameLevel)) {
                    console.log("****************** win")
                }
            }

            setPieceConfirmed(false)
            setToDo(todos[1])
        }
    }

    return (
        <div className='game'>
            <div className='instructions'>
                <div className="player-instructions">
                    <h1 className='player'>{player}</h1>
                    <h4>{whatToDo}</h4>
                </div>
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
            <hr />
            <div className='play-zone'>
                <QuartoBoard gameBoard={gameBoard} onTileSelected={tileSelected} />
                <PiecesPool usedPieces={usedPieces}  onPieceSelected={pieceSelected} />
            </div>
        </div>
    )
}

export default Game