import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom";

import { Dashboard, Login } from "../pages";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
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