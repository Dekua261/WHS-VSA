import { Link } from "react-router-dom";
import { SvgIcon } from "@mui/material";
import { ReactComponent as Logo } from "../assets/Logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="navbar-logo" to="/">
        <SvgIcon component={Logo} inheritViewBox sx={{ fontSize: "100px" }}/>
      </Link>
      <ul>
        <li>
          <Link className="navbar-item" to="/about">About</Link>
        </li>
        <li>
          <Link className="navbar-item" to="/join">Join</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;