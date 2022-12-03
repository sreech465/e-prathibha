import axios from "axios";
import { Actions } from "../Components/types";

export const baseUrl = "http://test.e-prathibha.com/apis";

export const loginUser = ({ email, password, navigate }) => {
  const formData = {
    email: email,
    password: password,
  };
  return async (dispatch) => {
    try {
      await axios.post(`${baseUrl}/login`, formData).then((response) => {
        console.log("response from api", response.data);
        if (response.status == 200) {
          dispatch({ type: Actions.LOGIN, payload: response.data });
          navigate("/CategoryOfExams");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const registerUser = ({
  email,
  password,
  phone,
  confirmPassword,
  name,
  navigate,
}) => {
  const formData = {
    email: email,
    name: name,
    phone: phone,
    password: password,
    confirmPassword: confirmPassword,
  };
  console.log(email);
  console.log(name);
  console.log(phone);
  console.log(password);
  console.log(confirmPassword);
  console.log(formData);

  return async (dispatch) => {
    try {
      await axios.post(`${baseUrl}/register`, formData).then((response) => {
        console.log("response from api", response);
        if (response.status == 200) {
          dispatch({ type: Actions.REGISTER, payload: response.data });
          navigate("/Verify");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const verifyUser = ({ reg_code }) => {
  const formData = {
    reg_code: reg_code,
  };

  return async (dispatch) => {
    try {
      await axios.post(`${baseUrl}/verifyEmail`, formData).then((response) => {
        console.log("response from api", response);
        if (response.status == 200) {
          dispatch({ type: Actions.VERIFY, payload: response.data });
          alert("successfully verified email");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const getYearlyQuestions = ({ state2 }) => {
  const formData = {
    email: "jj@gmail.com",
    name: "jj",
    phone: "678",
    password: "jj",
    confirmPassword: "jj",
  };

  let config = {
    headers: {
      id: `${state2.Id}`,
      server_key: "3w99V63pW7tJ7vavGXtCKo8cp",
      tokenu: `${state2.Token}`,
    },
  };

  console.log(state2.Token);
  console.log(state2.Id);

  return async (dispatch) => {
    try {
      await axios
        .post(`${baseUrl}/test_free_exam`, formData, config)
        .then((response) => {
          console.log("response from api", response);

          if (response.status == 200) {
            dispatch({
              type: Actions.GETYEARLYQUESTIONS,
              payload: response.data,
            });
          }
        });
    } catch (err) {
      console.log(err);
    }
  };
};

export const premiumExams = ({ state2 }) => {
  const formData = {
    email: "jj@gmail.com",
    name: "jj",
    phone: "678",
    password: "jj",
    confirmPassword: "jj",
  };

  let config = {
    headers: {
      id: `${state2.Id}`,
      server_key: "3w99V63pW7tJ7vavGXtCKo8cp",
      tokenu: `${state2.Token}`,
    },
  };

  console.log(state2.Token);
  console.log(state2.Id);

  return async (dispatch) => {
    try {
      await axios
        .post(`${baseUrl}/premium_exam`, formData, config)
        .then((response) => {
          console.log("mahesh", response);

          if (response.status == 200) {
            dispatch({
              type: Actions.PREMIUMEXAMS,
              payload: response.data,
            });
          }
        });
    } catch (err) {
      console.log(err);
    }
  };
};

export const mockExams = ({ state2 }) => {
  const formData = {
    email: "jj@gmail.com",
    name: "jj",
    phone: "678",
    password: "jj",
    confirmPassword: "jj",
  };

  let config = {
    headers: {
      id: `${state2.Id}`,
      server_key: "3w99V63pW7tJ7vavGXtCKo8cp",
      tokenu: `${state2.Token}`,
    },
  };

  console.log(state2.Token);
  console.log(state2.Id);

  return async (dispatch) => {
    try {
      await axios
        .post(`${baseUrl}/mock_exam`, formData, config)
        .then((response) => {
          console.log("response from api", response);

          if (response.status == 200) {
            dispatch({
              type: Actions.MOCKEXAMS,
              payload: response.data,
            });
          }
        });
    } catch (err) {
      console.log(err);
    }
  };
};
export const writeTheExam = ({ id, state2 }) => {
  let config = {
    headers: {
      id: `${state2.Id}`,
      server_key: "3w99V63pW7tJ7vavGXtCKo8cp",
      tokenu: `${state2.Token}`,
    },
  };

  return async (dispatch) => {
    try {
      await axios
        .get(`${baseUrl}/start_exam?examId=${id}`, config)

        .then((response) => {
          console.log("response from api", response);

          dispatch({
            type: Actions.WRITETHEEXAM,
            payload: response.data.data.exam,
          });
        });
    } catch (err) {
      console.error(err);
    }
  };
};

export const submitTheExam = ({ state2, id }) => {
  let config = {
    headers: {
      id: `${state2.Id}`,
      server_key: "3w99V63pW7tJ7vavGXtCKo8cp",
      tokenu: `${state2.Token}`,
    },
  };

  const postData2 = {
    examId: `${id}`,
    examresultId: 63,
  };

  return async (dispatch) => {
    try {
      await axios
        .post(`${baseUrl}/submit`, postData2, config)

        .then((response) => {
          console.log("response from api", response.data);
          dispatch({ type: Actions.SUBMITEXAM, payload: response.data });
        });
    } catch (err) {
      console.error(err);
    }
  };
};

export const endTheExam = ({ state2, id }) => {
  let config = {
    headers: {
      id: `${state2.Id}`,
      server_key: "3w99V63pW7tJ7vavGXtCKo8cp",
      tokenu: `${state2.Token}`,
    },
  };

  const postData1 = {
    examId: `${id}`,
    qno: 1,
  };

  return async (dispatch) => {
    try {
      await axios
        .post(`${baseUrl}/finishExam`, postData1, config)

        .then((response) => {
          console.log("response from api", response.data);
          dispatch({ type: Actions.ENDTHEEXAM, payload: response.data });
        });
    } catch (err) {
      console.error(err);
    }
  };
};

export const paymentDetails = ({ state2 }) => {
  let config = {
    headers: {
      id: `${state2.Id}`,
      server_key: "3w99V63pW7tJ7vavGXtCKo8cp",
      tokenu: `${state2.Token}`,
    },
  };

  const postData4 = {
    packagearr: { 8: "1" },
    packagetype: "RAZORPAY",
    year: "",
  };

  return async (dispatch) => {
    try {
      await axios
        .post(`${baseUrl}/test_paymentGateway`, postData4, config)

        .then((response) => {
          console.log("response from api", response.data);
          dispatch({ type: Actions.PAYDETAILS, payload: response.data });
        });
    } catch (err) {
      console.error(err);
    }
  };
};

export const packageStar = ({ state2 }) => {
  console.log(state2.Id, state2.Token, "prabhas");
  let config = {
    headers: {
      id: `${state2.Id}`,
      server_key: "3w99V63pW7tJ7vavGXtCKo8cp",
      tokenu: `${state2.Token}`,
    },
  };

  let server_key = "3w99V63pW7tJ7vavGXtCKo8cp";

  return async (dispatch) => {
    try {
      await axios
        .post(`${baseUrl}/packageDetails`, server_key, config)

        .then((response) => {
          console.log("response from api", response.data);
          dispatch({ type: Actions.PACKAGEDETAILS, payload: response.data });
        });
    } catch (err) {
      console.error(err);
    }
  };
};
