import { useState,useEffect } from "react"
import axios from 'axios'
import swal from 'sweetalert';
import { DisplayData } from "./DisplayData";

export const SearchBox = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleInputValue = (e) => {
        setSearchValue(e.target.value);
    }

    const [randomUsers, setRandomUsers] = useState([]);

    // Logic for filter...data
    const filterUsersList = randomUsers.filter((ele) => {
        return ele.name.first.toLowerCase().includes(searchValue) || ele.name.last.toLowerCase().includes(searchValue)
    })

    const baseUrl = 'https://randomuser.me/api?results=50';
    const fetchData = () => {
        axios
            .get(baseUrl)

            // success
            .then((response) => {
                const result = response.data.results;
                setRandomUsers(result);
            })

            // failure
            .catch((error) => {
                swal(error.message);
            })
    }

    useEffect(fetchData, []);

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <form
                            autoComplete="off"
                        >
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control"
                                    placeholder="Search User By Name...."
                                    value={searchValue}
                                    onChange={handleInputValue}
                                />
                            </div>
                        </form>
                        <DisplayData
                            resultData = {filterUsersList}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}