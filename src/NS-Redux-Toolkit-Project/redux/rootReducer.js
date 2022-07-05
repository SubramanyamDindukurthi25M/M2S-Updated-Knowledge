// rootReducer - to combine all reducers
import counterSlice from "./features/counterSlice";
import usersSlice from './features/usersSlice';

export const rootReducer = {
    counter: counterSlice,
    usersList: usersSlice
}