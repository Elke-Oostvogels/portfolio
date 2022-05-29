import {Header} from "../../../componenten/header/Header";
import {Card} from "../../../componenten/card/Card";
import React from "../../../../assets/logos/react.png";
import {useEffect} from "react";
import {Footer} from "../../../componenten/footer/Footer";
import WebsiteBeeld from "../../../../assets/work/parkzktnaam_website.png";
import Logo from "../../../../assets/work/Park/text.jpg";

export const ParkNaam = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return <div>
        <Header title={props.title} bg={"_warm-dark"} color={"base-cold"} size={"sm"}/>
        <div className={"container"}>
            <div className={"flex flex-row flex-wrap"}>
                <div className={"basis-full  md:basis-1/2"}>
                    <Card size={'_sqr-header'} img={Logo}/>
                </div>
                <div className={"basis-full  md:basis-1/2"}>
                    <p className={'py-2'}>
                        Park zkt. naam is een landingspagina waar mensen kunnen stemmen voor een naam voor het park aan
                        de gedempte Zuiderdokken.
                        Deze landingspagina bevat een formulier om te stemmen en een bedanking pagina.
                    </p>
                    <p className={'py-2'}>
                        De gedempte zuiderdokken zijn ze momenteel aan het omvormen van een parking naar een
                        ondergrondse parking en bovengronds een groot park. Voor dit park zijn ze nog op zoek naar een
                        naam. Hiervoor hebben ze een campagne gemaakt en een website pagina waar mensen kunnen stemmen
                        op 3 opties, om zo tot een naam te komen voor dat park.
                    </p>
                    <p>
                        <b> Uitwerking:</b> HTML & CSS
                    </p>
                    <p>
                        <b>Jaar:</b> 2018-2019
                    </p>
                </div>
                <img src={WebsiteBeeld} className={"w-4/5 m-auto"}/>
            </div>

        </div>
        <Footer/>
    </div>
}
