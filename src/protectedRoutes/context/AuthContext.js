import React, { useState } from 'react'

export const AuthContext = React.createContext();

export const AuthProvider = () => {
    const [isLoggedIn, setIsLoggedIn] = useState('false');

    const login = () => {
        // handle login
    }

    const logout = () => {
        // handle login
    }

    return (
        <AuthCntext.Provider
            value={{isLoggedIn, login, logout}}
        >
            {children}
        </AuthCntext.Provider>
    )
}