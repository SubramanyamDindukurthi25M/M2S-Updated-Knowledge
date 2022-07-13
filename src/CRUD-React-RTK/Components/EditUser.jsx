import { useState } from "react";
import { AddUserBtn } from "./AddUserBtn";
import { TextField } from "./TextField";
import {useNavigate,useParams} from 'react-router-dom';
import { useDispatch,useSelector } from "react-redux";
import { editUser } from "../redux/features/usersSlice";

export const EditUser = () => {
    // To get User-Id
    const params = useParams();

    const usersList = useSelector((store) => {
        return store.users
    })

    const existingUser = usersList.filter((user) => {
        return user.id === params.id;
    })

    const {
        name,
        email
    } = existingUser[0];

    const [userValues, setUserValues] = useState({
        name,
        email
    })

    // Invoke useNavigate hook
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleEditUser = (e) => {
        e.preventDefault();

        // To reset form
        setUserValues({
            name: '',
            email: ''
        });

        dispatch(editUser({
            id: params.id,
            name: userValues.name,
            email: userValues.email
        }));

        navigate('/');
    }

    return (
        <>
            <form>
                <div className="form-group">
                    <TextField
                        label='Name'
                        inputProps={
                            {
                                type: 'text',
                                placeholder: 'John Doe'
                            }
                        }                       
                        value={userValues.name}
                        onChange = {
                            (e) => setUserValues({
                                ...userValues,
                                name: e.target.value
                            })
                        }
                    />
                    <br />
                    <TextField
                        label='Email'
                        inputProps={
                            {
                                type: 'email',
                                placeholder: 'johndoe@gmail.com'
                            }
                        }
                        type='email'
                        value={userValues.email}
                        onChange = {
                            (e) => setUserValues({
                                ...userValues,
                                email: e.target.value
                            })
                        }
                    />
                </div>
                <AddUserBtn
                    onClick={handleEditUser}
                >
                    Edit-User 
                </AddUserBtn>
            </form>
        </>
    )
}