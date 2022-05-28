import {Header} from "../../../componenten/header/Header";
import {Card} from "../../../componenten/card/Card";
import React from "../../../../assets/logos/react.png";
import {useEffect} from "react";

export const MortselHelpt = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return <div>
        <Header title={props.title} bg={"_warm-dark"} color={"base-cold"} size={"sm"}/>
        <div className={"container "}>
            <div className={"flex flex-row flex-wrap"}>
                <div className={"basis-2/4"}>
                    <Card size={'_sqr'}/>
                </div>
                <div className={"basis-2/4"}>
                    <p>
                        Tijdens mijn stage kreeg ik de opdracht om 2 pagina's te bouwen voor Mortsel helpt.
                        Voor het bouwen van de pagina's kreeg ik de opdracht om te werken met TWIG, zodat er dynamische info getoond kan worden.

                    </p>
                    <p>
                        <b> Uitwerking:</b> HTML, TWIG & CSS
                    </p>
                    <p>
                        <b>Jaar:</b> 2022
                    </p>
                </div>
            </div>
        </div>
    </div>
}
