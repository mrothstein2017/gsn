import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import user from "./reducers/auth";

const store = createStore(
  combineReducers({
    user: user
  }),
  applyMiddleware(thunk)
);

// Hydrate the authToken from localStorage if it exist

export default store;
