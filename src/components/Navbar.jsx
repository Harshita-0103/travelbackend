import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import api from "../services/api";
function Navbar() {
const [count, setCount] = useState(0);
  const user = JSON.parse(
    localStorage.getItem("user")
  );
  const favorites =
  useSelector(
    state => state.favorites
  );
useEffect(() => {
    fetchResourcesCount();
  }, []);

  async function fetchResourcesCount() {
    try {
      const response = await api.get("/resources");
      setCount(response.data.length);
    } catch (error) {
      console.log(error);
    }}

  return (
    <nav>

      <Link to="/">
        Home
      </Link>

      <Link to="/resources">
        Emergency Resources({count})
      </Link>

      {!user && (
        <>
          <Link to="/register">
            Register
          </Link>

          <Link to="/login">
            Login
          </Link>
 </>
      )}

      {user && (
        <>
        <Link to='/favorites'>
 ❤️ Favorites(
  {favorites.length}
 )
 </Link>
        <Link to="/logout">
          Logout
        </Link>
        </>
      )}

    </nav>
  );
}

export default Navbar;