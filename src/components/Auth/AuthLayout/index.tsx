import { Outlet } from "react-router-dom";
import { AuthProvider } from "../../../contexts/AuthContext";

export const AuthLayout = () => {
  return (
    <AuthProvider>
      <Outlet />  
    </AuthProvider>
  );
};