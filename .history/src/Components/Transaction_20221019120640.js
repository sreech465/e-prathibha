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
          <th scope="col">Net Amount</th>
          <th scope="col">Date & Time</th>
          <th scope="col">Payment Mode</th>
          <th scope="col">Remarks</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>{details[0].Payment.id}</td>
          <td></td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>{details[1].Payment.id}</td>
          <td></td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>{details[2].Payment.id}</td>
          <td></td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>{details[3].Payment.id}</td>
          <td></td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>{details[4].Payment.id}</td>
          <td></td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>{details[5].Payment.id}</td>
          <td></td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>{details[6].Payment.id}</td>
          <td></td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>{details[7].Payment.id}</td>
          <td></td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>{details[0].Payment.id}</td>
          <td></td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>{details[8].Payment.id}</td>
          <td></td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>{details[9].Payment.id}</td>
          <td></td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>{details[10].Payment.id}</td>
          <td></td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>{details[11].Payment.id}</td>
          <td></td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Transaction;
