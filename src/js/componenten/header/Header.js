import './headerTest.scss';
import {Menu} from "../menu/Menu";

export const Header = (props) => {

    return <div className={`header header_bg-color${props.bg}`}>
        <Menu/>
        <div className={"header__content"}>
            <div className={`line line_${props.color}`}>
            </div>
            <h1>{props.title}</h1>
        </div>
    </div>
}
