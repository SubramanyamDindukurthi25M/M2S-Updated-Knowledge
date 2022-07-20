import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Btn } from "./ReUsable-Components/Btn";
import { HeaderTwo } from "./ReUsable-Components/HeaderTwo";
import {ChevronUp,ChevronDown} from '../icons';
import {clearCart,removeItem,increaseItem,decreaseItem,fetchProductData} from '../redux/features/cartSlice';
import swal from "sweetalert";

export const CartContainer = () => {
    const {
        cartItems,
        totalCartItems,
        totalAmount
    } = useSelector((state) => {
        return state.CARTPROJECT;
    })

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductData())
    }, [dispatch])

    const handleRemoveItems = () => {
        swal({
                title: 'Are you sure?',
                text: 'all items will be removed',
                icon: 'warning',
                buttons: true,
                dangerMode: true
            })
            .then((isOkay) => {
                (isOkay) && dispatch(clearCart());
            })
        return false;
    }

    const handleRemoveItem = (id) => {
        swal({
                title: 'Are you sure?',
                text: 'this item will be removed',
                icon: 'warning',
                buttons: true,
                dangerMode: true
            })
            .then((isOkay) => {
                (isOkay) && dispatch(removeItem(id));
            })
        return false;
    }

    return (
        <>
            {/* Conditional Rendering - Simple...if */}
            {
                (totalCartItems < 1)  && <section className="text-center text-success my-3">
                    <HeaderTwo
                        text = 'your bag'
                    />
                    <h3>
                        is currently empty
                    </h3>
                </section>
            }   

            <div className="container">
                    <HeaderTwo
                        text='your bag'
                        styleTextT='text-center text-secondary'
                    />
                <div className="row">
                    {
                        cartItems.map((ele) => {
                            const {
                                id,
                                title,
                                price,
                                img,
                                amount
                            } = ele;
                            return (
                                <div className="col-lg-3 mx-auto" key={id}>
                                    <div className="card p-2">
                                        <img 
                                            src={img} 
                                            alt={title}
                                            className='img-fluid card-img-top'
                                        />
                                        <div className="card-body text-center bg-light mt-1">
                                            <h6 className="text-capitalize text-info card-title">
                                                {title}
                                            </h6>
                                            <h4>
                                                ${price}
                                            </h4>
                                            <Btn
                                                styleText='btn btn-secondary'
                                                plainText = 'Remove Item'
                                                onClick={() => {handleRemoveItem(id)}}
                                            />
                                            <div className="btn-section mt-2 d-flex justify-content-around align-items-center">
                                                <Btn
                                                    plainText={<ChevronDown/>}
                                                    styleText='btn btn-sm'
                                                    onClick={() => { if(amount === 1) {
                                                        dispatch(removeItem(id));
                                                        return;
                                                    }  dispatch(decreaseItem({id}))}}
                                                />
                                                    <h4> {amount} </h4> 
                                                <Btn
                                                    plainText={<ChevronUp/>}
                                                    styleText='btn btn-sm'
                                                    onClick={() => {dispatch(increaseItem({id}))}}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <hr />
                <footer className="d-flex justify-content-around align-items-center">
                    <div className="left-footer">
                        <h3>
                            Total
                        </h3>
                    </div>
                    <div className="right-footer">
                        <h4>
                            $ <span className="text-warning">
                                {totalAmount.toFixed(2)}
                            </span>
                        </h4>
                    </div>
                </footer>
                <Btn
                    styleText='btn btn-danger btn-block my-2'
                    plainText = 'Clear Items'
                    onClick={handleRemoveItems}
                />
            </div>
        </>
    )
}