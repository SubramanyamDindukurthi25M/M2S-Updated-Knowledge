import { useState } from "react"

export const App = () => {
    const [number, setNumber] = useState(0)

    const handleIncrement = () => setNumber(number + 1)

    // Follow this concept to update state avoid above one.
    const handleIncrementAsync = () => {
        setTimeout(() => setNumber((prevState) => prevState + 1), 2000)
    }
    const [user, setUser] = useState()
    const [userObject, setuserObject] = useState({
        name: 'avika',
        age: 5,
        place: 'singapore'
    })

    const [inputValue, setInputValue] = useState('')

    // To change particular property in object
    const handleName = (e) => {
        e.preventDefault()
        setuserObject((prevState) => ({
            ...prevState,
            name: inputValue
        }))
    }
    return (
        <>
            <h1>
                Number - <span className="text-secondary">{number}</span>
            </h1>

            {/* Without using conditional rendering add ? before state */}
            <h2>
                User - {user?.name}
            </h2>

            <h3>
                User Name - {userObject?.name}
            </h3>

            <form>
                <input 
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />

                <button 
                    className="btn"
                    onClick={handleName}
                >
                    Change Name 
                </button>
            </form>

            <button onClick={handleIncrement} className="btn btn-warning mr-2">
                Increment 
            </button>
            <button onClick={handleIncrementAsync} className="btn btn-info">
                IncrementByAsync 
            </button>
        </>
    )
}