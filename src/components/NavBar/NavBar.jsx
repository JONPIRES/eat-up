import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
export default function NavBar({ user, setUser }) {
  function handleLogout() {
    userService.logout();
    setUser(null);
  }
  return (
    <nav>
      {user ? (
        <>
          <Link to="" onClick={handleLogout}>
            Log Out
          </Link>
        </>
      ) : (
        <>
          <Link to="/Login">Login</Link> ||
          <Link to="/Signup">Signup</Link>
        </>
      )}
    </nav>
  );
}
