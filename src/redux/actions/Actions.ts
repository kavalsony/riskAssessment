import {INCREMENT_QUESTION_INDEX} from './ActionTypes';

export const nextQuestion = (points: number) => {
  return {
    type: INCREMENT_QUESTION_INDEX,
    payload: points,
  };
};
