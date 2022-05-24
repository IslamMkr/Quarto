import React, { useState } from 'react'

import './Game.css'

import PiecesPool from '../PiecesPool/PiecesPool'
import QuartoBoard from '../QuartoBoard/QuartoBoard'

import Piece from '../Piece/Piece'

import Level from '../../Level'

import {
    createTree,
    copy
} from "../../TreeUtils"

import {
    Tree
} from "../../Tree"

import minimax from "../../algorithms/Minimax"

/**
 * Description des pièces du jeu
 * 
 * TAILLE (GRAND/PETIT)
 * COULEUR (CLAIR/FONCE)
 * FORME (CARRE/ROND)
 * CLARITE (PLEIN/VIDE)
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
 * Instructions pour les joueurs
 */
const todos = [
    "Placez la pièce sur l'échequier",
    "Choisissez une pièce et confirmez"
]

/**
 * Les deux joueurs
 */
const players = [
    "Joueur 01",
    "Joueur 02"
]

/**
 * Le composant résponsable de la méchanique du jeu.
 * 
 * @param {gameLevel, newGame}
 * gameLevel : le niveau du jeu
 * newGame : fonction pour créer une nouvelle partie  
 * @returns 
 */
const Game = ({ gameLevel, newGame }) => {

    /**
     * Etat initial de l'échequier, représenté par un tableau de 16 cases.
     */
    const [gameBoard, setGameBoard] = useState(
        [
        '', '', '', '',
        '', '', '', '',
        '', '', '', '',
        '', '', '', ''
        ]
    )

    // Arbre du jeu
    const tree = new Tree(0, gameBoard)

    /**
     * Etats des paramètres de jeu
     */ 
    const [player, setPlayer] = useState(players[0])
    const [whatToDo, setToDo] = useState([todos[1]])

    const [usedPieces, setUsedPieces] = useState([])
    const [selectedPiece, setSelectedPiece] = useState('')
    const [pieceConfirmed, setPieceConfirmed] = useState(false)

    const [playing, setPlaying] = useState(true)

    const [evaluation, setEvaluation] = useState(0)

    /**
     * Si le jeu est en cours, cette fonction permet d'actualiser 
     * l'etat de la pièce selectionné
     * 
     * @param {*} pieceDesc description de la pièce selectionné
     */
    const pieceSelected = (pieceDesc) => {
        if (playing) {
            // Aucun pièce n'est confirmé
            // On peut encore changer la pièce
            // Sinon impossible
            if (!pieceConfirmed) {
                setSelectedPiece(pieceDesc)
            }
        }
    }

    const pieceClicked = () => {
        // Do nothing
        console.log(tree.root.configuration)
    }

    /**
     * Une fois une pièce est confirmé, l'état de la selection de pièce en false
     * ce qui ne permet pas au joueur de changer la pièce.
     * Et on donne au joueur suivant a jouer.
     */
    const handleConfirmation = () => {
        if (playing) {
            if (selectedPiece !== '') {
                if (player === players[0]) {
                    setPlayer(players[1])
                } else {
                    setPlayer(players[0])
                }

                setPieceConfirmed(true)
                setToDo(todos[0])
            }
        }
    }

    /**
     * Permet de placer la pièce dans une case selectionné
     * 
     * @param {*} number numéro de la case selectionné 
     */
    const tileSelected = (number) => {
        // Si on cours de jeu
        if (playing) {
            // Si la pièce est confirmé
            if (pieceConfirmed) {   
                // Si la case selectionné est vide
                // On place la pièce dans la case
                if (gameBoard[number] === "") {
                    let board = gameBoard.map ((tile, index) => index === number ? selectedPiece : tile)
                    setGameBoard(board)
                    setUsedPieces([...usedPieces, selectedPiece])
                    setSelectedPiece('')

                    tree.root.configuration = copy(board)

                    // Vérifier si la partie est fini
                    // Vérification si le joueur a gagné
                    // Sinon on génére l'arbre du jeu a partir de cette position
                    if (Level.checkForAWin(board, gameLevel)) {
                        setPlaying(false)
                    } else if (tree.ready()) {
                        let remainingPieces = initialPieces.filter (piece => !usedPieces.includes(piece))
                        // Générer l'arbre du jeu
                        let createdTree = createTree(tree, remainingPieces, 1)
                        setEvaluation(minimax(tree.root, createdTree, true))
                        console.log(evaluation)
                    }
                }

                setPieceConfirmed(false)
                setToDo(todos[1])
            }
        }
    }

    /**
     * Créer une nouvelle
     */
    const handleNewGame = () => {
        newGame()
    }

    return (
        <div className='game'>
            {
                playing ?  
                    <div className='instructions'>
                        <div className="player-instructions">
                            <h1 className='player'>{player}</h1>
                            <h4>{whatToDo}</h4>
                        </div>
                        <div className='confirmation'>
                            <div className='selected-piece'>
                                {
                                    selectedPiece !== '' &&
                                    <Piece pieceDesc={selectedPiece} onClick={pieceClicked} />
                                }
                            </div>
                            {
                                !pieceConfirmed &&
                                <button className='btn'
                                        onClick={handleConfirmation}>Confirmer</button>
                            }
                        </div>
                    </div> 
                    :
                    <div>
                        <h1>{player} a gagné la partie !</h1> 
                        <div className='level' onClick={handleNewGame}>
                            <h4>Nouvelle Partie</h4>
                        </div>
                    </div>
            }
            <hr />
            <div className='play-zone'>
                <QuartoBoard gameBoard={gameBoard} onTileSelected={tileSelected} />
                <PiecesPool usedPieces={usedPieces}  onPieceSelected={pieceSelected} />
            </div>
        </div>
    )
}

export default Game