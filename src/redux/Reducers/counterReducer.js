import * as actionTypes from '../Actions/actionTypes';
import initalState from './initalState';

const counterReducer = (state = initalState.counter, action) => {
  switch (action.type) {
    case actionTypes.INCREASE:
      return state + action.payload;
    case actionTypes.DECREASE:
      return state - action.payload;
    default:
      return state;
  }
}

export default counterReducer;