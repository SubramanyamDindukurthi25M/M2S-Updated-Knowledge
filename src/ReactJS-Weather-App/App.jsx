import { useState,useEffect} from "react";
import axios from 'axios';
import swal from 'sweetalert';
import { DisplayData } from "./Components/DisplayData";

export const App = () => {
    const API_KEY = 'e560b9b1636cde286593ff409c3cf8ce';

    const [data, setData] = useState([]);

    const [inputValue, setInputValue] = useState('');
    const [dummyCity, setDummyCity] = useState('kadapa');


    const apiUrlAddress = `https://api.openweathermap.org/data/2.5/weather?q=${dummyCity}&units=imperial&appid=${API_KEY}`;

    const fetchData = () => {
        axios
            .get(apiUrlAddress)

            .then((ele) => {
                setData(ele.data);
            })
            .catch((error) => {
                swal(error.message);
            })
    }

    useEffect(fetchData, [apiUrlAddress]);

    const handleInputValue = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setDummyCity(inputValue);
        setInputValue('');
    }

    const searchByEnter = (e) => {
        if (e.key === 'Enter') {
            setDummyCity(inputValue);
        }
    }
    return (
        <>
            <h2
                className="text-center py-2 text-muted"
            >
                Weather App
            </h2>

            <form>
                <input 
                    type="text" 
                    className="form-control"
                    value={inputValue}
                    placeholder='Enter City....'
                    onChange={handleInputValue}
                    onKeyDown={searchByEnter}
                />
                <button 
                    className="btn btn-primary mx-3 my-2" 
                    type="submit" 
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </form>

            <p className="lead px-3">
                Weather report for <span className="text-success text-uppercase">{data.name}</span>
            </p>
            <DisplayData
                value={data}
            />
        </>
    )
}