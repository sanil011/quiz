import React, { useState, useEffect,useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {
  nextQuiz,
  prevQuiz,
  submitQuiz,
  timeOut,
  timer1,
} from "./redux/quizAction";
import data from './data';

const Quiz = () => {
    const dispatch = useDispatch();
  const { activeQuestion ,answers ,time } = useSelector((state) => state.quiz)
  const [selected, setSelected] = useState("");
  const radiosWrapper = useRef();
  const [data1, setData] = useState(data?.data[activeQuestion]);
  const [timer, setTimer] = useState(time);


  useEffect(() => {
    if (timer > 0) {
     dispatch(timer1({time:timer}))
      setTimeout(() => setTimer(timer - 1), 1000);
      
    } else {
      dispatch(timeOut());
    }
  }, [timer]);
   
    

    useEffect(() => {
    setData(data?.data[activeQuestion]);

    if (answers[activeQuestion] != undefined) {

      setSelected(answers[activeQuestion].a);

    }
  }, [data1, activeQuestion]);

  const handleNext = () => {

  let ans = [...answers];
    ans[activeQuestion] = {
      q: data1.question,
      a: selected,
    };
    
console.log(ans)
  dispatch(
      nextQuiz({
        answers: ans
      })
    );
    setSelected("");
    const findCheckedInput =
      radiosWrapper.current.querySelector("input:checked");
    if (findCheckedInput) {
      findCheckedInput.checked = false;
    }

  };

  const handlePrev = () => {
    dispatch(prevQuiz())
  };

  const handleSubmit = () => {

    let ans = [...answers];
    ans[activeQuestion] = {
      q: data.data[activeQuestion].question,
      a: selected,
    };
    dispatch(
      submitQuiz({
 answers: ans
      }));
  }

  const changeHandler = (e) => {

    setSelected(e.target.value)
  }
  console.log(activeQuestion)
  return (
    <div className="quiz-container" id="quiz">
      <div class="pattern-dots-md gray-light">

      <section className="questionHead">
        <h3>
          Question {activeQuestion + 1}/{data?.data.length}
          </h3>
          
      </section>
        <div className="quiz-header">
          <h5 className='timer'>{timer}</h5>
        <div className='question'>
            <h2 id="question">{data.data[activeQuestion].question} </h2>
             
        </div>

        <section className='options' ref={radiosWrapper}>  
          {data.data[activeQuestion].choices.map((choice, i) => (
            <label key={i}
              className= "text text-bg"
              
            >
              <input value={choice}
                type="checkbox"
                className='input'
                checked={choice === selected}
                onChange={changeHandler} 
                />{choice}
              <span className='checkmark'></span>     
            </label>
              ))}
        </section>
      </div>
      <section className="questionBottom">
        {activeQuestion <= 0 ? null : (
          <button className="button" onClick={handlePrev}>
            Prev
          </button>
        )}

        {activeQuestion + 1 >= data?.data.length ? (
          <button className="button nextBtn"  onClick={handleSubmit}>
            Submit
          </button>
        ) : (
          <button className="button nextBtn" onClick={handleNext}>
            Next
          </button>
        )}
      </section>
      </div>
      </div>
  )
}

export default Quiz;