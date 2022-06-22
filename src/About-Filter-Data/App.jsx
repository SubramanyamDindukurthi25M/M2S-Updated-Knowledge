import {dummyData} from './mockdata';
import { useState } from 'react';

const App = () => {
    // Array Destructuring - ES6
    const [filterItem, setFilterItem] = useState('');

    // Event handler as callback function
    const handleSearch = (e) => {
        // Invoke state function
        setFilterItem(e.target.value);
    }

    // Event handler as callback function - Logic for filter the data
    const filterData = dummyData.filter((item) => {
        return item.first_name.includes(filterItem) || item.last_name.includes(filterItem);
    })

    return (
    <>
        <input
            type='text'
            placeholder='search.....'
            value={filterItem}
            onChange={handleSearch}
        />
        {
            filterData.map((ele) => {
                // Object Destructuring - ES6
                const {
                    first_name,
                    last_name,
                    id
                } = ele;
                return(
                    <section key={id}>
                        <p>
                            {first_name} {last_name}
                        </p>
                    </section>
                )
            })
        }
    </>
    )
}

export default App;