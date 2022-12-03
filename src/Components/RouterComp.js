import React from "react";

const RouterComp = () => {
  return (
    <Routes>
      <Route path="/Verify" element={<Verify />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/ListOfExams" element={<ListOfExams />} />
      <Route path="/WriteExam" element={<WriteExam />} />
    </Routes>
  );
};

export default RouterComp;
