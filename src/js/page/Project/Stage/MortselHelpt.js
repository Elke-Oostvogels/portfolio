import {Header} from "../../../componenten/header/Header";
import {Card} from "../../../componenten/card/Card";
import React from "../../../../assets/logos/react.png";
import {useEffect} from "react";
import HeaderImage from "../../../../assets/work/mortsel_helpt.jpg";
import {Footer} from "../../../componenten/footer/Footer";
import WebsiteBeeld from "../../../../assets/work/mortselhelpt_website.jpg";

export const MortselHelpt = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return <div>
        <Header title={props.title} bg={"_warm-dark"} color={"base-cold"} size={"sm"}/>
        <div className={"container "}>
            <div className={"flex flex-row flex-wrap"}>
                <div className={"basis-full  md:basis-1/2"}>
                    <Card size={'_sqr-header'} img={HeaderImage} />
                </div>
                <div className={"basis-full  md:basis-1/2"}>
                    <p className={'py-2'}>
                        Tijdens mijn stage kreeg ik de opdracht om 2 pagina's te bouwen voor Mortsel helpt.
                        Voor dit project kreeg ik de opdracht om te werken met TWIG, zodat er dynamische
                        info getoond kan worden.
                    </p>
                    <p className={'py-2'}>
                        Gemeente Mortsel wou iets doen voor de vluchtelingen uit Oekraïne, niet in de vorm van gewoon
                        geld doneren maar in de vorm van virtueel pakketten aankopen. Deze pakketten kunnen gaan van een
                        luierpakket, lakenpakket, koelkast tot een verzorgingspakket voor volwassenen.
                    </p>
                    <p>
                        <b> Uitwerking:</b> HTML, TWIG & CSS
                    </p>
                    <p className={"pb-5"}>
                        <b>Jaar:</b> 2022
                    </p>
                    <a href={"https://mortselhelpt.be/"} target={"_blank"} className={"btn"}>Bekijk de website</a>
                </div>
                <img src={WebsiteBeeld} className={"w-3/5 m-auto"}/>
            </div>
        </div>
        <Footer/>
    </div>
}
