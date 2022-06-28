import axios from "axios";
import sweetalert from 'sweetalert';

export const asynGetUsers = () => {
    return (dispatch) => {
        // API Call
        const baseURL = 'http://jsonplaceholder.typicode.com/users';
        axios
            .get(baseURL)
            .then((response) => {
                const users = response.data;

                // dispatch action
                dispatch(setUsers(users));
            })
            .catch((error) => {
                sweetalert(error.message);
            })
    }
}

// action creator
export const setUsers = (users) => {
    return {
        type: 'SET_USERS',
        payload: users
    }
}