import { useState,useEffect } from "react"

export const App = () => {
    const [users, setUsers] = useState([]);
    const[isLoading,setIsLoading] = useState(true);
    const baseUrl = 'https://jsonplaceholder.typicode.com/users';

    const fetchUsers = async () => {
        const response = await fetch(baseUrl);
        const users = await response.json();
        setUsers(users);
        setIsLoading(!true);
    }

    useEffect(() => {
        fetchUsers();
    }, [])
    return(
        <>
            <p>
                Users Length - {isLoading ? <span>Loading....</span> : users.length}
            </p>
        </>
    )
}