import {CartIcon} from '../icons';
import { useSelector } from 'react-redux';

export const NavBar = () => {
    // To read cart value
    const {
        totalCartItems
    } = useSelector((state) => {
        return state.CARTPROJECT;
    })

    return (
        <>
            <div className="container d-flex justify-content-between align-items-center bg-light">
                <>
                    <h3
                        className="text-capitalize text-primary "
                    >
                        redux toolkit
                    </h3>
                </>
                <div className="cart-icon">
                    <CartIcon/> <span className='text-danger'> {totalCartItems} </span>
                </div>
            </div>
        </>
    )
}