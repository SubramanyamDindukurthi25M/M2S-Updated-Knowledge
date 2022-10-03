import { useState } from "react";
import { About } from "./Components/About";
import { NavBar } from "./Components/NavBar";
import { Portfolio } from "./Components/Portfolio";
import { Services } from "./Components/Services";

export const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    const handleDarkMode = () => {
        setDarkMode(!darkMode);
    }
    
    return (
        <main className="px-5" style={{backgroundColor:darkMode?'darkgray':''}}>
            <NavBar handleDarkMode={handleDarkMode}/>
            <About/>
            <Services/>
            <Portfolio/>
        </main>
    )
}