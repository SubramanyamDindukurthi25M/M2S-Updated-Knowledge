import {FaFacebook} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaSlackHash} from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer>
            <div className="row mt-5">
                <div className="col-lg-6">
                    <p>
                        &copy; 2022 SDigital - All Rights Reserved.
                    </p>
                </div>
                <div className="col-lg-6 icons">
                    <i>
                        <FaFacebook/>
                    </i>
                    <i>
                        <FaGithub/>
                    </i>
                    <i>
                        <FaInstagram/>
                    </i>
                    <i>
                        <FaSlackHash/>
                    </i>
                </div>
            </div>
        </footer>
    )
}