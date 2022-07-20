import { useEffect } from "react";
import { NavBar } from "./Components/NavBar";
import { CartContainer } from "./Components/CartContainer";
import { useSelector,useDispatch } from "react-redux";
import { calculateTotal } from "./redux/features/cartSlice";

export const App = () => {
    const {
        cartItems
    } = useSelector((state) => state.CARTPROJECT);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calculateTotal())
    }, [cartItems]);
    
    return (
        <>
            <NavBar/>
            <CartContainer/>
        </>
    )
}