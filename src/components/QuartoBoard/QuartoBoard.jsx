import React from 'react'

import Tile from '../Tile/Tile'

import './QuartoBoard.css'

/**
 * Représentation de l'échequier
 * 
 * @param {gameBoard, onTileSelected} 
 * gameBoard : tableau d'état de l'échequier
 * onTileSelected : fonction qui gère la selection des cases
 * @returns 
 */
const QuartoBoard = ({ gameBoard, onTileSelected }) => {

    const tileSelected = (number) => {

        // Si la case selectionné ne continet aucun pièce
        // On notifie le composant Game
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