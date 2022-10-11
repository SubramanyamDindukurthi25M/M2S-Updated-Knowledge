import { Footer } from "../Footer/Footer";
import { Slide } from "../Slide/Slide";
import { data } from "./BlogHomeData"
import { DisplayCard } from "./DisplayCard";
export const BlogHome = () => {
    return(
        <section className="home">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 left-content">
                        {
                            data.map((ele)=> {
                                const{id,titleOne,titleTwo,paraOne,paraTwo,name,subTitle,qrCode,cover} = ele;
                                return (
                                    <div className="content" key={id}>
                                        {/* 1 */}
                                        <div className="logo">
                                            <h1 className="text-center">
                                                S 
                                            </h1>
                                        </div>
                                        {/* 2 */}
                                        <div className="home-image">
                                            <img 
                                                src={cover} 
                                                alt={name} 
                                            />
                                        </div>
                                        {/* 3 */}
                                        <div className="text">
                                            <h1>
                                                {titleOne}
                                            </h1>
                                            <p>
                                                {paraOne}
                                            </p>
                                            <span>
                                                {name}
                                            </span>
                                        </div>
                                        {/* 4 */}
                                        <div className="textTwo text-right">
                                            <h1>
                                                {titleTwo}
                                            </h1>
                                            <p>
                                                {paraTwo}
                                            </p>
                                            <span>
                                                {subTitle}
                                            </span>
                                        </div>
                                        {/* 5 */}
                                        <div className="qrCode">
                                            <img 
                                                src={qrCode} 
                                                alt='qrCode' 
                                            />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="col-lg-6 right-content">
                        <Slide/>
                        <DisplayCard/>
                        <Footer/>
                    </div>
                </div>
            </div>
            
        </section>
    )
}