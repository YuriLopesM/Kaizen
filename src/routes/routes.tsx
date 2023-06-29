import {
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
    Route,
    RouterProvider
} from "react-router-dom";

import { Dashboard, Login } from "../pages";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="*" element={<Navigate to="/login" replace />} />
            <Route
                path="/login"
                element={<Login />}
            />
            <Route
                path="/dashboard"
                element={<Dashboard />}
            />
        </Route>
    )
);

const Routes = () => {
    return <RouterProvider router={router} />
}

export default Routes;