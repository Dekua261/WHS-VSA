import { HashRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Join from "./pages/Join";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/join" element={<Join />} />
        </Route>
      </Routes>
      <Outlet />
    </Router>
  );
}

export default App;