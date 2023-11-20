import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/WHS-VSA">
          <Route index element={<Home />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;