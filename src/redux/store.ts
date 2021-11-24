import { createStore, applyMiddleware } from "redux";
import Thunk from "redux-thunk";
import { rootReducers } from "./rootReducers";

export const store = createStore(rootReducers, applyMiddleware(Thunk));
