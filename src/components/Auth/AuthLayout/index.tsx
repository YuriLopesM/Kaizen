import { Outlet } from "react-router-dom";
import { AuthProvider } from "../../../contexts/AuthContext";
import { HeaderTitleProvider } from "../../../contexts/HeaderTitleContext";

export const AuthLayout = () => {
  return (
    <AuthProvider>
      <HeaderTitleProvider>
        <Outlet />  
      </HeaderTitleProvider>
    </AuthProvider>
  );
};