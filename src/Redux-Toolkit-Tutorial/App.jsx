import { useSelector,useDispatch } from "react-redux/";
import {addUser,deleteUser,updateUserName} from './features/usersReducer';
import { useState } from "react";

const App = () => {
    // read state within the component
    const user = useSelector((state) => {
        return state.users.value;
    })

    // Invoke useDispatch hook
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [username, setUserName] = useState('');
    const [newUserName, setNewUserName] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleUserName = (e) => {
        setUserName(e.target.value);
    }

    const handleAddUser = () => {
        dispatch(addUser({
            id: user[user.length - 1].id + 1,
            name,
            username
        }));
    }

    const handleUpdateUserName = (e) => {
        setNewUserName(e.target.value);
    }
    
    return (
        <>
            <h1 className="text-danger my-2 text-center">
                Redux Toolkit Tutorial 
            </h1>

            <div className="form-section">
                <input type="text" placeholder="Name...." onChange={handleName} />
                <input type="text" placeholder="Username...." onChange={handleUserName} />
                <button
                    onClick={handleAddUser}
                >
                    Add User 
                </button>
            </div>

            <div className="display-user">
                {
                    user.map((mem) => {
                        const {
                            id,
                            name,
                            username
                        } = mem;
                        return (
                            <div className="card text-center p-2 bg-muted" key={id}>
                                <h2>
                                    {name}
                                </h2>
                                <h3>
                                    {username}
                                </h3>
                                <input 
                                    type="text" 
                                    placeholder="Update Username...." 
                                    onChange={handleUpdateUserName} 
                                    className='my-2'
                                />
                                <button
                                    onClick = {
                                        () => {
                                            dispatch(updateUserName({
                                                id,
                                                username: newUserName
                                            }))
                                        }
                                    }
                                >
                                    Update Username
                                </button>
                                <button
                                    onClick={() => dispatch(deleteUser({id}))}
                                    className='mt-2'
                                >
                                    Delete User
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default App;