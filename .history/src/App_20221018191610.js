import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Register from "./Components/Register";
import { useSelector } from "react-redux";
import Verify from "./Components/Verify";
import Header from "./Components/Header";
import Login from "./Components/Login";
import { Routes, Route } from "react-router-dom";
import WriteExam from "./Components/WriteExam";
import { BrowserRouter } from "react-router-dom";
import ListOfExams from "./Components/ListOfExams";
import CategoryOfExams from "./Components/CategoryOfExams";
import PremiumList from "./Components/PremiumList";
import MockList from "./Components/MockList";
import PwriteExam from "./Components/PwriteExam";
import Sidebar from "./Components/Sidebar";
import Packageanu from "./Components/Packageanu";
import Checkouts from "./Components/Checkouts";

import Finalpage from "./Components/Finalpage";
function App() {
  const state = useSelector((state) => state);
  console.log(state);

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/Verify" element={<Verify />} />
            <Route path="/" element={<Login />} />
            <Route path="/ListOfExams" element={<ListOfExams />} />
            <Route path="/PremiumList" element={<PremiumList />} />
            <Route path="/MockList" element={<MockList />} />
            <Route path="/CategoryOfExams" element={<CategoryOfExams />} />
            <Route path="/ListOfExams/:id" element={<WriteExam />} />
            <Route path="/PremiumList/:id" element={<WriteExam />} />
            <Route path="/packages" element={<Packageanu />} />
            <Route path="/checkouts" element={<Checkouts />} />
            <Route path="/finalpage" element={<Finalpage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
