import React from "react";
import { useSelector } from "react-redux";

const Transaction = () => {
  const details = useSelector((state) => state.TransactionReducer.user13);
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
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Transaction;
