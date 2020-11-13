/* 
The Objects Games Replay Screen
*/
 
import React from "react";
 
/* Constant OBSReplay, activates when numAnswers is 6 */
const OBSReplay = ({ numCorrectAnswers, playAgain }) => (
    <div className="scoreBoard">
        {/* Displays the users score out of 6 */}
        <div className="score">You scored {numCorrectAnswers} / 6 correct answers!</div>
        {/* Play Again button that when pressed will generate 6 new questions */}
        <button className="playAgainButton" onClick={playAgain}
        >Play again?
        </button>
    </div>
);
 
export default OBSReplay;
