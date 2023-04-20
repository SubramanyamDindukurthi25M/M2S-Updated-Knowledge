import { UserContainer } from "./UseContainer"

export const NavLinks = () => {
    return (
        <nav>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
            </ul>
            <UserContainer/>
        </nav>
    )
}