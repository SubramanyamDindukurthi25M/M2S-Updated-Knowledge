import { useState } from "react";
import { useDispatch } from "react-redux";
import {generateNumbers} from '../redux/features/numbersSlice';

export const AddNumber = () => {
    const [numberValue, setNumberValue] = useState('');

    const handleNumber = (e) => {
        setNumberValue(e.target.value);
    }

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const userAddedObject = {
            id: Number(new Date()),
            value: Number(numberValue)
        }
        dispatch(generateNumbers(userAddedObject));

        // To reset form fields
        setNumberValue('');
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
            >
                <input 
                    type="text"
                    value={numberValue}
                    onChange={handleNumber}
                    className='form-control form-control-sm'
                />
            </form>
        </>
    )
}