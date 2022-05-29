import {Header} from "../../../componenten/header/Header";
import {Card} from "../../../componenten/card/Card";
import React from "../../../../assets/logos/react.png";
import {useEffect} from "react";
import {Footer} from "../../../componenten/footer/Footer";
import Logo from '../../../../../src/assets/logos/huizenscanner.jpg';

export const Huizenscanner = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return <div>
        <Header title={props.title} bg={"_warm-dark"} color={"base-cold"} size={"sm"}/>
        <div className={"container "}>
            <div className={"flex flex-row flex-wrap"}>
                <div className={"basis-full  md:basis-1/2"}>
                    <Card size={'_sqr-header'} img={Logo}/>
                </div>
                <div className={"basis-full  md:basis-1/2"}>
                    <p>
                        De Huizenscanner was mijn basis project gedurende mijn stage bij Viavictor.<br/>
                        Huizenscanner is een applicatie voor mensen die willen gaan bouwen of verbouwen en die inspiratie willen opdoen.
                        Het idee is gebaseerd op Pinterest maar hier zou er meer informatie verkregen
                        kunnen worden. Zoals wie is de architect of welke steen in welke kleur is er gebruikt. Deze
                        zaken zouden ook opgeslagen kunnen worden bij favorieten zodat alles mooi gebundeld is. Mochten
                        ze naar een architect of aannemer willen stappen, dan weten ze direct welke materialen ze zouden
                        willen.
                        Anderzijds is dit ook interessant voor architecten, het kan voor extra reclame zorgen, maar ook
                        dat mensen hen vlugger vinden en een uitbreiding van een portfolio. Meestal heeft een architect
                        een portfolio maar deze bevatten niet veel technische informatie, deze zou wel gegeven kunnen
                        worden bij Huizenscanner.
                    </p>
                    <p>
                        <b> Uitwerking:</b> React, SASS, BEM Methodologie
                    </p>
                    <p>
                        <b>Jaar:</b> 2022
                    </p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
}
