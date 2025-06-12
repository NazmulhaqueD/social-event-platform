import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../page/home/Home";
import Register from "../page/Register/Register";
import Login from "../page/Login/Login";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import CreateEvent from "../page/CreateEvent/CreateEvent";

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
                path: '/createEvent',
                element: <PrivateRoute><CreateEvent></CreateEvent></PrivateRoute>
            },
            {
                path: '/item',
                element: <PrivateRoute><p>item page</p></PrivateRoute>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]
    },
    {
        path: '/*',
        element: <ErrorPage></ErrorPage>
    }
])