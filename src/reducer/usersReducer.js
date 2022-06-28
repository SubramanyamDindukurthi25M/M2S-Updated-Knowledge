const usersInitialList = [];

const usersReducer = (state = usersInitialList, action) => {

    switch (action.type) {
        case 'SET_USERS': {
            return [...state], action.payload
        }
        default: {
            return [...state];
        }
    }
}

export default usersReducer;