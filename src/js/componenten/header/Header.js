import './header.scss';

export const Header = (props) => {

    return <div className={`header header_bg-color${props.bg}`}>
        <h1>{props.title}</h1>
    </div>
}
