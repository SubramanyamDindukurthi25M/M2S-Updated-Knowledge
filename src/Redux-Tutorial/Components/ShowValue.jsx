import {useSelector} from 'react-redux';

const ShowValue = () => {
    const count = useSelector((state) => {
        return state.count;
    })
    return (
        <>
            Count - {count}
        </>
    )
}

export default ShowValue;