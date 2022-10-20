 import {QUIZ_START , QUIZ_RESET , QUIZ_NEXT,QUIZ_SUBMIT, QUIZ_PREV , QUIZ_TIMEOUT, QUIZ_TIMER} from './actionTypes'

const initialState = {
    step : 1,
    activeQuestion: 0,
    answers: [],
    time: 60
}


const quizReducer = (state = initialState, action) => {

    const { type, payload } = action
   
    switch (type) {
        case QUIZ_START:
            return {
                ...state,step:2 , time: payload
            }
        case QUIZ_NEXT:
            console.log("12345678")

            return{
                ...state, answers: [...payload.answers], activeQuestion: state?.activeQuestion + 1
                // , time: payload?.time 
            }
        case QUIZ_SUBMIT:
            return {
                
                ...state,step:3,answers:[...payload] , time: payload?.time
            }
        case QUIZ_RESET:
            return{
                ...state,step:1,activeQuestion:0,answers:[], time: 60
            }
        case QUIZ_PREV:
            return{
                ...state,activeQuestion:state?.activeQuestion-1
            }
        case QUIZ_TIMEOUT:
            return{
                ...state, time: 0,step:3
            }
        case QUIZ_TIMER:
            return {
                ...state,time:payload.time
            }
        default:
            return state;
    }
}

export default quizReducer;