import {ActionType} from '../../types/ComponentInterfaces';
import {
  INCREMENT_QUESTION_INDEX,
  RESET_QUESTION_INDEX,
} from '../actions/ActionTypes';

const initialState = {
  // Define your initial state properties here
  currentQuestionIndex: 0,
  totalPoints: 0,
};
const nextReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case INCREMENT_QUESTION_INDEX:
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        totalPoints: state.totalPoints + action.payload,
      };
    case RESET_QUESTION_INDEX:
      return {
        ...state,
        currentQuestionIndex: 0,
        totalPoints: 0,
      };
    default:
      return state;
  }
};
export default nextReducer;
