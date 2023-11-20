import { HashRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";

const App = () => {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      <Outlet />
    </Router>
  );
}

export default App;