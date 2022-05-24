import './Piece.css'

/**
 * Représentation d'une pièce
 * 
 * @param {pieceDesc, onClick} 
 * pieceDesc : description d'une pièce
 * onClick : fonction qui gère l'action du clique 
 * @returns 
 */
const Piece = ({ pieceDesc, onClick }) => {

    const clickHandler = () => {
        onClick(pieceDesc)
    }

    return (
        <div className="piece"
            onClick={clickHandler}>
            <div className={pieceDesc}></div>
        </div>
    )
}

export default Piece