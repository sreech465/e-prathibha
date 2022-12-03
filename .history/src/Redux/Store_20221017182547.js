import { applyMiddleware } from "redux";

import { createStore } from "redux";
import thunk from "redux-thunk";
import { rootreducer } from "./CombineReducers";

export const store = createStore(rootreducer, applyMiddleware(thunk));
