function ResultDisplay({ winner, onClickReset }) {
    const message =
        winner == null ? "It's a Tie!" : `Player ${winner + 1} Wins!`;

    return (
        <span className="ResultDisplay">
            {message}
            <button onClick={onClickReset}>Rematch?</button>
        </span>
    );
}

export default ResultDisplay;
