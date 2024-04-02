import {createStore, combineReducers} from 'redux';
import nextReducer from '../reducer/reducer';

const rootReducer = combineReducers({
  next: nextReducer,
});
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
