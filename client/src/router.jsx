import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Services from "./pages/user/Services";
import Vehicles from "./pages/user/Vehicles";
import Bookings from "./pages/user/Bookings";
import ServicesAdmin from "./pages/admin/ServicesAdmin";
import CustomersAdmin from "./pages/admin/CustomersAdmin";
import VehiclesAdmin from "./pages/admin/VehiclesAdmin";
import BookingsAdmin from "./pages/admin/BookingsAdmin";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  { path: "/", element: <ProtectedRoute><UserDashboard/></ProtectedRoute> },
  { path: "/login", element: <Login/> },
  { path: "/register", element: <Register/> },
  { path: "/services", element: <ProtectedRoute><Services/></ProtectedRoute> },
  { path: "/vehicles", element: <ProtectedRoute><Vehicles/></ProtectedRoute> },
  { path: "/bookings", element: <ProtectedRoute><Bookings/></ProtectedRoute> },

  { path: "/admin",
    element: <ProtectedRoute roles={["admin"]}><AdminDashboard/></ProtectedRoute> },
  { path: "/admin/services",
    element: <ProtectedRoute roles={["admin"]}><ServicesAdmin/></ProtectedRoute> },
  { path: "/admin/customers",
    element: <ProtectedRoute roles={["admin"]}><CustomersAdmin/></ProtectedRoute> },
  { path: "/admin/vehicles",
    element: <ProtectedRoute roles={["admin"]}><VehiclesAdmin/></ProtectedRoute> },
  { path: "/admin/bookings",
    element: <ProtectedRoute roles={["admin"]}><BookingsAdmin/></ProtectedRoute> },
]);

export default router;
