import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../page/home/Home";
import Register from "../page/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])