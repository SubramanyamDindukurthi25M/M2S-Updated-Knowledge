import { ServiceData } from "./ServicesData";

export const ServiceCards = () => {
    return (
        <div className="container py-3">
            <div className="row">
                {
                    ServiceData.map((ele)=>{
                        const{imagUrl,hThreeText,id,paragraphContent,hFourText,designTools} = ele;
                        return(
                            <div className="col-lg-4 p-2" key={id}>
                                <div className="card boxShadow">
                                    <img 
                                        src={imagUrl}
                                        alt={hThreeText}
                                        className='card-img-top img-fluid' 
                                    />
                                    <div className="card-body bg-success text-center">
                                        <h4 className="text-light py-2">
                                            {hThreeText}
                                        </h4>
                                        <p className="lead py-2">
                                            {paragraphContent}
                                        </p>
                                        <h4 className="text-light">
                                            {hFourText}
                                        </h4>
                                        {
                                            designTools.map((ele,i) => {
                                                return (
                                                    <p key={i} className='py-1 text-dark'>
                                                        {ele}
                                                    </p>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}