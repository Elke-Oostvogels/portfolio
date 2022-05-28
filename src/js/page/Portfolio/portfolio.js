import {Header} from "../../componenten/header/Header";
import './portfolio.scss';
import {SwiperInfo} from "../../componenten/swiper/swiper";
import {Footer} from "../../componenten/footer/Footer";
import {SubTitle} from "../../componenten/subTitle/SubTitle";
import React from "../../../assets/logos/react.png";

/*Werken*/
import Faalangst from '../../../../src/assets/work/Brochure_faalangst_coer_klein.jpg';
import Historas from '../../../../src/assets/work/Historas_klein.jpg';
import WSL from '../../../../src/assets/work/wsl.jpg';
import Delfino from '../../../../src/assets/work/delfino.jpg';
import Rule from '../../../../src/assets/work/Rule/Space_huisstijl_groot_kleur.jpg';
import MortstelHelpt from '../../../../src/assets/work/mortsel_helpt.jpg';
import Huizenscanner from '../../../../src/assets/logos/huizenscanner.jpg';
import {useEffect} from "react";
import Kokomocity from '../../../assets/work/Kokomocity/logo.jpg';
import Bib from '../../../assets/work/Bib/Inlog-scherm.jpg';
import ScheldeOord from '../../../assets/work/ScheldeOord/logo.jpg';
import ParkZktNaam from '../../../assets/work/Park/text.jpg';

const Webprojecten = [{id: 1, title: "App Scheldeoord", url: "/project/scheldeoord", img: ScheldeOord},
    {id: 2, title: "Kokomocity", url: "/project/kokomocity", img: Kokomocity},
    {id: 3, title: "Bib", url: "/project/bib", img: Bib}, {
        id: 4,
        title: "Zwemclub Delfino", url: "/project/delfino", img: Delfino
    }];
const Stageprojecten = [
    {id: 5, title: "Huizenscanner", url: "/project/huizenscanner", img: Huizenscanner},
    {id: 5, title: "Park zkt. naam", url: "/project/parkzktnaam", img:ParkZktNaam
},
{
    id: 6, title
:
    "Mortsel helpt", url
:
    "/project/mortselhelpt", img
:
    MortstelHelpt
}
]
;
const Graphprojecten = [{id: 7, title: "Historas", url: "/project/historas", img: Historas},
    {
        id: 9,
        title: "Bestickering WSL", url: "/project/wsl", img: WSL
    }, {
        id: 10,
        title: "Rule", url: "/project/rule", img: Rule
    }, {
        id: 11,
        title: "Brochure faalangst", url: "/project/faalangst",
        img: Faalangst
    }];

export const Portfolio = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
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
                <SwiperInfo info={Webprojecten} size={'_lg'} stijl={"hover_stijl"}/>
                <h4>Stage projecten</h4>
                <SwiperInfo info={Stageprojecten} size={'_lg'} stijl={"hover_stijl"}/>

            </div>
            <div className={"portfolio__content"}>
                <SubTitle title={"Grafisch ontwerp"} color={"base-cold"}/>
                <p>
                    Zie hier een selectie van projecten van mijn opleiding Publiciteit en Webdesign maar ook van
                    projecten
                    die
                    ik prive gemaakt heb.
                </p>
                <SwiperInfo info={Graphprojecten} size={'_lg'} stijl={"hover_stijl"}/>
            </div>
        </div>
        <Footer/>
    </div>
}
