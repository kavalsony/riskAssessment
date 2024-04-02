import {ArticleAction} from '../../types/ComponentInterfaces';
import {INCREMENT_QUESTION_INDEX} from '../actions/ActionTypes';

const initialState = {
  // Define your initial state properties here
  currentQuestionIndex: 0,
  totalPoints: 0,
};
const nextReducer = (state = initialState, action: ArticleAction) => {
  switch (action.type) {
    case INCREMENT_QUESTION_INDEX:
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        totalPoints: state.totalPoints + action.payload,
      };
    default:
      return state;
  }
};
export default nextReducer;
