import {useLocation} from "react-router-dom";
import './menu.scss';

export const MenuItem = (props) => {

    console.log(props);

    const location = useLocation();
    let active = '';
    console.log(location.pathname.length);

    if (props.url.length === 1 && location.pathname.length === 1) {
        active = "menu_active";
    }
    if (location.pathname.startsWith(props.url) && props.url !== '/') {
        active = "menu_active";
    }

    return <h5 className={`menu ${active}`}>
        {props.info.charAt(0).toUpperCase() + props.info.slice(1)}
    </h5>
}
