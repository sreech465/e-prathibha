import React from "react";
import { useNavigate } from "react-router-dom";
const Checkouts = () => {
  const navigate = useNavigate();
  const handleGet = () => {
    navigate("/finalpage");
  };
  return (
    <>
      <div>Secured checkout</div>

      <div class="card">
        <h1>REVIEW ORDER</h1>
        <div>product</div>
        <hr />
        <div style={{ display: "flex" }}>
          <img
            class="card-img-top"
            style={{ width: 70, height: 90 }}
            src="data:image/jpeg;base64,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"
            alt="Card image cap"
          />
          <div class="card-body">
            <h2>Premium</h2>
            <div>Qty:1</div>
            <h5>Amount:499</h5>
            <div style={{ color: "green", fontWeight: "bold" }}>
              Exams:1995|1996|1997|1998|1999|2000|2001|2002|2003|
              <br />
              2004|2005|2006|2007|2008|2009|2010|2011|2012|2013|NCERT
              <br />
              session3|NCERT session3|NCERT session3|NCERT session3|NCERT
              <br />
              session3|NCERT session3|NCERT session4|NCERT session5| NCERT
              <br />
              session6|NCERT session7|NCERT session8|NCERT session9|NCERT
              <br />
              session10| NCERT session11|NCERT session12|NCERT session13|NCERT
              <br />
              session14|NCERT session15| NCERT session16|NCERT session17|NCERT
              <br />
              session18|NCERT session19|NCERT session20|NCERT session21|NCERT
              <br />
              session22|2014|2015|2016|2017|2018|
              <br />
              2019|2001|2002|2003|20042000|2001|2002|2003|20042000|
              <br />
              2001|2002|2003|20042000|2001|2002|2003|20042000|
              <br />
              2001|2002|2003|20042000|2001|2002|2003|20042000|2001|
              <br />
              2002|2003|20042000|2001|2002|2003|
              <br />
              20042000|2001|2002|2003|20042000|2001|
              <br />
              2002|2003|2004
            </div>
          </div>
        </div>
      </div>
      {/* <input
        style={{
          backgroundColor: "black",
          width: 130,
          height: 30,
          color: "white",
        }}
        type="button"
        value="MAKE PAYMENT"
        onclick={handlepay}
      /> */}
      <button
        style={{
          borderRadius: 40,
          backgroundColor: "black",
          color: "white",
          width: 120,
          height: 30,
          marginLeft: 50,
        }}
        onClick={handleGet}
      >
        PROCEED TO PAY
      </button>
      <h4 style={{ color: "gray" }}>MAKE PAYMENT</h4>
    </>
  );
};

export default Checkouts;
