import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import Day from "./Day";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/day/:id" element={<Day />} />
      </Routes>
    </Router>
  );
}

export default App;