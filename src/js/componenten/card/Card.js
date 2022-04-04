import './card.scss';

export const Card = (props) => {
    console.log(props);

    return <div className={`card card${props.size} flex justify-center`}>
        {props.img !== undefined ? <img src={props.img} className={props.color}/> : ''}
        {props.size === '_lg' ? <h3>{props.title}</h3> : <></>}
    </div>
}
