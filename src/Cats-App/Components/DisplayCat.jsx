import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import {fetchCatsByUrl} from '../redux/features/catsSlice';

export const DisplayCat = () => {
    const catsState = useSelector((state) => {
        return state.catsList.catsData;
    });

    // Invoke useDispatch() hook
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatching an action to store
        dispatch(fetchCatsByUrl())
    }, [dispatch])
    
    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        catsState.map((ele) => {
                            const {
                                name,
                                id,
                                temperament,
                                description
                            } = ele;
                            return(
                                <section key={id}>
                                    <div className="bg-light p-2 col-lg-8 my-2">
                                        <h2 className="text-capitalize text-danger">
                                            {name}
                                        </h2>
                                        <p className="lead">
                                            Temperament : {temperament}
                                        </p>
                                        <p className="lead">
                                            Description : {description}
                                        </p>
                                    </div>
                                </section>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}