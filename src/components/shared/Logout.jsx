import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthProvider';
import { toast } from 'react-toastify';

const Logout = () => {

    const { logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {
                toast('logout successfully');
            })
            .catch(error => {
                toast.error(error.message)
            })
    }


    return (
        <div>
            <button onClick={handleLogout} className='btn btn-sm btn-primary'>LogOut</button>
        </div>
    );
};

export default Logout;