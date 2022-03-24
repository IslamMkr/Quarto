import React, { useEffect, useState } from 'react'

import Piece from '../Piece/Piece';

import './PiecesPool.css'

const initialPieces = [
        "big-dark-square-full",
        "big-dark-square-empty",
        "big-dark-round-full",
        "big-dark-round-empty",
        "small-dark-square-full",
        "small-dark-square-empty",
        "small-dark-round-full",
        "small-dark-round-empty",
        "big-clear-square-full",
        "big-clear-square-empty",
        "big-clear-round-full",
        "big-clear-round-empty",
        "small-clear-square-full",
        "small-clear-square-empty",
        "small-clear-round-full",
        "small-clear-round-empty"
    ]

const PiecesPool = ({ usedPieces, onPieceSelected }) => {
    const [pieces, setPieces] = useState(initialPieces)
    const [pieceSeleceted, setPieceSeleceted] = useState('')

    const pieceClicked = (pieceDesc) => {
        setPieceSeleceted(pieceDesc)
        onPieceSelected(pieceDesc)
    }

    useEffect(() => {
        setPieces(initialPieces.filter(piece => !usedPieces.includes(piece)))
    }, [usedPieces])
    

    return (
        <div className='pieces-pool'>
            {
                pieces.map ( pieceDesc => 
                    pieceDesc === pieceSeleceted ?
                        <Piece key={pieces.indexOf(pieceDesc)} 
                            pieceNumber={pieces.indexOf(pieceDesc)}
                            pieceDesc={pieceDesc} 
                            selected={true}
                            onClick={pieceClicked} />
                        :
                        <Piece key={pieces.indexOf(pieceDesc)} 
                            pieceNumber={pieces.indexOf(pieceDesc)}
                            pieceDesc={pieceDesc} 
                            selected={false}
                            onClick={pieceClicked} />
                )
            }
        </div>
    )
}

export default PiecesPool