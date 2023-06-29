import { Outlet } from "react-router-dom";
import { AuthProvider } from "../../../contexts/AuthContext";
import { HeaderTitleProvider } from "../../../contexts/HeaderTitleContext";
import { TaskProvider } from "../../../contexts/TaskContext";

export const AuthLayout = () => {
  return (
    <AuthProvider>
      <HeaderTitleProvider>
        <TaskProvider>
          <Outlet />
        </TaskProvider>
      </HeaderTitleProvider >
    </AuthProvider>
  );
};