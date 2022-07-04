import { useState } from "react";

const Counter = () => {
    const [initialValue, setInitialValue] = useState({
        count: 0
    })

    const handleIncrement = () => {
        setInitialValue({
            count: initialValue.count + 1
        })
    }
    const handleDecrement = () => {
        setInitialValue({
            count: initialValue.count - 1
        })
    }
    const handleIncrementBy5 = () => {
        setInitialValue({
            count: initialValue.count + 5
        })
    }
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h3 className="text-dark">
                        Counter - <span className="text-danger"> {initialValue.count} </span>
                    </h3>
                    
                    <button
                        className="btn btn-success m-2"
                        onClick={handleIncrement}
                    >
                        Increment
                    </button>
                    
                    <button
                        className="btn btn-warning m-2"
                        onClick={handleDecrement}
                    >
                        Decrement
                    </button>

                    <button
                        className="btn btn-danger m-2"
                        onClick={handleIncrementBy5}
                    >
                        Increment By 5
                    </button>

                </div>
            </div>
        </>
    )
}

export default Counter;