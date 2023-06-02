import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
export default function NavBar({ user, setUser }) {
  function handleLogout() {
    userService.logout();
    setUser(null);
  }
  return (
    <nav>
      <Link to="/Login">Login</Link>
      &nbsp; | &nbsp;
      <Link to="/Signup">Signup</Link>
      &nbsp;&nbsp;
      <span>Welcome, {user && user.name} </span>
      &nbsp;&nbsp;
      <Link to="" onClick={handleLogout}>
        Log Out
      </Link>
    </nav>
  );
}
