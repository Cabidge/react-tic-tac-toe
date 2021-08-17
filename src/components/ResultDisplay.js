function ResultDisplay({ winner, onClickReset }) {
    const message =
        winner == null ? "It's a Tie!" : `Player ${winner + 1} Wins!`;

    return (
        <div className="ResultDisplay">
            {message}
            <button onClick={onClickReset}>Rematch?</button>
        </div>
    );
}

export default ResultDisplay;
