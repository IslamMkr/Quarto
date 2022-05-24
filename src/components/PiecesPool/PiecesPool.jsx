import React, { useEffect, useState } from 'react'

import Piece from '../Piece/Piece';

import './PiecesPool.css'

/**
 * Les pièces
 */
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

/**
 * Représentation de la zone des pièces
 * 
 * @param {usedPieces, onPieceSelected} 
 * usedPieces : les pièces utilisées
 * onPieceSelected : fonction qui gère la selection d'une pièce 
 * @returns 
 */
const PiecesPool = ({ usedPieces, onPieceSelected }) => {
    const [pieces, setPieces] = useState(initialPieces)

    /**
     * Permet de notifier le composant Game qu'une pièce est selectionné.
     * 
     * @param {*} pieceDesc description de la pièce selectionné 
     */
    const pieceClicked = (pieceDesc) => {
        onPieceSelected(pieceDesc)
    }

    useEffect(() => {
        setPieces(initialPieces.filter(piece => !usedPieces.includes(piece)))
    }, [usedPieces])
    

    return (
        <div className='pieces-pool'>
            {
                pieces.map ( pieceDesc => 
                    <Piece key={pieces.indexOf(pieceDesc)} 
                        pieceNumber={pieces.indexOf(pieceDesc)}
                        pieceDesc={pieceDesc} 
                        onClick={pieceClicked} />
                )
            }
        </div>
    )
}

export default PiecesPool