import {Header} from "../../componenten/header/Header";
import './portfolio.scss';
import {SwiperInfo} from "../../componenten/swiper/swiper";
import {Footer} from "../../componenten/footer/Footer";
import {SubTitle} from "../../componenten/subTitle/SubTitle";
import React from "../../../assets/logos/react.png";

const Webprojecten = [{id: 1, title: "App Scheldeoord"}, {id: 2, title: "Kokomocity"}, {id: 3, title: "Bib"}, {
    id: 4,
    title: "Zwemclub Delfino"
}];
const Stageprojecten = [{id: 5, title: "Huizenscanner"}, {id: 6, title: "Mortsel helpt"}];
const Graphprojecten = [{id: 7, title: "Historas"}, {id: 8, title: "Levis kortingsbonnen"}, {
    id: 9,
    title: "Bestickering WSL"
}, {
    id: 10,
    title: "Rule"
}, , {
    id: 11,
    title: "Brochure faalangst"
}];

export const Portfolio = () => {

    return <div className={"portfolio"}>
        <Header title={"Portfolio"} bg={"_cold-dark"} color={"base-cold"}/>
        <div className={"container container_bg-light"}>
            <div className={"portfolio__content"}>
                <SubTitle title={"Programmeren"} color={"base-cold"}/>
                <p>Zie hier een selectie van projecten die ik gedurende mijn opleiding Programmeren en stage gemaakt
                    heb.
                    Deze projecten verschillen op verschillende opzichten van elkaar, dit qua taal maar ook
                    onderwerp.</p>

                <h4>Schoolprojecten</h4>
                <SwiperInfo info={Webprojecten} size={'_lg'}/>
                <h4>Stage projecten</h4>
                <SwiperInfo info={Stageprojecten} size={'_lg'}/>

            </div>
            <div className={"portfolio__content"}>
                <SubTitle title={"Grafisch ontwerp"} color={"base-cold"}/>
                <p>
                    Zie hier een selectie van projecten van mijn opleiding Publiciteit en Webdesign maar ook van
                    projecten
                    die
                    ik prive gemaakt heb.
                </p>
                <SwiperInfo info={Graphprojecten} size={'_lg'}/>
            </div>
        </div>
        <Footer/>
    </div>
}
