import { useSelector,useDispatch } from "react-redux";
import {increment,decrement,incrementBy} from '../redux/features/counterSlice';

const CounterRedux = () => {
    const storeValue = useSelector((state) => {
        // console.log(state);
        return state.counter.count;
    })

    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    }
    const handleDecrement = () => {
        dispatch(decrement())
    }
    const handleIncrementBy5 = () => {
        dispatch(incrementBy(5));
    }

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h3 className="text-dark">
                        Counter - <span className="text-danger"> {storeValue} </span>
                    </h3>
                    
                    <button
                        className="btn btn-success m-2"
                        onClick={handleIncrement}
                    >
                        Increment
                    </button>
                    
                    <button
                        className="btn btn-warning m-2"
                        onClick={handleDecrement}
                    >
                        Decrement
                    </button>

                    <button
                        className="btn btn-danger m-2"
                        onClick={handleIncrementBy5}
                    >
                        Increment By 5
                    </button>

                </div>
            </div>
        </>
    )
}

export default CounterRedux;