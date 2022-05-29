import {useLocation} from "react-router-dom";
import './menu.scss';

export const MenuItem = (props) => {

    const location = useLocation();
    let active = '';

    if (location.pathname.startsWith(props.url) && props.url !== '/') {
        active = "menu_active";
    }

    return <h5 className={`menu ${active}`}>
        {props.info.charAt(0).toUpperCase() + props.info.slice(1)}
    </h5>
}
