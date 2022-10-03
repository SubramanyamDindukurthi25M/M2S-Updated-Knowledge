import { PortfolioData } from "./PortfolioData";

export const Portfolio = () => {
    return (
        <section className="py-2">
            <h3 className="text-center text-dark">
                Portfolio Projects 
            </h3>
            <div className="row">
                {
                    PortfolioData.map((ele,i) => {
                        const{imgUrl} = ele;
                        return(
                            <div className="col-lg-4 py-2" key={i}>
                                <img 
                                    src={imgUrl}
                                    alt='web-images'
                                    className="img-fluid img-thumbnail bg-primary"
                                />
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}