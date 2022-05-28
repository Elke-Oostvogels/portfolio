import {Header} from "../../../componenten/header/Header";
import {Card} from "../../../componenten/card/Card";
import React from "../../../../assets/logos/react.png";
import {useEffect} from "react";
import {Footer} from "../../../componenten/footer/Footer";
import HeaderImg from "../../../../assets/work/Faalangst/Brochure_faalangst_cover.jpg";

export const Faalangst = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return <div>
        <Header title={props.title} bg={"_warm-dark"} color={"base-cold"} size={"sm"}/>
        <div className={"container "}>
            <div className={"flex flex-row flex-wrap"}>
                <div className={"basis-2/4"}>
                    <Card size={'_sqr-header'} img={HeaderImg}/>
                </div>
                <div className={"basis-2/4"}>
                    <p>
                        <b>Brochure Faalangst</b>
                    </p>
                    <p>
                        Fictieve opdracht: maak een design voor een brochure rond faalangst.

                        Omdat het om een fictief leger ging had ik het idee om er op een grappige manier met de opdracht
                        om te gaan. Want wat zouden soldaten in de ruimte kunnen doen, in mijn ogen niks. Dus zo is het
                        idee ontstaan om astronauten aardse dingen in de ruimte te laten doen. Bv fietsen,
                        schommelen,... Dit heb ik doorgetrokken in de website en huisstijl.
                    </p>
                    <p>
                        <b> Formaat:</b> 15cm op 15cm
                    </p>
                    <p>
                        <b> Uitwerking:</b> Indesign
                    </p>
                    <p>
                        <b>Jaar:</b> 2019
                    </p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
}
