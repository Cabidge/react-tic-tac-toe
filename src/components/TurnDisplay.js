function TurnDisplay({ playerId }) {
    return (
        <span className="TurnDisplay">{`Player ${playerId + 1} (${
            playerId === 0 ? "Red" : "Blue"
        })`}</span>
    );
}

export default TurnDisplay;
