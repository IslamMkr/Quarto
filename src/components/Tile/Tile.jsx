import React from 'react'

import './Tile.css'

import Piece from '../Piece/Piece'

/**
 * Représentation d'une case dans l'échequier
 * 
 * @param {number, piece, onTileSelected}
 * number : numéro de la case
 * piece : pièce dans cette case
 * onTileSelected : fonction qui gère la selection de cette case 
 * @returns 
 */
const Tile = ({ number, piece, onTileSelected }) => {

    const tileSelected = () => {
        onTileSelected(number)
    }

    const pieceClicked = () => {
        // Do nothing 
        // Implement just to remove error
    }

    return (
        <div className='tile'
            onClick={tileSelected}>
                {
                    piece !== '' &&
                    <Piece pieceDesc={piece} onClick={pieceClicked} />
                }
        </div>
    )
}

export default Tile