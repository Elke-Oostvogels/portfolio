import './card.scss';
import {Link} from "react-router-dom";

export const Card = (props) => {

    return props.stijl === "hover_stijl" ?
        <div className={`card card${props.size} flex justify-center card_${props.stijl} ${props.size}`}>
            {props.url !== undefined ?
                <Link to={props.url}>
                    <div className={`flex justify-center`}>
                        <div className={`hover_color${props.size}`}>
                        </div>
                        <div className={`card__photo card__photo${props.size}`} style={{
                            backgroundImage: `url(${props.img})`
                        }}></div>
                        {/*<img src={props.img} className={props.color}/>*/}
                        <div className={`hover_text hover_text${props.size}`}>
                            <h3>{props.title}</h3>
                        </div>
                    </div>
                </Link>
                :
                <div className={`flex justify-center`}>
                    {props.img !== undefined ? <img src={props.img} className={props.color}/> :
                        <p>{props.title}</p>}
                    {props.size === '_lg' ? <h3>{props.title}</h3> : <></>}
                </div>
            }
        </div> :
        <div className={`card card${props.size} flex justify-center`}>
            {props.url !== undefined ?
                <Link to={props.url}>
                    <div className={`flex justify-center`}>
                        {props.img !== undefined ? <img src={props.img} className={props.color}/> :
                            <p>{props.title}</p>}
                        {props.size === '_lg' ? <h3>{props.title}</h3> : <></>}
                    </div>
                </Link>
                :
                <div className={`flex justify-center`}>
                    {props.img !== undefined ? <div className={`card__photo card__photo${props.size} card__photo${props.size}_${props.class}`} style={{
                            backgroundImage: `url(${props.img})`
                        }}></div> :
                        <p>{props.title}</p>}
                    {props.size === '_lg' ? <h3>{props.title}</h3> : <></>}
                </div>
            }
        </div>
}

