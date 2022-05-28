import {Header} from "../../../componenten/header/Header";
import {Card} from "../../../componenten/card/Card";
import React from "../../../../assets/logos/react.png";
import {useEffect} from "react";
import {Footer} from "../../../componenten/footer/Footer";

export const ParkNaam = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return <div>
        <Header title={props.title} bg={"_warm-dark"} color={"base-cold"} size={"sm"}/>
        <div className={"container "}>
            <div className={"flex flex-row flex-wrap"}>
                <div className={"basis-2/4"}>
                    <Card size={'_sqr-header'}/>
                </div>
                <div className={"basis-2/4"}>
                    <p>
                        Park zkt. naam is een landingspagina waar mensen kunnen stemmen voor een naam voor het park aan
                        de gedempte Zuiderdokken.
                        Deze landingspagina bevat een formulier om te stemmen en een bedanking pagina.
                    </p>
                    <p>
                        <b> Uitwerking:</b> HTML & CSS
                    </p>
                    <p>
                        <b>Jaar:</b> 2018-2019
                    </p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
}
