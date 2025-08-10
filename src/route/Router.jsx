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
import UpdateEvent from "../page/UpdateEvent";
import ContactUs from "../page/ContactUs";
import AboutUs from "../page/aboutUs/AboutUs";
import Volunteer from "../page/volunteer/Volunteer";
import Dashboard from "../layout/Dashboard";
import MyProfile from "../page/volunteer/myProfile/MyProfile";

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
                loader: () => fetch('https://social-serve-server.vercel.app/events'),
                hydrateFallbackElement: <Loader></Loader>,
                element: <UpcomingEvents></UpcomingEvents>
            },
            {
                path: '/eventDetails/:id',
                element: <EventDetails></EventDetails>
            },
            {
                path: '/eventUpdate/:id',
                loader: ({ params }) => fetch(`https://social-serve-server.vercel.app/events/${params.id}`),
                hydrateFallbackElement: <Loader></Loader>,
                element: <PrivateRoute><UpdateEvent></UpdateEvent></PrivateRoute>
            },           
            {
                path: 'aboutUs',
                element:<AboutUs></AboutUs>
            },
            {
                path: 'volunteer',
                element:<Volunteer></Volunteer>
            },
            {
                path: 'contactUs',
                element:<ContactUs></ContactUs>
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
        path: '/',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'myProfile',
                element: <MyProfile></MyProfile>
            },
            {
                path: '/createEvent',
                element: <CreateEvent></CreateEvent>
            },
             {
                path: '/joinedEvents',
                element: <JoinedEvents></JoinedEvents>
            },
            {
                path: '/manageEvents',
                element:<ManageEvents></ManageEvents>
            },
        ]
    },
    {
        path: '/*',
        element: <ErrorPage></ErrorPage>
    }
])