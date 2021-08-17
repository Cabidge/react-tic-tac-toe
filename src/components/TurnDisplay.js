function TurnDisplay({ playerId }) {
    return (
        <div clas="TurnDisplay">{`Player ${playerId + 1} (${
            playerId === 0 ? "Red" : "Blue"
        })`}</div>
    );
}

export default TurnDisplay;
