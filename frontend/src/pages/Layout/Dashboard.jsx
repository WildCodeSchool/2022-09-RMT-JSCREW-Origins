import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Nav from "../../components/Nav";
import User from "../../contexts/UserContext";

function Dashboard() {
  const { user } = useContext(User.UserContext);
  if (user?.isAdmin !== 1) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="flex">
      <Nav />
      <Outlet />
    </div>
  );
}

export default Dashboard;
