import { Actions } from "../Components/types";

const initialstate1 = {
  user1: "",
  user2: "",
  user3: "",
  user4: "",
  user5: "",
  user6: "",
  user7: "",
  user8: "",
  user9: "",
  user10: "",
};

export const loginReducer = (state = initialstate1, action) => {
  const { type, payload } = action;

  switch (type) {
    case Actions.LOGIN:
      return { ...state, user3: payload };
    default:
      return state;
  }
};

export const registerReducer = (state = initialstate1, action) => {
  const { type, payload } = action;

  switch (type) {
    case Actions.REGISTER:
      return { ...state, user1: payload };
    default:
      return state;
  }
};

export const verifyReducer = (state = initialstate1, action) => {
  const { type, payload } = action;

  switch (type) {
    case Actions.VERIFY:
      return { ...state, user2: payload };
    default:
      return state;
  }
};

export const yearlyQreducer = (state = initialstate1, action) => {
  const { type, payload } = action;

  switch (type) {
    case Actions.GETYEARLYQUESTIONS:
      return { ...state, user4: payload };
    default:
      return state;
  }
};

export const premiumReducer = (state = initialstate1, action) => {
  const { type, payload } = action;

  switch (type) {
    case Actions.PREMIUMEXAMS:
      return { ...state, user7: payload };
    default:
      return state;
  }
};

export const mockReducer = (state = initialstate1, action) => {
  const { type, payload } = action;

  switch (type) {
    case Actions.MOCKEXAMS:
      return { ...state, user8: payload };
    default:
      return state;
  }
};

export const writeExamReducer = (state = initialstate1, action) => {
  const { type, payload } = action;

  switch (type) {
    case Actions.WRITETHEEXAM:
      return { ...state, user5: payload };
    default:
      return state;
  }
};

export const submitExamReducer = (state = initialstate1, action) => {
  const { type, payload } = action;

  switch (type) {
    case Actions.SUBMITEXAM:
      return { ...state, user9: payload };
    default:
      return state;
  }
};

export const endExamReducer = (state = initialstate1, action) => {
  const { type, payload } = action;

  switch (type) {
    case Actions.ENDTHEEXAM:
      return { ...state, user6: payload };
    default:
      return state;
  }
};

export const payReducer = (state = initialstate1, action) => {
  const { type, payload } = action;

  switch (type) {
    case Actions.PAYDETAILS:
      return { ...state, user10: payload };
    default:
      return state;
  }
};
