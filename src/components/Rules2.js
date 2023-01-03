import { useState, useEffect } from "react";

const Rules2 = () => {
    return (
        <>
            <div className="rules-grid-container">
                <div className="grid-item">Player 1 is assigned the start player. Players must alternate turns, and only one disc can be dropped in each turn. On your turn, click on a column to place one of your colored discs into any of the seven slots.</div>
                <div className="grid-item"><img src="./rules-images/img1.gif" /></div>
                <div className="grid-item">If there are no discs in the column, then the disc will be palced at the bottom. If there is already a disc in the column, then the disc will be placed above any other existing discs.</div>
                <div className="grid-item"><img src="./rules-images/img2.gif" /></div>
                <div className="grid-item">Use strategy and outsmart your opponent to win the game. The game ends when there is a 4-in-a-row or a stalemate.</div>
                <div className="grid-item"><img src="./rules-images/Winner!.gif" /></div>
            </div>
        </>
    )
}

export default Rules2