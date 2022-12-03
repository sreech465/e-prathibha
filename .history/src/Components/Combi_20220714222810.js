import { combineReducers } from "redux";
import { reducer, reducer1, reducer2 } from "../Redux/Reducer";

const rootReducer = combineReducers({
    LReducer : reducer,

    RReducer : reducer1,

    VReducer : reducer2,

})