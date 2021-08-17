import { useState } from "react";
import CellContainer from "./CellContainer";
import TurnDisplay from "./TurnDisplay";

function check3(cells, start, step) {
    const val = cells[start];
    if (val == null) return false;

    for (let i = start + step, n = 0; n < 2; i += step, n++) {
        if (cells[i] !== val) return false;
    }
    return true;
}

// Not the most optimized but good enough for a shitty tic tac toe
function checkWin(cells) {
    // Check columns
    for (let start = 0; start < 3; start++) {
        if (check3(cells, start, 3)) return cells[start];
    }

    // Check rows
    for (let start = 0; start < 9; start += 3) {
        if (check3(cells, start, 1)) return cells[start];
    }

    // Check \ diagonal
    if (check3(cells, 0, 4)) return cells[0];

    // Check / diagonal
    if (check3(cells, 2, 2)) return cells[2];

    return null;
}

function TicTacToe() {
    const [isActive, setActive] = useState(true);
    const [winner, setWinner] = useState(null);
    const [cells, setCells] = useState(Array(9).fill(null));
    const [playerId, setPlayerId] = useState(0);

    function handleClick(index) {
        // Don't handle click if the game is over
        if (!isActive) return;

        // Prevent already colored cells from being updated
        if (cells[index] != null) return;

        // Set cell at the given index to playerId
        const newCells = [...cells];
        newCells[index] = playerId;
        setCells(newCells);

        // Swaps playerId from 0 to 1 or vice versa
        setPlayerId((playerId + 1) % 2);

        const newWinner = checkWin(newCells);
        if (newWinner != null) {
            console.log(`Player ${winner + 1} is the Winner!`);
            setWinner(newWinner);
            setActive(false);
        }
    }

    return (
        <div>
            <TurnDisplay playerId={playerId} />
            <CellContainer cellStatuses={cells} onCellClick={handleClick} />
        </div>
    );
}

export default TicTacToe;
