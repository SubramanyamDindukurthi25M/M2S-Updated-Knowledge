import { useShareContext } from './context/AppContext'

export const App = () => {
    const data = useShareContext()
    const {
        name
    } = data
    return (
        <>
            <h2>{name}</h2>
        </>
    )
}