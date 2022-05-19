import {Header} from "../../componenten/header/Header";
import {Card} from "../../componenten/card/Card";
import Handen from "../../../assets/work/handen.jpg";
import {SubTitle} from "../../componenten/subTitle/SubTitle";
import Ster from "../../../assets/work/ster.jpg";
import Sfeer from "../../../assets/work/sfeer.jpg";
import {Footer} from "../../componenten/footer/Footer";
import React from "../../../assets/logos/react.png";

export const Home = (props) => {

    return <div>
        <Header title={"Home"} bg={"_warm-dark"} color={"base_warm_light"}/>
        <div className={"container container_bg-light"}>
            <SubTitle title={"Hoi"} color={"base-warm-dark"} size={"sm"}/>
            <div className={"flex flex-row flex-wrap"}>
                <div className={"basis-full  md:basis-1/2"}>
                    <p>
                        Van kinds af ben ik bezig met fotografie. Alles begon met een oude camera die stuk was, doch
                        waarmee ik dan speels als kind foto’s maakte. Deze werd na een tijdje vervangen door een oude
                        digitale compact camera met vaste lens die gelukkig nog werkte. De camera ging vaak met mij mee
                        en ik liep overal foto’s te maken van de meest normale zaken. In het middelbaar ben ik van een
                        compacte camera overgeschakeld naar een spiegelreflex camera. Hier kon ik nog zoveel meer mee.
                        Plots waren er haast geen beperkingen meer, alles zelf instellen gaf zoveel meer mogelijkheden
                        dan bij een compact camera. Op het H. Graf Instituut te Turnhout was één van mijn lesuren
                        fotografie. Dit was een gedroomde situatie waarbij ik bijzonder veel heb opgestoken. Het was
                        hier dat ik een fotografieproject mocht uitvoeren geïnspireerd door de modefotograaf Zeb Daemen,
                        een oud leerling van deze school. Hij kon ons bijsturen en inspireren in die fotografie. Doordat
                        ik vaak mijn fototoestel meenam op excursies was ik een soort klasfotograaf. In mijn
                        specialisatie jaar kreeg ik binnen het leerbedrijf 'Lamoen de box' dan ook een opdracht als
                        ‘fotograaf’. Hierdoor kreeg ik de kans om nog meer met fotografie bezig te zijn dan gewoonlijk.
                        Al doende leren was hier echt een plezier om te beleven. Zo heb ik tijdens dat jaar
                        verschillende fotografieprojecten mogen uitvoeren nl. productfotografie, personenfotografie en
                        sfeerfotografie
                    </p>
                </div>
                <div className={"basis-full  md:basis-1/2"}>
                    <p>
                        Van kinds af ben ik bezig met fotografie. Alles begon met een oude camera die stuk was, doch
                        waarmee ik dan speels als kind foto’s maakte. Deze werd na een tijdje vervangen door een oude
                        digitale compact camera met vaste lens die gelukkig nog werkte. De camera ging vaak met mij mee
                        en ik liep overal foto’s te maken van de meest normale zaken. In het middelbaar ben ik van een
                        compacte camera overgeschakeld naar een spiegelreflex camera. Hier kon ik nog zoveel meer mee.
                        Plots waren er haast geen beperkingen meer, alles zelf instellen gaf zoveel meer mogelijkheden
                        dan bij een compact camera. Op het H. Graf Instituut te Turnhout was één van mijn lesuren
                        fotografie. Dit was een gedroomde situatie waarbij ik bijzonder veel heb opgestoken. Het was
                        hier dat ik een fotografieproject mocht uitvoeren geïnspireerd door de modefotograaf Zeb Daemen,
                        een oud leerling van deze school. Hij kon ons bijsturen en inspireren in die fotografie. Doordat
                        ik vaak mijn fototoestel meenam op excursies was ik een soort klasfotograaf. In mijn
                        specialisatie jaar kreeg ik binnen het leerbedrijf 'Lamoen de box' dan ook een opdracht als
                        ‘fotograaf’. Hierdoor kreeg ik de kans om nog meer met fotografie bezig te zijn dan gewoonlijk.
                        Al doende leren was hier echt een plezier om te beleven. Zo heb ik tijdens dat jaar
                        verschillende fotografieprojecten mogen uitvoeren nl. productfotografie, personenfotografie en
                        sfeerfotografie
                    </p>
                </div>
            </div>
        </div>
        <div className={"container container_bg-warm-light"}>
            <div className={"flex md:justify-center flex-row flex-wrap"}>
                <q className={"hobby__quote"}>Fotografie is voor mij een manier om herinneringen vast te leggen. Een
                    mooie foto is de aanleiding
                    tot een goede herinnering. <br/>
                    Fotograferen laat toe om mensen die ik lief heb en die er niet meer zijn toch levendig te houden in
                    mijn herinneringen.<br/> Dat is voor mij de kracht van fotografie.</q>
            </div>
        </div>
        <div className={"container container_bg-light"}>
            <SubTitle title={"Bekijk zeker"} color={"base-warm-dark"} size={"sm"}/>
            <div className={"basis-full md:basis-2/6"}>
                <Card size={'_sqr'} img={Sfeer}/>
            </div>
            <div className={"basis-full md:basis-2/6"}>
                <Card size={'_sqr'} img={Sfeer}/>
            </div>
            <div className={"basis-full md:basis-2/6"}>
                <Card size={'_sqr'} img={Sfeer}/>
            </div>
        </div>
        <Footer/>
    </div>
}
