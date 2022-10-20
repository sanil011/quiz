import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Trophy from './img/trophy.png'
import { resetQuiz } from "./redux/quizAction";
import quizData from "./data.json";
import Confetti from 'confetti-react';

const End = () => {
    const dispatch = useDispatch();
    const { answers } = useSelector((state) => state.quiz);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    console.log(quizData.data[3].correct)

    const handleAnswer = () => {
        setShowAnswer(true);
    }
    console.log(answers)
    useEffect(() => {
    let correct = 0;
    answers.forEach((result, index) => {
      if (result.a === quizData?.data[index].correct) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
  }, []);
    const handleReset = () => {
        
 dispatch(resetQuiz());
    }
    return (

        <div className="endBox">
            <Confetti  />
      <img src={Trophy} className="trophy" alt="trophy"  />
      <h3 className="end-heading">Your results</h3>
      <p className="end-text">
        {correctAnswers} of {quizData?.data.length}
      </p>
      <p className="end-text">
        <strong>
          {Math.floor((correctAnswers / quizData?.data.length) * 100)}%
        </strong>
      </p>
      <p>
        {/* <strong>Your time:</strong> {time}sec */}
      </p>
      <section className="end-btn">
        <button className="button check-btn" onClick={() => handleAnswer(true)}>
          Check your answers
        </button>
        <button
          className="button tryAgain-btn"
          style={{ marginLeft: "20px" }}
          onClick={handleReset}
        >
          Try again
        </button>
            </section>

            
       {showAnswer && <section className="modalBody">
          <header>
            <p className="end-heading">Your Answers</p>
          </header>
          <section className="content">
            <ul>
              {answers.map((result, i) => (
                <li key={i} className="answer">
                  {console.log(i)}
                  <p>
                    <strong>{result.q}</strong>
                  </p>
                  <p
                  className={
                      result.a === quizData?.data[i].correct
                        ? "right"
                        : "wrong"
                    }>
                    Your answer: {result.a}
                  </p>
                  {result.a !== quizData?.data[i].correct && (
                    <p className="correct" >
                      Correct answer: {quizData?.data[i].correct}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </section>
        </section>}

            </div>)
}

export default End;