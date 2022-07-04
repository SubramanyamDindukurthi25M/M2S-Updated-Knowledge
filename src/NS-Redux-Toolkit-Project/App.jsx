import { Routes,Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Users from "./pages/Users";
import CounterRedux from "./pages/CounterRedux";
import Employees from './pages/Employees';

const App = () => {
    return (
        <>
            <NavBar/>
            <Routes>
                <Route
                    path='/'
                    element={<Home/>}
                />
                <Route
                    path='/users'
                    element={<Users/>}
                />
                <Route
                    path='/counter'
                    element={<CounterRedux/>}
                />
                <Route
                    path='/employees'
                    element={<Employees/>}
                />
            </Routes>
        </>
    )
}

export default App;