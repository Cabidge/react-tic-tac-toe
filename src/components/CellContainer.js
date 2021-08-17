import Cell from "./Cell";
import "./CellContainer.css";

function CellContainer({ cellStatuses, onCellClick }) {
    return (
        <div className="CellContainer">
            {cellStatuses.map((status, index) => (
                <Cell
                    key={index}
                    status={status}
                    onClick={(e) => onCellClick(index, e)}
                />
            ))}
        </div>
    );
}

export default CellContainer;
