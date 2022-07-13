import { AddUserBtn } from "./AddUserBtn";
import {Link} from 'react-router-dom';
import { useSelector,useDispatch } from "react-redux";
import { deleteUser } from "../redux/features/usersSlice";

export const UsersList = () => {
    const usersList = useSelector((store) => {
        return store.users
    })

    const dispatch = useDispatch();

    const handleDeleteUser = (id) => {
        dispatch(deleteUser({
            id
        }));
    }
    
    const renderUsers = () => {
        return (
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    {
                        usersList.map((user) => {
                            const {
                                id,
                                name,
                                email
                            } = user;
                            return (
                                <div className="card my-2 bg-light" key={id}>
                                    <div className="card-body">
                                        <h2 className="text-capitalize text-success">
                                            {name}
                                        </h2>
                                        <span className="text-muted">
                                            {email}
                                        </span>
                                        <div className="buttons my-2 d-flex justify-content-around align-items-center">
                                            <Link
                                                to={`edit-user/${id}`}
                                            >
                                                <button className="btn text-dark">
                                                    Edit 
                                                </button>
                                            </Link>
                                            <button 
                                                className="btn text-danger"
                                                onClick={() => handleDeleteUser(id)}
                                            >
                                                Delete 
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    } 

    return (
        <>
            <Link
                to='/add-user-form'
            >
                <AddUserBtn>
                    Add User
                </AddUserBtn>
            </Link>
            {
                (usersList.length) ? renderUsers() : <p className="lead text-center">No Users</p>
            }
        </>
    )
}