import "./Cell.css";

function Cell({ status, onClick }) {
    return <div className="Cell" onClick={onClick}></div>;
}

export default Cell;
