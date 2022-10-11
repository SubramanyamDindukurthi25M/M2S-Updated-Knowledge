import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { slideData } from "./SlideData";

export const Slide = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
    };
    return (
        <>
            <>
                <Slider {...settings}>
                    {
                        slideData.map((ele) => {
                            const{id,cover,category,title,desc} = ele;
                            return (
                                <div className="row d-flex justify-content-between align-items-center" key={id}>
                                    <div className="col-lg-4">
                                        <img 
                                            src={cover} 
                                            alt={category}
                                            className='img-fluid'
                                        />
                                    </div>
                                    <div className="col-lg-8">
                                        <span className="text-danger">
                                            {category}
                                        </span>
                                        <h2 className="font-weight-bold">
                                            {title}
                                        </h2>
                                        <p className="lead">
                                            {desc}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </>
        </>
    )
}