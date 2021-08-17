import { useState } from "react";
import CellContainer from "./CellContainer";

function TicTacToe() {
    const [cells, setCells] = useState(Array(9).fill(null));

    function handleClick(index) {
        console.log(index);
    }

    return <CellContainer cellStatuses={cells} onCellClick={handleClick} />;
}

export default TicTacToe;
