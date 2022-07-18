import { useState } from "react";
import { AddUserBtn } from "./AddUserBtn";
import { TextField } from "./TextField";
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {addUser} from '../redux/features/usersSlice';

export const AddUserForm = () => {
    const [userValues, setUserValues] = useState({
        name: '',
        email: ''
    })

    // Invoke useNavigate hook
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        // To reset form
        setUserValues({
            name: '',
            email: ''
        });

        dispatch(addUser({
            id: new Date().getTime().toString(),
            name: userValues.name,
            email: userValues.email
        }))

        navigate('/');
    }

    return (
        <>
            <form>
                <div className="form-group">
                    <TextField
                        label='Name'
                        inputProps={
                            {type:'text',placeholder:'John Doe'}
                        }                       
                        value={userValues.name}
                        onChange={(e) => setUserValues({...userValues,name:e.target.value})}
                    />
                    <br />
                    <TextField
                        label='Email'
                        inputProps={
                            {type:'email',placeholder:'johndoe@gmail.com'}
                        }
                        value={userValues.email}
                        onChange={(e) => setUserValues({...userValues,email:e.target.value})}
                    />
                </div>
                <AddUserBtn
                    onClick={handleSubmit}
                >
                    Submit
                </AddUserBtn>
            </form>
        </>
    )
}