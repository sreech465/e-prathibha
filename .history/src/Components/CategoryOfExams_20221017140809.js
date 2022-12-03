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
      <img
        style={{ width: 40, height: 30 }}
        src="data:image/png;base64,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"
      />
      <div class="card-body">This is some text within a card body.</div>
    </div>
  );
}

export default CategoryOfExams;
