import "./subTitle.scss";

export const SubTitle = (props) => {

    return <div className={"subtitle"}>
        <div className={`subtitle__line subtitle__line_${props.color} subtitle__line_${props.size}`}>
        </div>
        <h3 className={props.size}>{props.title}</h3>
    </div>
}
