import React, { createContext } from 'react'
import useAuth from './hook/useAuth'

const Context = createContext()

const Authprovider = ({ children }) => {
    const { authenticated, handleLogin, handleLogaut } = useAuth()

    return (
        <Context.Provider value={{ authenticated, handleLogin, handleLogaut }}>
            {children}
        </Context.Provider>
    )
}

export { Context, Authprovider }
