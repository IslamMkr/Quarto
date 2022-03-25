import React, { useState } from 'react'

import './Game.css'

import PiecesPool from '../PiecesPool/PiecesPool'
import QuartoBoard from '../QuartoBoard/QuartoBoard'

import GameLogic from '../../GameLogic'

const Game = () => {
    const [gameBoard, setGameBoard] = useState(
        [
        '', '', '', '',
        '', '', '', '',
        '', '', '', '',
        '', '', '', ''
        ]
    )

    const [selectedPiece, setSelectedPiece] = useState('')
    const [usedPieces, setUsedPieces] = useState([])

    const gameLevel = 1

    const pieceSelected = (pieceDesc) => {
        setSelectedPiece(pieceDesc)
    }

    const tileSelected = (number) => {
        if (gameBoard[number] === "") {
            let board = gameBoard.map ((tile, index) => index === number ? selectedPiece : tile)
            setGameBoard(board)
            setUsedPieces([...usedPieces, selectedPiece])
            setSelectedPiece('')

            if (GameLogic.checkForAWin(board, gameLevel)) {
                console.log("****************** win")
            }
        }
    }

    return (
        <div className='game'>
            <div className='play-zone'>
                <QuartoBoard gameBoard={gameBoard} onTileSelected={tileSelected} />
                <PiecesPool usedPieces={usedPieces}  onPieceSelected={pieceSelected} />
            </div>
        </div>
    )
}

export default Game