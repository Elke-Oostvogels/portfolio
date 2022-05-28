import {Header} from "../../../componenten/header/Header";
import {Card} from "../../../componenten/card/Card";
import React from "../../../../assets/logos/react.png";
import {useEffect} from "react";
import {Footer} from "../../../componenten/footer/Footer";
import Logo from "../../../../assets/work/Kokomocity/logo.jpg";
export const Kokomocity = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return <div>
        <Header title={props.title} bg={"_warm-dark"} color={"base-cold"} size={"sm"}/>
        <div className={"container "}>
            <div className={"flex flex-row flex-wrap"}>
                <div className={"basis-2/4"}>
                    <Card size={'_sqr-header'} img={Logo}/>
                </div>
                <div className={"basis-2/4"}>
                    <p>
                        <b>Webapplicatie Kokomocity</b>
                    </p>
                    <p>
                        Voor het vak Webapplicaties hadden we een project waarbij we een webapplicatie moesten ontwerpen en ontwikkelen.
                        Het onderwerp mochten we zelf kiezen. Als voorbeeld kregen we een website voor een festival of een webshop.
                        Omdat ik persoonlijk graag projecten maak rond een bestaand bedrijf koos ik voor de Kokomocity.
                        Dit omdat er nog geen website is en alles van reservaties tijdens corona via Instagram gebeurde daar haalde ik mijn inspiratie uit.
                        Ook vormde dit een leuke uitdaging voor het ontwerp omdat het gaat voor jongere en feesten en dat gevoel wou ik wel kunnen overbrengen.
                    </p>
                    <p>
                        <b> Uitwerking:</b> C#, HTML & CSS
                    </p>
                    <p>
                        <b>Jaar:</b> 2021 - 2022
                    </p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
}
