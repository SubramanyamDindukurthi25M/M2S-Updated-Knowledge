import { useState } from "react";
import axios from 'axios';

export const FirstAxios = () => {
    const [joke, setJoke] = useState('');

    const baseUrl = 'https://icanhazdadjoke.com/';
    const fetchData = () => {
        axios(baseUrl, {
                headers: {
                    Accept: 'application/json'
                }
            })
            .then((response) => {
                const result = response.data.joke;
                setJoke(result);
            })
            .catch((error) => {
                alert(error.message);
            })
    }

    return (
        <>
            <button
                className="btn px-2"
                onClick={fetchData}
            >
                Random Data 
            </button>
            <p
                className="lead mx-2 text-danger"
            >
                {joke}
            </p>
        </>
    )
}