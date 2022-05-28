import {Header} from "../../../componenten/header/Header";
import {Card} from "../../../componenten/card/Card";
import React from "../../../../assets/logos/react.png";
import {useEffect} from "react";
import {Footer} from "../../../componenten/footer/Footer";
import HeaderImg from "../../../../assets/work/WSL/right.jpg";

export const WSL = (props) => {

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
                        <b>Bestickering WSL</b>
                    </p>
                    <p>
                        Ontwerp voor reclame op de camionetten van WSL.

                        Photoshoot van de bussen voor promotie materiaal
                    </p>
                    <p>
                        <b> Uitwerking:</b> Illustrator
                    </p>
                    <p>
                        <b>Jaar:</b> 2020
                    </p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
}
