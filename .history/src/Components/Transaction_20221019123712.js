import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { transactionDetails } from "../Redux/Actions";

const Transaction = () => {
  const { LoginReducer, GetYearlyReducer, PremiumReducer, MockReducer } =
    useSelector((state) => state);
  const state2 = LoginReducer.user3.data;
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(transactionDetails({ state2 }));
    };
  }, []);
  const details = useSelector((state) => state.TransactionReducer.user13.data);
  console.log(details);
  return (
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">S.No.</th>
          <th scope="col">Transaction ID</th>
          <th scope="col">Amount</th>
          <th scope="col">student Id</th>
          <th scope="col">Date & Time</th>
          <th scope="col">Payment Mode</th>
          <th scope="col">Remarks</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>{details[0].Payment.token}</td>
          <td>{details[0].Payment.amount}</td>
          <td>{details[0].Payment.student_id}</td>
          <td>{details[0].Payment.date}</td>
          <td>{details[0].Payment.name}</td>

          <td>{details[0].Payment.status}</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>{details[1].Payment.token}</td>
          <td>{details[1].Payment.amount}</td>
          <td>{details[1].Payment.student_id}</td>
          <td>{details[1].Payment.date}</td>
          <td>{details[1].Payment.name}</td>

          <td>{details[1].Payment.status}</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>{details[2].Payment.token}</td>
          <td>{details[2].Payment.amount}</td>
          <td>{details[2].Payment.student_id}</td>
          <td>{details[2].Payment.date}</td>
          <td>{details[2].Payment.name}</td>

          <td>{details[2].Payment.status}</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>{details[3].Payment.token}</td>
          <td>{details[3].Payment.amount}</td>
          <td>{details[3].Payment.student_id}</td>
          <td>{details[3].Payment.date}</td>
          <td>{details[3].Payment.name}</td>

          <td>{details[3].Payment.status}</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>{details[4].Payment.token}</td>
          <td>{details[4].Payment.amount}</td>
          <td>{details[4].Payment.student_id}</td>
          <td>{details[4].Payment.date}</td>
          <td>{details[4].Payment.name}</td>

          <td>{details[4].Payment.status}</td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>{details[5].Payment.token}</td>
          <td>{details[5].Payment.amount}</td>
          <td>{details[5].Payment.student_id}</td>
          <td>{details[5].Payment.date}</td>
          <td>{details[5].Payment.name}</td>

          <td>{details[5].Payment.status}</td>
        </tr>
        <tr>
          <th scope="row">7</th>
          <td>{details[6].Payment.token}</td>
          <td>{details[6].Payment.amount}</td>
          <td>{details[6].Payment.student_id}</td>
          <td>{details[6].Payment.date}</td>
          <td>{details[6].Payment.name}</td>

          <td>{details[6].Payment.status}</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>{details[7].Payment.token}</td>
          <td>{details[7].Payment.amount}</td>
          <td>{details[7].Payment.student_id}</td>
          <td>{details[7].Payment.date}</td>
          <td>{details[7].Payment.name}</td>

          <td>{details[7].Payment.status}</td>
        </tr>

        <tr>
          <th scope="row">9</th>
          <td>{details[8].Payment.token}</td>
          <td>{details[8].Payment.amount}</td>
          <td>{details[8].Payment.student_id}</td>
          <td>{details[8].Payment.date}</td>
          <td>{details[8].Payment.name}</td>

          <td>{details[8].Payment.status}</td>
        </tr>
        <tr>
          <th scope="row">10</th>
          <td>{details[9].Payment.token}</td>
          <td>{details[9].Payment.amount}</td>
          <td>{details[9].Payment.student_id}</td>
          <td>{details[9].Payment.date}</td>
          <td>{details[9].Payment.name}</td>

          <td>{details[9].Payment.status}</td>
        </tr>
        <tr>
          <th scope="row">11</th>
          <td>{details[10].Payment.token}</td>
          <td>{details[10].Payment.amount}</td>
          <td>{details[10].Payment.student_id}</td>
          <td>{details[10].Payment.date}</td>
          <td>{details[10].Payment.name}</td>

          <td>{details[10].Payment.status}</td>
        </tr>
        <tr>
          <th scope="row">12</th>
          <td>{details[11].Payment.token}</td>
          <td>{details[11].Payment.amount}</td>
          <td>{details[11].Payment.student_id}</td>
          <td>{details[11].Payment.date}</td>
          <td>{details[11].Payment.name}</td>

          <td>{details[11].Payment.status}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Transaction;
