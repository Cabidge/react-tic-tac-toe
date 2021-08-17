import Cell from "./Cell";
import "./CellContainer.css";

function CellContainer(props) {
    return (
        <div className="CellContainer">
            {props.cellStatuses.map((status, index) => (
                <Cell key={index} id={index} status={status} />
            ))}
        </div>
    );
}

export default CellContainer;
