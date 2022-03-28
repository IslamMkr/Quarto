import './Piece.css'

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