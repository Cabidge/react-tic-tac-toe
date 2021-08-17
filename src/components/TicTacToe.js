import { useReducer } from "react";

import "./TicTacToe.css";

import CellContainer from "./CellContainer";
import TurnDisplay from "./TurnDisplay";
import ResultDisplay from "./ResultDisplay";

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

function initialState() {
    return {
        isActive: true,
        winner: null,
        cells: Array(9).fill(null),
        playerId: 0,
    };
}

function reducer(state, action) {
    switch (action.type) {
        case "reset":
            return initialState();
        default:
            return { ...state, ...action };
    }
}

function TicTacToe() {
    const [{ isActive, winner, cells, playerId }, dispatch] = useReducer(
        reducer,
        initialState()
    );

    function handleClick(index) {
        // Don't handle click if the game is over
        if (!isActive) return;

        // Prevent already colored cells from being updated
        if (cells[index] != null) return;

        // Set cell at the given index to playerId
        const newCells = [...cells];
        newCells[index] = playerId;

        dispatch({
            cells: newCells,
            playerId: (playerId + 1) % 2, // Swaps playerId from 0 to 1 or vice versa
        });

        const newWinner = checkWin(newCells);
        if (newWinner != null) {
            console.log(`Player ${winner + 1} is the Winner!`);
            dispatch({
                isActive: false,
                winner: newWinner,
            });
        }

        if (newCells.every((cell) => cell !== null)) {
            dispatch({ isActive: false });
        }
    }

    return (
        <div>
            <div className="panel">
                {isActive ? (
                    <TurnDisplay playerId={playerId} />
                ) : (
                    <ResultDisplay
                        winner={winner}
                        onClickReset={() => dispatch({ type: "reset" })}
                    ></ResultDisplay>
                )}
            </div>
            <CellContainer cellStatuses={cells} onCellClick={handleClick} />
        </div>
    );
}

export default TicTacToe;
