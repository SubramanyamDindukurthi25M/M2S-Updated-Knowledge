import { useDispatch } from "react-redux";
import {decrement} from '../../actions/countAction';

const ButtonOne = () => {
    const dispatch = useDispatch();

    const handleDecrement = () => {
        dispatch(decrement());
    }
    return (
        <>
            <button
                onClick={handleDecrement}
                className='btn'
            >
                Decrement 
            </button>
        </>
    )
}

export default ButtonOne;