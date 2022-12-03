import React from "react";
import { useSelector } from "react-redux";

const MockList = () => {
  const ock = useSelector((state) => state.MockReducer.user8);
  console.log(ock, "pawan");
  return <div>MockList</div>;
};

export default MockList;
