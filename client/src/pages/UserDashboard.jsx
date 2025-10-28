import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function UserDashboard() {
  const { user, logout } = useAuth();
  return (
    <div style={{ fontFamily: "system-ui", padding: 16 }}>
      <h2>Welcome, {user?.username}</h2>
      <nav>
        <Link to="/services">View Services</Link> |{" "}
        <Link to="/vehicles">My Vehicles</Link> |{" "}
        <Link to="/bookings">My Bookings</Link> |{" "}
        {user?.role === "admin" && <Link to="/admin">Admin</Link>} |{" "}
        <button onClick={logout}>Logout</button>
      </nav>
    </div>
  );
}
