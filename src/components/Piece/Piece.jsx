import './Piece.css'

const Piece = ({ pieceDesc, selected, onClick }) => {

    const clickHandler = () => {
        onClick(pieceDesc)
    }

    return (
        <div className={selected ? "clicked" : "piece"}
            onClick={clickHandler}>
            <div className={pieceDesc}></div>
        </div>
    )
}

export default Piece