import {
  QUIZ_START,
  QUIZ_NEXT,
  QUIZ_SUBMIT,
  QUIZ_RESET,
  QUIZ_PREV,
  QUIZ_TIMEOUT,
  QUIZ_TIMER,
} from "./actionTypes";

export const startQuiz = (time) => (dispatch) => {
  dispatch({
    type: QUIZ_START,
    payload: time,
  });
};

export const nextQuiz =
  ({ answers , time }) =>
    (dispatch) => {
     console.log(answers)
    dispatch({
      type: QUIZ_NEXT,
      payload: { answers: answers, time:  time ,},
    });
    };


export const prevQuiz = () => (dispatch) => {
  dispatch({
    type: QUIZ_PREV,
    payload: null,
  });
};

export const submitQuiz =
  ({ answers}) =>
  (dispatch) => {
    dispatch({
      type: QUIZ_SUBMIT,
      payload:  answers

    });
  };

export const resetQuiz = () => (dispatch) => {
  dispatch({
    type: QUIZ_RESET,
    payload: null,
  });
};

export const timeOut = () => (dispatch) => {
  dispatch({
    type: QUIZ_TIMEOUT,
    payload: null,
  });
};

export const timer1 = ({ time }) => (dispatch) => {
  dispatch({
    type: QUIZ_TIMER,
    payload: { time:time },
  })
}