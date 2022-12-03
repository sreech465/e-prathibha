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
  return details.map((source) => {
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
          <td>{source.Payment.id}</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </table>;
  });
};

export default Transaction;
