import { useSelector } from "react-redux";
import { NumbersList } from "./NumbersList";
import { NumbersControl } from "./NumbersControl";

export const NumbersContainer = () => {
    const {
        numbers
    } = useSelector((state) => {
        return state.NUMBERSSLICE;
    })

    const totalSum = () => {
        let sum = 0;
        numbers.forEach((ele) => {
            const {
                value
            } = ele;
            sum += value;
        })
        return sum;
    }

    return (
        <>
            <h3>
                Numbers Array Length - <span className="text-danger"> {numbers.length } </span>
            </h3>
            <h4>
                Total Sum - <span className="text-danger"> {totalSum()} </span>
            </h4>
            <NumbersList/>
            <NumbersControl/>
        </>
    )
}