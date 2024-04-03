import {INCREMENT_QUESTION_INDEX, RESET_QUESTION_INDEX} from './ActionTypes';

export const nextQuestion = (points: number) => {
  return {
    type: INCREMENT_QUESTION_INDEX,
    payload: points,
  };
};
export const resetQuiz = () => {
  return {
    type: RESET_QUESTION_INDEX,
  };
};
