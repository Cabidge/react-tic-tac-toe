import { useState } from "react";
import CellContainer from "./CellContainer";

function TicTacToe() {
    const [cells, setCells] = useState(Array(9).fill(null));
    const [playerId, setPlayerId] = useState(0);

    function handleClick(index) {
        // Set cell at the given index to playerId
        const newCells = [...cells];
        newCells[index] = playerId;
        setCells(newCells);

        // Swaps playerId from 0 to 1 or vice versa
        setPlayerId((playerId + 1) % 2);
    }

    return <CellContainer cellStatuses={cells} onCellClick={handleClick} />;
}

export default TicTacToe;
