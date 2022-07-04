// rootReducer - to combine all reducers
import counterSlice from "./features/counterSlice"

export const rootReducer = {
    counter: counterSlice
}