import axios from "axios"
import { useQuery } from "react-query"

export const WithReactQuery = () => {
    const baseUrl = 'https://random.dog/woof.json'

    const {
        isLoading,
        error,
        data
    } = useQuery('dogs', () => axios(baseUrl))
    if(error) return <h1>{error.message}</h1>
    if(isLoading) return <h1>Loading...</h1>

    return (
        <>
            <div className="row">
                <div className="col-lg-6">
                    <img 
                        src={data.data.url} 
                        alt="dog" 
                        className="img-fluid w-50 h-50 img-thumbnail"
                    />
                </div>
            </div>
        </>
    )
}