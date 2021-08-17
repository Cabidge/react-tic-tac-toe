import { useState } from "react";
import CellContainer from "./CellContainer";

function TicTacToe() {
    const [cells, setCells] = useState(Array(9).fill(null));

    return <CellContainer cellStatuses={cells} />;
}

export default TicTacToe;
