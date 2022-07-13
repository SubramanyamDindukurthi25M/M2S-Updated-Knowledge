import {Routes,Route} from 'react-router-dom';
import { UsersList } from "./Components/UsersList";
import { AddUserForm } from './Components/AddUserForm';
import { EditUser } from './Components/EditUser';

export const App = () => {
    return (
        <div className="container">
            <h1
                className="text-center text-primary my-3 display-4 font-weight-bold"
            >
                CRUD with React - RTK 
            </h1>

            <Routes>
                <Route
                    path='/'
                    element={<UsersList/>}
                />
                <Route
                    path='/add-user-form'
                    element={<AddUserForm/>}
                />
                <Route
                    path='/edit-user/:id'
                    element={<EditUser/>}
                />
            </Routes>
        </div>
    )
}