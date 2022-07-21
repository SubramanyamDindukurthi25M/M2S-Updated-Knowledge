import { useSelector } from "react-redux";
import { BtnSkeleton } from "./BtnSkeleton";
import {PlusIcon,MinusIcon,CrossIcon} from '../icons';

export const NumbersList = () => {
    const {numbers} = useSelector((state) => {
        return state.NUMBERSSLICE;
    })
    
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
                                {value} <BtnSkeleton text= {<PlusIcon/>} /> <BtnSkeleton text= {<MinusIcon/>} /> <BtnSkeleton text= {<CrossIcon/>} />
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}