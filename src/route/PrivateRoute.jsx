import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loader from '../components/Loader';

const PrivateRoute = ({ children }) => {

    const { loading, user } = useContext(AuthContext);
    const location = useLocation();
    console.log(loading)

    if (loading) {
        return <Loader></Loader>
    }
    if (user && user.email) {
        return children;
    }
    else {
        return <Navigate state={location?.pathname} to='/login'></Navigate>
    }
};

export default PrivateRoute;