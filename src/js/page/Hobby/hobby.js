import {Header} from "../../componenten/header/Header";
import React from "../../../assets/logos/react.png";
import {Card} from "../../componenten/card/Card";
import {SubTitle} from "../../componenten/subTitle/SubTitle";
import {Footer} from "../../componenten/footer/Footer";
import './hobby.scss';

import Handen from '../../../../src/assets/work/handen.jpg';
import Ster from '../../../../src/assets/work/ster.jpg';
import Sfeer from '../../../../src/assets/work/sfeer.jpg';
import Personen from '../../../../src/assets/work/italie.JPG';
import {useEffect} from "react";

export const Hobby = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return <div className={"hobby"}>
        <Header title={"Hobby"} bg={"_cold-dark"} color={"base-cold"}/>
        <div className={"container container_bg-light"}>
            <div className={"flex flex-row flex-wrap justify-center"}>
                <div className={"basis-full md:basis-2/6"}>
                    <Card size={'_sqr-header'} img={Handen} color={"img_hobby"}/>
                </div>
                <div className={"basis-full  md:basis-1/2 md:pl-8"}>
                    <SubTitle title={"Fotografie"} color={"base-warm-dark"} size={"sm"}/>
                    <p className={"mt-5"}>
                        Van kinds af ben ik bezig met fotografie. Alles begon met een oude camera die stuk was, doch
                        waarmee ik dan speels als kind foto’s maakte. Deze werd na een tijdje vervangen door een oude
                        digitale compact camera met vaste lens die gelukkig nog werkte. De camera ging vaak met mij mee
                        en ik liep overal foto’s te maken van de meest normale zaken. In het middelbaar ben ik van een
                        compacte camera overgeschakeld naar een spiegelreflex camera. Hier kon ik nog zoveel meer mee.
                        Plots waren er haast geen beperkingen meer, alles zelf instellen gaf zoveel meer mogelijkheden
                        dan bij een compact camera. Doordat ik vaak mijn fototoestel meenam op excursies was ik een
                        soort klasfotograaf. In mijn
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
            <div className={"flex flex-row flex-wrap justify-center "}>
                <div className={"basis-full  md:basis-1/2 md:mx-5 md:my-auto mt-6"}>
                    <SubTitle title={"Product fotografie"} color={"base-warm-dark"} size={"sm"}/>
                    <p>
                        Dit hield vooral in om al de producten die we in de pop-up afdeling gingen verkopen te
                        fotograferen. Hiervan werden dan bepaalde beelden gebruikt voor de sociale media. Van bepaalde
                        producten moest er ook een handleiding voorzien worden samen met de begeleidende foto’s. Tijdens
                        mijn stage bij 'de Ster' te Hoogstraten die volgde op dat jaar heb ik veel van deze kennis
                        kunnen gebruiken. Mijn hoofdtaak was nu het fotograferen van de bedrijfsproducten.
                    </p>
                </div>
                <div className={"basis-full md:basis-1/6 mx-5"}>
                    <Card size={'_sqr'} img={Ster} color={"img_hobby"}/>
                </div>
            </div>
            <div className={"flex flex-row flex-wrap justify-center  sm:flex-row-reverse sm:my-5"}>
                <div className={"basis-full  md:basis-1/2 md:mx-5 md:my-auto mt-6"}>
                    <SubTitle title={"Personen fotografie"} color={"base-warm-dark"} size={"sm"}/>
                    <p>
                        Tijdens mijn laatste jaar aan het H. Graf Instituut te Turnhout heb ik diverse opdrachtjes voor
                        personenfotografie uitgewerkt. Zo heb ik al de leerlingen van diverse klassen individueel
                        gefotografeerd in een kartonnen doos, en deze dan samengebracht tot één beeld per klas, en één
                        totaalbeeld van al de leerlingen samen. Communiekaarten voor de familie waren eveneens zeer
                        leuke opdrachten.
                    </p>
                </div>
                <div className={"basis-full md:basis-1/6 mx-5"}>
                    <Card size={'_sqr'} img={Personen} color={"img_hobby"}/>
                </div>
            </div>
            <div className={"flex flex-row flex-wrap justify-center sm:my-5"}>
                <div className={"basis-full  md:basis-1/2 md:mx-5 md:my-auto mt-6"}>
                    <SubTitle title={"Sfeer fotografie"} color={"base-warm-dark"} size={"sm"}/>
                    <p>
                        Voor het leerbedrijf 'Lamoen de box' te Turnhout maakte ik een reportage over de opbouw van deze
                        pop-up winkel tijdens de kerstperiode. Door de achtereenvolgende beelden krijg je een goed idee
                        van de totale opbouw met licht en ruimte voor de tentoongestelde producten. Tijdens de opening
                        van de pop-up heb ik ook de sfeerbeelden gemaakt van de toespraken. De afbraak en opruiming van
                        een groot schoolgebouw in Meerle is eveneens een dankbare reportage van een stuk
                        dorpsgeschiedenis. ‘Hoogstraten in groenten en Bloemen’ is al enkele jaren een zeer interessante
                        oefening omwille van de kleurenpracht, de artistieke vormgeving en de grote diversiteit van de
                        bloemstukken. Ieder jaar is hierrond ook een fotowedstrijd waar ik mijn beste foto’s voor
                        instuur. Zo is er een paar jaar geleden een foto van mij gebruikt bij het promotiemateriaal van
                        de nieuwe editie van ‘Hoogstraten in groenten en Bloemen’.
                    </p>
                </div>
                <div className={"basis-full md:basis-1/6 mx-5"}>
                    <Card size={'_sqr'} img={Sfeer} color={"img_hobby"}/>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
}
