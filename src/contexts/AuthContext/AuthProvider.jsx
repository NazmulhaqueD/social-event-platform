import React, { createContext } from 'react';
const AuthContext = createContext();

const AuthProvider = ({ children }) => {


    

    return (
        <AuthContext value={'kdj'}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;