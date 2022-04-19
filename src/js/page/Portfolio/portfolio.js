import {Header} from "../../componenten/header/Header";
import './portfolio.scss';
import {SwiperInfo} from "../../componenten/swiper/swiper";
import {Footer} from "../../componenten/footer/Footer";
import {SubTitle} from "../../componenten/subTitle/SubTitle";
import React from "../../../assets/logos/react.png";

const Webprojecten = [{id: 1, title: "App Scheldeoord", url: "/project/scheldeoord"},
    {id: 2, title: "Kokomocity", url: "/project/kokomocity"},
    {id: 3, title: "Bib", url: "/project/bib"}, {
        id: 4,
        title: "Zwemclub Delfino", url: "/project/delfino"
    }];
const Stageprojecten = [{id: 5, title: "Huizenscanner", url: "/project/huizenscanner"},
    {id: 6, title: "Mortsel helpt", url: "/project/mortselhelpt"}];
const Graphprojecten = [{id: 7, title: "Historas", url: "/project/historas"},
    {id: 8, title: "Levis kortingsbonnen", url: "/project/levis"}, {
        id: 9,
        title: "Bestickering WSL", url: "/project/wsl"
    }, {
        id: 10,
        title: "Rule", url: "/project/rule"
    }, , {
        id: 11,
        title: "Brochure faalangst", url: "/project/faalangst"
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
