import './card.scss';

export const Card = (props) => {
    console.log(props);

    return <div className={`card card${props.size} `}>
        {props.size === '_lg' ? <h3>{props.title}</h3> : <></>}
    </div>
}
