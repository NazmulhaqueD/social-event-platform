import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../page/home/Home";
import Register from "../page/Register/Register";
import Login from "../page/Login/Login";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import CreateEvent from "../page/CreateEvent/CreateEvent";
import UpcomingEvents from "../page/UpcomingEvents";
import Loader from "../components/Loader";
import EventDetails from "../page/EventDetails";
import JoinedEvents from "../page/JoinedEvents";
import ManageEvents from "../page/ManageEvents";

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
                path: '/upcomingEvents',
                loader: () => fetch('http://localhost:5000/events'),
                hydrateFallbackElement: <Loader></Loader>,
                element: <UpcomingEvents></UpcomingEvents>
            },
            {
                path: '/eventDetails/:id',
                element: <PrivateRoute><EventDetails></EventDetails></PrivateRoute>
            },
            {
                path: '/joinedEvents',
                element: <PrivateRoute><JoinedEvents></JoinedEvents></PrivateRoute>
            },
            {
                path: '/manageEvents',
                element: <PrivateRoute><ManageEvents></ManageEvents></PrivateRoute>
            },
            {
                path: '/createEvent',
                element: <PrivateRoute><CreateEvent></CreateEvent></PrivateRoute>
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