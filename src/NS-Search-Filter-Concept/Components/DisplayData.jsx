export const DisplayData = ({resultData}) => {
    return (
        <div className="row">
            {
                resultData.map((ele) => {
                    const {
                        name,
                        picture,
                        location,
                        login
                    } = ele;
                    return (
                        <div className="col-lg-3 my-2 mx-auto" key={login.uuid}>
                            <div className="card">
                                <img 
                                    src={picture.large}
                                    alt={name.first}
                                    className='img-fluid img-thumbnail'
                                />
                                <div className="card-body text-center">
                                    <h5 className="text-dark">
                                        {name.title} {name.first} {name.last}
                                    </h5>
                                    <p className="text-secondary">
                                        {location.city}, {location.state} {location.country}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }    
        </div>
    )
}