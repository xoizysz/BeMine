import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Question from "./components/Question";
import LastPage from "./components/Lastpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question" element={<Question />} />
        <Route path="/lastPage" element={<LastPage />} />
      </Routes>
    </Router>
  );
}

export default App;
