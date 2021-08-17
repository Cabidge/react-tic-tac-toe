import "./ResultDisplay.css";

function ResultDisplay({ winner, onClickReset }) {
    const message =
        winner == null ? "It's a Tie!" : `Player ${winner + 1} Wins!`;

    return (
        <span className="ResultDisplay">
            {message}
            <button className="reset" onClick={onClickReset}>
                ↻
            </button>
        </span>
    );
}

export default ResultDisplay;
