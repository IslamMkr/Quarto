import { useState } from 'react';

import './App.css';

import PiecesPool from './components/PiecesPool/PiecesPool';
import QuartoBoard from './components/QuartoBoard/QuartoBoard';

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

    const pieceSelected = (pieceDesc) => {
        setSelectedPiece(pieceDesc)
    }

    const tileSelected = (number) => {
        if (gameBoard[number] === "") {
            setGameBoard(gameBoard.map ((tile, index) => index === number ? selectedPiece : tile))
            setUsedPieces([...usedPieces, selectedPiece])
            setSelectedPiece('')
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
