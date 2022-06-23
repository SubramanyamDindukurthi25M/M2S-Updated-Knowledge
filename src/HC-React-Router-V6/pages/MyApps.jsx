import {Link,Outlet} from 'react-router-dom';

const MyApps = () => {
    return (
        <>
            <h1>
                My Apps
            </h1>
            <Link
                to='/mylearn/courses'
            >
                Courses
            </Link> || 
            <Link
                to='/mylearn/bundle'
            >
                Bundle
            </Link>
            <Outlet/>
        </>
    )
}
export default MyApps;