import { useContext } from "react"
import { NavbarContext } from "./NavBar"

export const UserContainer = () => {
    const data = useContext(NavbarContext)

    const {
        user,
        handleLogout
    } = data
    return (
        <>
            {
                user ? <>
                    <p>
                        hello {user?.name?.toUpperCase()}
                    </p>
                    <button onClick={handleLogout} className="btn btn-secondary">
                        Logout 
                    </button> 
                </> : <p>Please Login!</p>
            }
        </>
    )
}