import { useSelector,useDispatch } from "react-redux";
import {increaseNum,decreaseNum,removeNum} from '../redux/features/numbersSlice';
import { BtnSkeleton } from "./BtnSkeleton";
import {PlusIcon,MinusIcon,CrossIcon} from '../icons';

export const NumbersList = () => {
    const {
        numbers
    } = useSelector((state) => {
        return state.NUMBERSSLICE;
    })

    const dispatch = useDispatch();
    
    return (
        <>
            <ul
                className="list-group list-group-flush"
            >
                {
                    numbers.map((ele) => {
                        const {id,value} = ele;
                        return (
                            <li key={id} className='list-group-item'>
                                {value} 
                                        <BtnSkeleton 
                                            text= {<PlusIcon/>} 
                                            onClick={() => dispatch(increaseNum({id}))}
                                        /> 
                                        <BtnSkeleton 
                                            text= {<MinusIcon/>} 
                                            onClick={() => dispatch(decreaseNum({id}))}
                                        /> 
                                        <BtnSkeleton 
                                            text= {<CrossIcon/>} 
                                            onClick={() => dispatch(removeNum({id}))}
                                        />
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}