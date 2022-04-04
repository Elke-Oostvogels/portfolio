import {Link} from "react-router-dom";
import './menu.scss';

export const Menu = () => {

    return <div className={"flex justify-end menu"}>
        <Link to={"/home"}>
            <h5>Home</h5>
        </Link>

        <Link to={"/portfolio"}>
            <h5>Portfolio</h5>
        </Link>

        <Link to={"/wie"}>
            <h5>Wie</h5>
        </Link>
        <Link to={"/contact"}>
            <h5>Contact</h5>
        </Link>

    </div>
}
