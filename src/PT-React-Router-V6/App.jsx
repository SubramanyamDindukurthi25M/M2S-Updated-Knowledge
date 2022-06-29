import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Error from "./pages/Error";

const App = () => {
    return (
        <>
            <Router>
                <nav className="d-flex justify-content-around align-items-center mt-3">
                    <Link
                        to='/'
                    >
                        Home
                    </Link>
                    <Link
                        to='/about'
                    >
                        About
                    </Link>
                    <Link
                        to='/profile'
                    >
                        Profile 
                    </Link>
                </nav>
                <Routes>
                    <Route
                        path='/'
                        element={<Home/>}
                    />
                    <Route
                        path='/about'
                        element={<About/>}
                    />
                    <Route
                        path='/profile'
                        element={<Profile/>}
                    />
                    <Route
                        path='*'
                        element={<Error/>}
                    />
                </Routes>
            </Router>
        </>
    )
}

export default App;