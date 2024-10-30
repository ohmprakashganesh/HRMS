import React, { createContext, useEffect, useState, useContext } from 'react';
import { getLocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
      
    useEffect(() => {
        // console.log( "auth",getLocalStorage());
        const { employees, admin } = getLocalStorage();
        setUserData({ employees, admin });
        // console.log("auth",userData)
    }, []);

    return (
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;