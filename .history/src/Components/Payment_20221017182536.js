import React from "react";
import { useSelector } from "react-redux";

const Payment = () => {
  const paytm = useSelector((state) => state.payReducer);
  console.log(paytm);
  return <div></div>;
};

export default Payment;
