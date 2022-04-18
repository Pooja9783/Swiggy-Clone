import { createStore, applyMiddleware } from "redux";
import { dataReducer } from "./reducer";
import thunk from "redux-thunk";
export const store = createStore(dataReducer, applyMiddleware(thunk));
