import { useState } from 'react';

import './App.css';

import PiecesPool from './components/PiecesPool/PiecesPool';
import QuartoBoard from './components/QuartoBoard/QuartoBoard';

import GameLogic from './GameLogic'

function App() {
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
        <div className="App">
            <div className='play-zone'>
                <QuartoBoard gameBoard={gameBoard} onTileSelected={tileSelected} />
                <PiecesPool usedPieces={usedPieces}  onPieceSelected={pieceSelected} />
            </div>
        </div>
    );
}

export default App;
