import { useEffect, useState } from "react"
import axios from "axios"
import swal from "sweetalert"

export const WithUseEffect = () => {
    const baseUrl = 'https://random.dog/woof.json'
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const fetchData = () => {
        axios
            .get(baseUrl)
            .then((response) => {
                const result = response.data
                setData(result)
                setIsLoading(false)
            })
            .catch((error) => {
                swal(error.message)
            })
    }

    useEffect(() => fetchData(), [])

    return(
        <>
            <div className="row">
                <div className="col-lg-6">
                    {
                        isLoading 
                                    ? <h3>Loading....</h3> 
                                    : <img 
                                            src={data.url} 
                                            alt="dog" 
                                            className="img-fluid w-50 h-50 img-thumbnail"
                                        />
                    }
                </div>
            </div>
        </>
    )
}