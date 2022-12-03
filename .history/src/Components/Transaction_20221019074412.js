import React from "react";
import { useSelector } from "react-redux";

const Transaction = () => {
  const details = useSelector((state) => state.TransactionReducer.user13);
  console.log(details);
  return (
    <table>
      <thead>
        <th>S.No.</th>
        <th>Transaction ID</th>
        <th>Amount</th>
        <th>Net Amount</th>
        <th>Date & Time</th>
        <th>Payment Mode</th>
        <th>Remarks</th>
      </thead>
      <tbody>
        <tr>ggggggg</tr>
      </tbody>
    </table>
  );
};

export default Transaction;
