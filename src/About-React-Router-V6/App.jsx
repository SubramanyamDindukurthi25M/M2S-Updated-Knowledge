import { BrowserRouter } from "react-router-dom";
import NavBar from "./Components/NavBar";

const App = () => {
    return (
    <>
        <BrowserRouter>
            <nav>
                NavBar 
            </nav>
            <NavBar/>
            <footer>
                My Footer
            </footer>
        </BrowserRouter>
    </>
    )
}

export default App;