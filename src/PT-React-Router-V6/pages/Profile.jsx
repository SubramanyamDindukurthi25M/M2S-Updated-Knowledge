import {useNavigate} from 'react-router-dom';

const Profile = () => {
    // Invoke useNavigate() hook
    let navigate = useNavigate();

    const handleNavigatePage = () => {
        navigate('/about');
    }

    return (
        <>
            <h1>
                You are in Profile Page
            </h1>
            <button
                onClick={handleNavigatePage}
            >
                Navigate to About Page 
            </button>
        </>
)
}

export default Profile;