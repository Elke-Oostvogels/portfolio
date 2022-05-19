import './headerTest.scss';
import {Menu} from "../menu/Menu";

export const Header = (props) => {

    return <header className={`header header_bg-color${props.bg}`}>
        <Menu/>
        <div className={"header__content"}>
            <div className={`line line_${props.color}`}>
            </div>
            {props.size === "sm" ?
                <h1 className={"header-sm"}>{props.title}</h1>
                :
                <h1 className={"header-xl"}>{props.title}</h1>
            }
        </div>
    </header>
}
