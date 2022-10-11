import { CardData } from "./CardData"

export const DisplayCard = () => {
    return (
        <>
            <div className="row mt-3">
                {
                    CardData.map((ele) => {
                        const{id,cover,category,title} = ele;
                        return(
                            <div className="col-lg-4 mx-auto my-2" key={id}>
                                <div className="card">
                                    <img 
                                        src={cover} 
                                        alt={category} 
                                        className='img-fluid card-img-top img-thumbnail'
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title text-danger text-capitalize">
                                            {category}
                                        </h5>
                                        <p className="card-text">
                                            {title}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}