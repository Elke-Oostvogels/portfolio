import {Link} from "react-router-dom";
import './menu.scss';
import {MenuItem} from "./MenuItem";

export const Menu = () => {

    const menu = [
        {
            name: 'Home',
            url: '/'
        }, {
            name: 'Portfolio',
            url: '/portfolio'
        }, {
            name: 'Wie',
            url: '/wie'
        }
        , {
            name: 'Hobby',
            url: '/hobby'
        }
    ]


    return <div className={"flex justify-end menu"}>
        {menu.map(m => <Link to={m.url}>
                <MenuItem info={m.name} url={m.url}/>
            </Link>
        )}
    </div>
}
