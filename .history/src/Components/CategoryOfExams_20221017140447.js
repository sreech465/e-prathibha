import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getYearlyQuestions } from "../Redux/Actions";
import { premiumExams } from "../Redux/Actions";
import { mockExams } from "../Redux/Actions";
import { useSelector } from "react-redux";

function CategoryOfExams() {
  const { LoginReducer, GetYearlyReducer, PremiumReducer, MockReducer } =
    useSelector((state) => state);

  const state2 = LoginReducer.user3.data;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getYearlyQuestions({ state2 }));
    dispatch(premiumExams({ state2 }));
    dispatch(mockExams({ state2 }));
  }, []);

  console.log(PremiumReducer);
  console.log(MockReducer);
  console.log(GetYearlyReducer);

  return (
    <div class="card">
      <div class="card-body">This is some text within a card body.</div>
    </div>
  );
}

export default CategoryOfExams;
