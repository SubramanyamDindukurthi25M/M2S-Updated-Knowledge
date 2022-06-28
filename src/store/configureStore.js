import {
    createStore,
    combineReducers,
    applyMiddleware
} from "redux";
import countReducer from '../reducer/countReducer';
import usersReducer from "../reducer/usersReducer";
import thunk from "redux-thunk";

const configureStore = () => {
    const store = createStore(combineReducers({
        count: countReducer,
        users:usersReducer
    }),applyMiddleware(thunk))
    return store;
}
export default configureStore;