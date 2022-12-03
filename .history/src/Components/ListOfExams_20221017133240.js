import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getYearlyQuestions } from "../Redux/Actions";
import { useSelector } from "react-redux";
import "./ListExams.css";
import { Link } from "react-router-dom";

const ListOfExams = () => {
  const { LoginReducer, GetYearlyReducer } = useSelector((state) => state);

  const state2 = LoginReducer.user3.data;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getYearlyQuestions({ state2 }));
  }, []);

  const state1 = GetYearlyReducer.user4.data;

  return (
    <>
      {state1 ? (
        <>
          <h2 style={{ textAlign: "center" }}>
            PRATHIBHA UPSC CIVIL SERVICES APP
          </h2>
          <p style={{ textAlign: "center", color: "gray" }}>
            3 Years Previous Papers
          </p>
          <h3 style={{ textAlign: "center" }}>
            3 years Old Question Paper Civil Services (Prelims)
          </h3>
          <h4 style={{ textAlign: "center" }}>(0/3 Attempted)</h4>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Link
              style={{ textDecoration: "none" }}
              to={`/ListOfExams/${state1.exams[0]["Old question papers UPSC Civils (Pre)"][0].Exam.id}`}
            >
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {
                    state1.exams[0]["Old question papers UPSC Civils (Pre)"][0]
                      .Exam.name
                  }
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  UPSC PRELIMS PAPER 1
                </p>
              </div>
            </Link>

            <Link
              style={{ textDecoration: "none" }}
              to={`/ListOfExams/${state1.exams[0]["Old question papers UPSC Civils (Pre)"][1].Exam.id}`}
            >
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {
                    state1.exams[0]["Old question papers UPSC Civils (Pre)"][1]
                      .Exam.name
                  }
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  UPSC PRELIMS PAPER 1
                </p>
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to={`/ListOfExams/${state1.exams[0]["Old question papers UPSC Civils (Pre)"][2].Exam.id}`}
            >
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {
                    state1.exams[0]["Old question papers UPSC Civils (Pre)"][2]
                      .Exam.name
                  }
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  UPSC PRELIMS PAPER 1
                </p>
              </div>
            </Link>
          </div>
          <br />
          <p style={{ textAlign: "center" }}>
            (Limited UPSC Old Question Papers(CDS Geo
            scientists,CISF,CAPF,NDA,Engineering sevices and SO))
          </p>
          <p style={{ textAlign: "center" }}>(0/10 Attempted)</p>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Link
              style={{ textDecoration: "none" }}
              to={`/ListOfExams/${state1.exams[1]["Limited UPSC other than Civils"][0].Exam.id}`}
            >
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {
                    state1.exams[1]["Limited UPSC other than Civils"][0].years
                      .exam_year
                  }
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  UPSC PRELIMS PAPER 1
                </p>
              </div>{" "}
            </Link>

            <Link
              style={{ textDecoration: "none" }}
              to={`/ListOfExams/${state1.exams[1]["Limited UPSC other than Civils"][1].Exam.id}`}
            >
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {
                    state1.exams[1]["Limited UPSC other than Civils"][1].years
                      .exam_year
                  }
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  UPSC PRELIMS PAPER 1
                </p>
              </div>
            </Link>

            <Link
              style={{ textDecoration: "none" }}
              to={`/ListOfExams/${state1.exams[1]["Limited UPSC other than Civils"][2].Exam.id}`}
            >
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {
                    state1.exams[1]["Limited UPSC other than Civils"][2].years
                      .exam_year
                  }
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  UPSC PRELIMS PAPER 1
                </p>
              </div>
            </Link>
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Link
              style={{ textDecoration: "none" }}
              to={`/ListOfExams/${state1.exams[1]["Limited UPSC other than Civils"][3].Exam.id}`}
            >
              {" "}
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {
                    state1.exams[1]["Limited UPSC other than Civils"][3].years
                      .exam_year
                  }
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  UPSC PRELIMS PAPER 1
                </p>
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to={`/ListOfExams/${state1.exams[1]["Limited UPSC other than Civils"][4].Exam.id}`}
            >
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {
                    state1.exams[1]["Limited UPSC other than Civils"][4].years
                      .exam_year
                  }
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  UPSC PRELIMS PAPER 1
                </p>
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to={`/ListOfExams/${state1.exams[1]["Limited UPSC other than Civils"][5].Exam.id}`}
            >
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {
                    state1.exams[1]["Limited UPSC other than Civils"][5].years
                      .exam_year
                  }
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  UPSC PRELIMS PAPER 1
                </p>
              </div>
            </Link>
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Link
              style={{ textDecoration: "none" }}
              to={`/ListOfExams/${state1.exams[1]["Limited UPSC other than Civils"][6].Exam.id}`}
            >
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {
                    state1.exams[1]["Limited UPSC other than Civils"][6].years
                      .exam_year
                  }
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  UPSC PRELIMS PAPER 1
                </p>
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to={`/ListOfExams/${state1.exams[1]["Limited UPSC other than Civils"][7].Exam.id}`}
            >
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {
                    state1.exams[1]["Limited UPSC other than Civils"][7].years
                      .exam_year
                  }
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  UPSC PRELIMS PAPER 1
                </p>
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to={`/ListOfExams/${state1.exams[1]["Limited UPSC other than Civils"][8].Exam.id}`}
            >
              {" "}
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {
                    state1.exams[1]["Limited UPSC other than Civils"][8].years
                      .exam_year
                  }
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  UPSC PRELIMS PAPER 1
                </p>
              </div>
            </Link>
          </div>
          <br />
          <Link
            style={{ textDecoration: "none" }}
            to={`/ListOfExams/${state1.exams[1]["Limited UPSC other than Civils"][9].Exam.id}`}
          >
            <div class="cards" style={{ marginLeft: "400px", width: "180px" }}>
              <p style={{ color: "white", paddingLeft: "30px" }}>
                {
                  state1.exams[1]["Limited UPSC other than Civils"][9].years
                    .exam_year
                }
              </p>
              <p style={{ color: "white", paddingLeft: "30px" }}>
                UPSC PRELIMS PAPER 1
              </p>
            </div>
          </Link>
          <p style={{ textAlign: "center" }}>
            (Limited Questions from basics of school NCERT (6th to 10th class)))
          </p>
          <p style={{ textAlign: "center" }}>(0/4 Attempted)</p>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Link
              style={{ textDecoration: "none" }}
              to={`/ListOfExams/${state1.exams[2]["Limited NCERT"][0].Exam.id}`}
            >
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {state1.exams[2]["Limited NCERT"][0].Exam.name}
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  UPSC PRELIMS PAPER 1
                </p>
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to={`/ListOfExams/${state1.exams[2]["Limited NCERT"][1].Exam.id}`}
            >
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {state1.exams[2]["Limited NCERT"][1].Exam.name}
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  UPSC PRELIMS PAPER 1
                </p>
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to={`/ListOfExams/${state1.exams[2]["Limited NCERT"][2].Exam.id}`}
            >
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {state1.exams[2]["Limited NCERT"][2].Exam.name}
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  UPSC PRELIMS PAPER 1
                </p>
              </div>
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              to={`/ListOfExams/${state1.exams[2]["Limited NCERT"][3].Exam.id}`}
            >
              <div class="cards">
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  {state1.exams[2]["Limited NCERT"][3].Exam.name}
                </p>
                <p style={{ color: "white", paddingLeft: "30px" }}>
                  UPSC PRELIMS PAPER 1
                </p>
              </div>
            </Link>
          </div>
          <p style={{ color: "gray", textAlign: "center" }}>
            (Click on here to start your exam)
          </p>
        </>
      ) : (
        "loading"
      )}
    </>
  );
};
export default ListOfExams;
