import './header.scss';
import {Menu} from "../menu/Menu";

export const Header = (props) => {

    return <div className={`header header_bg-color${props.bg}`}>
        <Menu/>
        <h1 className={"header__titel"}>{props.title}</h1>
    </div>
}
