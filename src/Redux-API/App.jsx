import { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux';
import {asynGetUsers} from '../actions/usersAction';

const App = () => {
    const dispatch = useDispatch();

    const store = useSelector((state) => {
        return state.users
    })

    useEffect(() => {
        // invoke action creator
        dispatch(asynGetUsers());
    }, []);

    return (
        <>
            <h1>
                Listing Users - {store.length}
            </h1>
        </>
    )
}

export default App;