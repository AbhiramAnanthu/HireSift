import Home from "./components/home"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import WorkSpace from "./components/workspace"
import CandidateForm from "./components/candidate";
import Success from "./components/success";
import CandidateSorted from "./components/candidateSort";
import ApplicantDetail from "./components/ApplicantDetail";
function App(){
  return(
    <>
    <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workspace" element={<WorkSpace />} />
            <Route path="/candidate-form" element={<CandidateForm />}></Route>
            <Route path='/success' element={<Success />}></Route>
            <Route path='/candidate-sorted-list' element={<CandidateSorted />}></Route>
            <Route path="/candidate-detail" element={<ApplicantDetail />}></Route>
          </Routes>
      </Router>
    </>
  )
}

export default App