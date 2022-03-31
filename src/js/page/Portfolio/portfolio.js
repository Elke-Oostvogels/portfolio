import {Header} from "../../componenten/header/Header";
import './portfolio.scss';
import {SwiperInfo} from "../../componenten/swiper/swiper";

const Webprojecten = [{id: 1, title: "App Scheldeoord"}, {id: 2, title: "Kokomocity"}, {id: 3, title: "Bib"}];
const Graphprojecten = [{id: 4, title: "Historas"}, {id: 5, title: "Levis kortingsbonnen"}, {
    id: 6,
    title: "Bestickering WSL"
}, {
    id: 7,
    title: "Test"
}];

export const Portfolio = () => {

    return <div className={"portfolio"}>
        <Header title={"Portfolio"} bg={"_dark"}/>
        <div className={"container"}>
            <div className={"portfolio__content"}>
                <h3>Programmeren</h3>
                <p>Zie hier een selectie van projecten die ik gedurende mijn opleiding Programmeren en stage gemaakt
                    heb.
                    Deze projecten verschillen op verschillende opzichten van elkaar, dit qua taal maar ook
                    onderwerp.</p>

                <SwiperInfo info={Webprojecten} size={'_lg'}/>

            </div>
            <div className={"portfolio__content"}>
                <h3>Grafisch ontwerp</h3>
                <p>
                    Zie hier een selectie van projecten van mijn opleiding Publiciteit en Webdesign maar ook van
                    projecten
                    die
                    ik prive gemaakt heb.
                </p>
                <SwiperInfo info={Graphprojecten} size={'_lg'}/>
            </div>
        </div>
    </div>
}
