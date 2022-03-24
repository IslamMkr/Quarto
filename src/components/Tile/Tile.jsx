import React from 'react'

import './Tile.css'

import Piece from '../Piece/Piece'

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