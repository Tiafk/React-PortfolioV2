import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navigation">
      <Link className="nav-link" to="/profile">Profile</Link>
      <Link className="nav-link" to="/MyWorks">My works</Link>
      <Link className="nav-link" to="/friends">Friends</Link>
      <Link className="nav-link" to="/music">Music</Link>
      <Link className="nav-link" to="/settings">Log out</Link>
    </nav>
  )
};

export default Navbar;