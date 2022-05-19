import './card.scss';
import {Link} from "react-router-dom";

export const Card = (props) => {

    return <div className={`card card${props.size} flex justify-center`}>
        {props.url !== undefined ?
            <Link to={props.url}>
                <div className={`flex justify-center`}>
                    {props.img !== undefined ? <img src={props.img} className={props.color}/> : <p>{props.title}</p>}
                    {props.size === '_lg' ? <h3>{props.title}</h3> : <></>}
                </div>
            </Link>
            :
            <div className={`flex justify-center`}>
                {props.img !== undefined ? <img src={props.img} className={props.color}/> : <p>{props.title}</p>}
                {props.size === '_lg' ? <h3>{props.title}</h3> : <></>}
            </div>
        }
    </div>
}

