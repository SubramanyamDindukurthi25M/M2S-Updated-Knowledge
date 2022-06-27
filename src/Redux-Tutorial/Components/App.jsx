import {useSelector,useDispatch} from 'react-redux';
import {increment} from '../../actions/countAction';
import ButtonOne from './ButtonOne';
import ShowValue from './ShowValue';

const App = () => {
    const count = useSelector((state) => {
        // console.log(state);
        return state.count
    })

    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    }
    
    return (
        <>
            <h1>
                Count - {count}
            </h1>

            <button
                onClick={handleIncrement}
                className='btn'
            >
                Increment 
            </button>

            <ButtonOne/>
            <ShowValue/>
        </>
    )
}

export default App;