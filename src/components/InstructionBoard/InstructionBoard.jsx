import React, { useState } from 'react'

import './InstructionBoard.css'

import Piece from '../Piece/Piece'

const InstructionBoard = ({ piece }) => {
    const [player, setPlayer] = useState("Joueur 1")
    const [whatToDo, setToDo] = useState("Choisissez une piéce")

    const pieceClicked = () => {
        // Do nothing
    }

    return (
        <div className='instructions'>
            <h1 className='player'>{player}</h1>
            <div className='todo'>
                <h4>{whatToDo}</h4>
                <div className='selected-piece'>
                    {
                        piece !== '' &&
                        <Piece pieceDesc={piece} onClick={pieceClicked} />
                    }
                </div>
                <button className='btn'>Confirmer</button>
            </div>
        </div>
    )
}

export default InstructionBoard