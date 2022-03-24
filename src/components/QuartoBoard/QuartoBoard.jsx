import React from 'react'

import Tile from '../Tile/Tile'

import './QuartoBoard.css'

const QuartoBoard = ({ gameBoard, onTileSelected }) => {

    const tileSelected = (number) => {

        if (gameBoard[number] === '') {
            onTileSelected(number)
        }
    }

    return (
        <div className='quarto-board'>
            {
                gameBoard.map ( (pieceDesc, index) =>
                    pieceDesc !== '' ?
                        <Tile key={index} 
                            number={index} 
                            piece={pieceDesc}
                            onTileSelected={tileSelected} />
                            :
                        <Tile key={index} 
                            number={index} 
                            piece=''
                            onTileSelected={tileSelected} />
                )
            }
        </div>
    )
}

export default QuartoBoard