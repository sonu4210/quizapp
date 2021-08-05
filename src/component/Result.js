import React from 'react';
const Result =({score,playagain}) =>(
    <div className="score-board">
        <div className="score">You scored {score} /5 correct answer</div>
        <button className="playBtn" onClick={playagain}>play again</button>
    </div>
);
export default Result