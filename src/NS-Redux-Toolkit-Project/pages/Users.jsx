import { useEffect } from "react";
import {fetchUserByUrl} from '../redux/features/usersSlice';
import { useSelector,useDispatch } from "react-redux";

const Users = () => {
    const usersListValues = useSelector((state) => {
        return state.usersList.usersData;
    })
    // console.log(usersListValues);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserByUrl());
    }, [dispatch]);

    return (
        <>
            <h2>
                Users Data
            </h2>
        </>
    )
}

export default Users;