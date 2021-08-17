import "./Cell.css";

function Cell({ status, onClick }) {
    let className = "Cell";
    if (status != null) {
        className += status === 0 ? " red" : " blue";
    }

    return <div className={className} onClick={onClick}></div>;
}

export default Cell;
