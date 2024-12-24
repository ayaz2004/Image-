import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute() {
  const { user: currentUser } = useSelector((state) => state.auth);
  return currentUser ? <Outlet /> : <Navigate to="/signin" />;
}
