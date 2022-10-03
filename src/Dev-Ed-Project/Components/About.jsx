import { LinkedinIcon } from "../IconsSVGs/LinkedinIcon";
import { TwitterIcon } from "../IconsSVGs/TwitterIcon";
import { YouTubeIcon } from "../IconsSVGs/YouTubeIcon";
import HeroBanner from '../assets/dev-ed-wave.png';

export const About = () => {
    return (
        <>
            <div className="text-center p-5">
                <h2 className="display-3 py-2 text-info">
                    Rosey Johnes
                </h2>
                <h3 className="py-2 display-5">
                    Developer and Marketer
                </h3>
                <p className="lead py-5">
                    Freelancer providing services for programming and design content needs. Join me down below and let's get cracking!
                </p>
            </div>
            <div
                className="d-flex justify-content-around py-3"
            >
                <TwitterIcon/>
                <LinkedinIcon/>
                <YouTubeIcon/>
            </div>
            <div className="imageSection">
                <img 
                    src={HeroBanner}
                    alt='dev-ed-banner'
                />
            </div>
        </>
    )
}