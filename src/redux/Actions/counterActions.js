import * as actionTypes from './actionTypes';

export const increase = () => {
  return { type: actionTypes.INCREASE, payload: 1 }
}

export const decrease = () => {
  return { type: actionTypes.DECREASE, payload: 1 }
}