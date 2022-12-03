import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getYearlyQuestions } from "../Redux/Actions";
import { premiumExams } from "../Redux/Actions";
import { mockExams } from "../Redux/Actions";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function CategoryOfExams() {
  const { LoginReducer, GetYearlyReducer, PremiumReducer, MockReducer } =
    useSelector((state) => state);

  const navigate = useNavigate();

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

  const handleGet = () => {
    navigate("/ListOfExams");
  };

  const handlePremium = () => {
    navigate("/PremiumList");
  };

  const handleMock = () => {
    navigate("/MockList");
  };

  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignContent: "space-around",
          backgroundColor: "gray",
          paddingLeft: 80,
        }}
      >
        <div class="card" style={{ boxShadow: 100, display: "flex" }}>
          <img
            style={{ width: 80, height: 50 }}
            src="data:image/png;base64,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"
          />
          <div style={{ flex: 1 }}>
            <h2 style={{ textDecorationLine: "underline" }}>
              EXPLORE FOR FREE
            </h2>
            <div class="card-body">
              A.3 years old Question
              <br /> paper civils services
              <br />
              (Prelims)
              <br />
              B.Limited UPSC Old <br />
              question papers(CDS <br />
              GEO scientists,CISF
              <br /> ,CAPF ,NDA,engineering services) <br />
              C.Limited questions from
              <br /> basics of School
            </div>
            <button
              style={{
                borderRadius: 40,
                backgroundColor: "black",
                color: "white",
              }}
              onClick={handleGet}
            >
              START NOW
            </button>
          </div>
        </div>
        <div class="card" style={{ boxShadow: 100, display: "flex" }}>
          <img
            style={{ width: 80, height: 50 }}
            src="data:image/png;base64,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"
          />
          <h2 style={{ textDecorationLine: "underline" }}>PREMIUM PACKAGE</h2>
          <div class="card-body">
            A.26 years old Question
            <br /> paper civils services
            <br />
            (Prelims) <br />
            B.2014-2020 other UPSC <br /> Old question papers( <br />
            CDS ,GEO scientists(Pre)
            <br />
            ,CISF,CAPF,NDA
            <br />
            ,Engineering Services(Pre) <br />
            and SO)
            <br />
            C.Comprehensive basics of <br />
            school NCERT (6th class to <br /> 10th class)
            <br />
          </div>
          <button
            style={{
              borderRadius: 40,
              backgroundColor: "black",
              color: "white",
            }}
            onClick={handlePremium}
          >
            START NOW
          </button>
        </div>
        <div class="card" style={{ boxShadow: 100, display: "flex" }}>
          <img
            style={{ width: 80, height: 50 }}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAADT0lEQVRo3u3ZTWgeRRzH8c+TpJUqolIQD6II60XrQaUlylaLqCCJsoIXoUZQ8ZJ48GBF8KJIsdWTYkHiy7UpFFZQL+2hyJ4UD6JUkC22YKn4CgUVjW087Dyy3ezzmOc1a8kPHuaZ2d2Z+c5v5z/DDheJWtWCOEruxjPYgStH3P45nMZMlqenBqloqgIxjzcwEYr+HCFEC5sVg3UjhgMSR8nOEsR7eAc/qHFtCFrBJA5jm8KZgVR25Nk2RJanT46g86sUR8nvw6provT/jpC+PSaIiUr7QwO5LKQD27weKoP8HdLt692pQUHaeimOkntG3XCWp+dxPmQHjo7/RqQ4Sn7BVaVrn+DMCFlauC+0eQzfKyLZr3g5y9PTvVRWjlqT+ANHcC/uGiFEVbsq+S9woF+Qtjvz2IRpbB0jzAqewG2KQe1JU5X8BC7J8vQEvh0jBIijZDqArPT6bN1kH8VKvlZt6vfBoS1I660NkKZpA6Rp2gBpmjZAmqYNkKbpogGZGryK8SuOkhk8rNihv5nl6dn/HUgcJXvxQqloBknTXq32Nr52gOMo2VeCWMRJxWesD5oGchy/4ZsaiP3YE7LzWZ4+jYfwHaabBvIKbs3y9OMKxD48F7ILWZ4egCxPv8QsTpW/opxVfFTeluVpvt5EpX7tL0HMtyEq2tU0R7pBLHSAgGsaC1LjxFsd7nsQi40Mv53mRM19s1jClsY5EiDa0WmhixOzOIgtONQoR2rmRLfX6SAuxSHsbowjNa9TJ4iZCsQclhvhyBpDbHlOtCEey/L0Lxqw++1jYq+CYJ13v8NwohNISx8fkPuE6NeJ3VmeLlfvK4P8hBtwLU6MEGASe124AVwLxBLm6iC4cI4cC+nzcZRsHhWI4pRqj+LMcqDXqayyI6/jETyAo3GULCq2yP3qqyxPf6wpvz2kh/8Doh1il/B4JydWgWR5ejyOkkfxLnaG3yA6gvtrym8O6eddIMpOzHVzYhVIgPkonBo9hTtxud4DQEtxWnu0ppMt3BSyX9dcn+kHYhVIgDmJF0PF/a4zK1me1sFfjeuwjM9KAFco3HvfGudE3eiNTXGUbMen+BmvIlI4dH0A1A8E418QbwnpVrxWuXYGHyrWlJ4g4B8rfCK29/oMGwAAAABJRU5ErkJggg=="
          />
          <h2 style={{ textDecorationLine: "underline" }}>PRACTICE SESSION</h2>
          <div class="card-body">This is some text within a card body.</div>
          <button
            style={{
              borderRadius: 40,
              backgroundColor: "black",
              color: "white",
              width: 50,
              height: 20,
            }}
            onClick={handleMock}
          >
            START NOW
          </button>
        </div>
      </div>
      <Sidebar />
    </>
  );
}

export default CategoryOfExams;
