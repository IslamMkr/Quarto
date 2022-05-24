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

const todos = [
    "Placez la pièce sur l'échequier",
    "Choisissez une pièce et confirmez"
]

const players = [
    "Joueur 01",
    "Joueur 02"
]

const Game = ({ gameLevel, newGame }) => {
    const [gameBoard, setGameBoard] = useState(
        [
        '', '', '', '',
        '', '', '', '',
        '', '', '', '',
        '', '', '', ''
        ]
    )

    const tree = new Tree(0, gameBoard)

    const [player, setPlayer] = useState(players[0])
    const [whatToDo, setToDo] = useState([todos[1]])

    const [usedPieces, setUsedPieces] = useState([])
    const [selectedPiece, setSelectedPiece] = useState('')
    const [pieceConfirmed, setPieceConfirmed] = useState(false)

    const [playing, setPlaying] = useState(true)

    const pieceSelected = (pieceDesc) => {
        if (playing) {
            if (!pieceConfirmed) {
                setSelectedPiece(pieceDesc)
            }
        }
    }

    const pieceClicked = () => {
        // Do nothing
        console.log(tree.root.configuration)
    }

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

    const tileSelected = (number) => {
        if (playing) {
            if (pieceConfirmed) {   
                if (gameBoard[number] === "") {
                    let board = gameBoard.map ((tile, index) => index === number ? selectedPiece : tile)
                    setGameBoard(board)
                    setUsedPieces([...usedPieces, selectedPiece])
                    setSelectedPiece('')

                    tree.root.configuration = copy(board)

                    if (Level.checkForAWin(board, gameLevel)) {
                        setPlaying(false)
                    } else if (tree.ready()) {
                        let remainingPieces = initialPieces.filter (piece => !usedPieces.includes(piece))
                        let createdTree = createTree(tree, remainingPieces, 1)
                    }
                }

                setPieceConfirmed(false)
                setToDo(todos[1])
            }
        }
    }

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

class TreeNode {
	constructor(key, configuration, parent = null) {
		this.key = key;
		this.configuration = configuration;
		this.parent = parent;
		this.children = [];
	}

	get isLeaf() {
		return this.children.length === 0;
	}

	get hasChildren() {
		return !this.isLeaf;
	}
}

class Tree {
	constructor(key, configuration) {
		this.root = new TreeNode(key, configuration);
	}

	*preOrderTraversal(node = this.root) {
		yield node;
		if (node.children.length) {
			for (let child of node.children) {
				yield* this.preOrderTraversal(child);
			}
		}
	}

	*postOrderTraversal(node = this.root) {
		if (node.children.length) {
			for (let child of node.children) {
				yield* this.postOrderTraversal(child);
			}
		}
		yield node;
	}

    ready() {
        let placeePieces = 0

        for (let i = 0; i < this.root.configuration.length; i++) {
            if (this.root.configuration[i] !== '') placeePieces++
        }

        return placeePieces >= 2
    }

	insert(parentNodeKey, key, configuration) {
		for (let node of this.preOrderTraversal()) {
			if (node.key === parentNodeKey) {
				node.children.push(new TreeNode(key, configuration, node));
				return true;
			}
		}
		return false;
	}

	remove(key) {
		for (let node of this.preOrderTraversal()) {
			const filtered = node.children.filter(c => c.key !== key);
			if (filtered.length !== node.children.length) {
				node.children = filtered;
				return true;
			}
		}
		return false;
	}

	find(key) {
		for (let node of this.preOrderTraversal()) {
			if (node.key === key) {
				return node;
			}
		}
		return undefined;
	}
}

export default Game