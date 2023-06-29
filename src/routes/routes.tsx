import {
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
    Route,
    RouterProvider
} from "react-router-dom";

import { Dashboard, Login } from "../pages";
import { AuthLayout, OpenLayout, ProtectedLayout } from "../components/Auth";
import { Profile } from "../pages/Profile";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<AuthLayout />}>
            <Route element={<OpenLayout />}>
                <Route path="*" element={<Navigate to="/login" replace />} />
                <Route
                    path="/login"
                    element={<Login />}
                />
            </Route>
            <Route path='/' element={<ProtectedLayout />}>
                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />
                <Route
                    path="/profile"
                    element={<Profile />}
                />
            </Route>

        </Route>
    )
);

const Routes = () => {
    return <RouterProvider router={router} />
}

export default Routes;