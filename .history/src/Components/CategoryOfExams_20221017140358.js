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
    <div>
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="../download1.png" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="..." alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="..." alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default CategoryOfExams;
