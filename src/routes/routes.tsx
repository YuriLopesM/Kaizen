import {
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
    Route,
    RouterProvider
} from "react-router-dom";

import { Dashboard, Login } from "../pages";
import { AuthLayout, OpenLayout, ProtectedLayout } from "../components/Auth";

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
            </Route>

        </Route>
    )
);

const Routes = () => {
    return <RouterProvider router={router} />
}

export default Routes;