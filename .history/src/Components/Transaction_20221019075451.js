import React from "react";
import { useSelector } from "react-redux";

const Transaction = () => {
  const details = useSelector((state) => state.TransactionReducer.user13);
  console.log(details);
  return (
    <table>
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Transaction ID</th>
          <th>Amount</th>
          <th>Net Amount</th>
          <th>Date & Time</th>
          <th>Payment Mode</th>
          <th>Remarks</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Transaction;
