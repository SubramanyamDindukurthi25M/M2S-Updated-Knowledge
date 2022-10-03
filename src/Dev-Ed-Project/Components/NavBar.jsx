import { MoonStarIcon } from "../IconsSVGs/MoonStarIcon";

export const NavBar = ({handleDarkMode}) => {
    return (
        <nav
            className="py-5 mb-2 d-flex justify-content-between"
        >
            <h1>
                developedbysd
            </h1>
            <ul
                className="d-flex flex-items-center"
            >
                <li 
                    className="mt-2"
                    onClick={handleDarkMode}
                >
                    <MoonStarIcon/>
                </li>
                <li>
                    <a 
                        href="#"
                        className="px-4 py-2 rounded"
                    >
                        <button
                            className="btn btn-info text-capitalize"
                        >
                            resume
                        </button>
                    </a>
                </li>
            </ul>
        </nav>
    )
}