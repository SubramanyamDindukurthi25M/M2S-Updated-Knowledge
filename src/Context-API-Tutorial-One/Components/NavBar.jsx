import { createContext, useState } from "react"
import { NavLinks } from "./NavLinks"

// invoke Context API hook
export const NavbarContext = createContext()

export const NavBar = () => {
    const [user, setUser] = useState({
        name: 'ciceroll'
    })
    const handleLogout = () => setUser(null)
    return (
        <NavbarContext.Provider value={{user,handleLogout}}>
            <NavLinks/>
        </NavbarContext.Provider>
    )
}