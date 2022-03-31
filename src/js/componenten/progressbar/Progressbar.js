import './progress-bar.scss';

export const Progressbar = (props) => {

    const pr = props.proc * 335;
    const dWaarde = "M20 55 l" + pr + " 0";

    return <div className={"beoordeling"}>
        <div className={"beoordeling__content"}>
            <div className={"beoordeling__progress-bar"}>
            <span className="beoordeling__progress" style={{width: 100 * props.proc + '%'}}/>
        </div>
            <div className={"beoordeling__percentage"}>{props.proc * 100 + '%'}</div>

        </div>
        {/*<div className={"beoordeling__progress-bar"}>*/}
        {/*    <span className="beoordeling__progress" style={{width: 100 * props.proc + '%'}}/>*/}

        {/*</div>*/}
    </div>

}
