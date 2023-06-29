import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../hooks";


export const OpenLayout = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <>
      <Outlet />
    </>
  )
};