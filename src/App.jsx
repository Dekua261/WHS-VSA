import { HashRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import NoMatch from "./pages/NoMatch";

const App = () => {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      <Outlet />
    </Router>
  );
}

export default App;