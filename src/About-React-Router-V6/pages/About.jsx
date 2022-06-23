import {NavLink} from 'react-router-dom';

const About = () => {
    return (
        <>
            <h2>
                About Page
            </h2>
            <NavLink
                to='/'
                className='nav-link'
                style={({ isActive }) => {return {color:isActive ? 'red' : 'blue'}} }
            >
                Home page
            </NavLink>
        </>
    )
}

export default About;