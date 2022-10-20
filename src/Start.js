import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startQuiz } from "./redux/quizAction";

const Start = () => {
  const dispatch = useDispatch();
//   const {time} = useSelector((state) => state.quiz)
  const [minute, setMinute] = useState(1);
  const [second, setSecond] = useState(0);
  const [time, setTime] = useState(60);
    

  const handleQuizStart = () => {
    dispatch(startQuiz(time));
  };
    
    
    
  useEffect(() => {
    if (minute > 59) {
      setMinute(1);
    }
    if (second > 59) {
      setSecond(1);
    }
  }, [minute, second]);
    useEffect(() => {
    console.log(minute);
    console.log(typeof minute);
    if (minute !== NaN && second !== NaN) {
      setTime(minute * 60 + second);
    }
  }, [minute, second]);
  return (
    <div className="startBox">

        <div className="start-container">
          <h1 className="start">Start the Quiz</h1>
          <p>Good luck!</p>
          <p>Time:{time}sec</p>
          <button className=" button startButton" onClick={handleQuizStart}>
            START
          </button>
        </div>

    </div>
  );
};

export default Start;
