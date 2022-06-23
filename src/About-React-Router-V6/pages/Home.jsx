import {NavLink} from 'react-router-dom';

const Home = () => {
    return (
        <>
            <h2>
                Home Page
            </h2>
            <NavLink
                to='/about'
                className='nav-link'
                style={({ isActive }) => {return {color:isActive ? 'red' : 'blue'}} }
            >
                About
            </NavLink>
        </>
    )
}

export default Home;