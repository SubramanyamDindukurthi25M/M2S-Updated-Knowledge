import { BrowserRouter as Router,Routes,Route,Navigate } from "react-router-dom";
import Home from "./pages/Home";
import MyApps from "./pages/MyApps";
import Course from "./pages/Course";
import Bundle from "./pages/Bundle";

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route
                        path='/'
                        element={<Home/>}
                    />
                    <Route
                        path='/myapps'
                        element={<Navigate to='/mylearn' replace />}
                    />
                    <Route
                        path='/mylearn'
                        element={<MyApps/>}
                    >
                        <Route
                            path='courses'
                            element={<Course/>}
                        />
                        <Route
                            path='bundle'
                            element={<Bundle/>}
                        />
                    </Route>
                </Routes>
            </Router>
        </>
    )
}
export default App;