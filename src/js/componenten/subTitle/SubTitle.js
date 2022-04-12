import "./subTitle.scss";

export const SubTitle = (props) => {

    return <div className={"subtitle"}>
        <div className={`subtitle__line subtitle__line_${props.color}`}>
        </div>
        <h3>{props.title}</h3>
    </div>
}
