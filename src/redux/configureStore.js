import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers/index";


const configureStore = () => {
  return createStore(rootReducer, {}, applyMiddleware(thunk));
}

export default configureStore;