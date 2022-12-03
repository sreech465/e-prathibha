import { combineReducers } from "redux";
import { loginReducer, payReducer, submitExamReducer } from "./Reducer";
import { endExamReducer } from "./Reducer";
import { yearlyQreducer } from "./Reducer";
import { verifyReducer } from "./Reducer";
import { registerReducer } from "./Reducer";
import { writeExamReducer } from "./Reducer";
import { premiumReducer } from "./Reducer";
import { mockReducer } from "./Reducer";

export const rootreducer = combineReducers({
  RegisterReducer: registerReducer,
  VerifyReducer: verifyReducer,
  LoginReducer: loginReducer,
  GetYearlyReducer: yearlyQreducer,
  WexamReducer: writeExamReducer,
  EexamReducer: endExamReducer,
  PremiumReducer: premiumReducer,
  MockReducer: mockReducer,
  SubmitExamReducer: submitExamReducer,
  PayReducer: payReducer,
});
