import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div style={{ fontFamily: "system-ui", padding: 16 }}>
      <h2>Admin Panel</h2>
      <nav>
        <Link to="/admin/services">Services</Link> |{" "}
        <Link to="/admin/customers">Customers</Link> |{" "}
        <Link to="/admin/vehicles">Vehicles</Link> |{" "}
        <Link to="/admin/bookings">Bookings</Link>
      </nav>
    </div>
  );
}
