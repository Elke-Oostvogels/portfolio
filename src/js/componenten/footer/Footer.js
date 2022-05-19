import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './footer.scss';
import At from '../../../../src/assets/icons/at.svg';
import Linkedin from '../../../../src/assets/icons/linkedin.svg';
import Instagram from '../../../../src/assets/icons/instagram.svg';

export const Footer = () => {

    return <footer className={"basis-full footer"}>
        <div>
            <div className={"footer__line"}></div>
            <div className={"flex justify-center"}>
                <a href={"mailto:info@eographic.be"} target={"_blank"}>
                    <img src={At}/>
                </a>

                <a target={"_blank"}>
                    <img src={Linkedin}/>
                </a>

                <a target={"_blank"}>
                    <img src={Instagram}/>
                </a>
            </div>

        </div>
        <div className={"flex justify-center"}>
            &copy; Elke Oostvogels - 2022
        </div>
    </footer>
}
