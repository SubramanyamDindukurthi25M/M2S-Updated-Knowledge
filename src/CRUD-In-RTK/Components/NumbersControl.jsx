import { useDispatch } from "react-redux";
import {generateNumbers,incrementByTwo} from '../redux/features/numbersSlice';
import { BtnSkeleton } from "./BtnSkeleton";

export const NumbersControl = () => {
    const dispatch = useDispatch();

    const handleRandomNumbers = () => {
        const randomNumbers = Math.floor(Math.random() * 100)
        dispatch(generateNumbers({
            id: Number(new Date()),
            value: randomNumbers
        }));
    }

    const handleIncrementbyTwo = () => {
        dispatch(incrementByTwo());
    }

    return (
        <>
            <BtnSkeleton
                text='generate'
                onClick={handleRandomNumbers}
            />
            <BtnSkeleton
                text='+2'
                onClick={handleIncrementbyTwo}
            />
            <BtnSkeleton
                text='remove-all'
            />
        </>
    )
}