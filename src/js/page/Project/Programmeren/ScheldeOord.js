import {Header} from "../../../componenten/header/Header";
import {Card} from "../../../componenten/card/Card";
import React from "../../../../assets/logos/react.png";
import {useEffect} from "react";
import {Footer} from "../../../componenten/footer/Footer";
import HeaderImage from "../../../../assets/work/ScheldeOord/logo.jpg";

export const ScheldeOord = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return <div>
        <Header title={props.title} bg={"_warm-dark"} color={"base-cold"} size={"sm"}/>
        <div className={"container "}>
            <div className={"flex flex-row flex-wrap"}>
                <div className={"basis-full  md:basis-1/2"}>
                    <Card size={'_sqr-header'} img={HeaderImage}/>
                </div>
                <div className={"basis-full  md:basis-1/2"}>
                    <p>
                        <b>App scheldeoord</b>
                    </p>
                    <p>
                        Voor het vak Mobiele applicaties kregen wij de opdracht om een applicatie te ontwikkelen die
                        werkt op android toestelen en als PWA.
                        Het onderwerp mochten we zelf kiezen, voor dit project koos ik ScheldeOord. Dit is een camping
                        in Zeeland waar ik wel eens naartoe ga.
                        Uit ervaring wist ik dat de online reservatie systemen niet gebruiksvriendelijk waren en dat
                        deze niet allemaal op een website te vinden zijn, hier wou ik verandering in brengen met mij
                        idee.
                    </p>
                    <p>
                        Mijn idee omvatte volgende pagina's:
                    </p>
                    <p>
                        <b>Home pagina:</b> hier kan men terug vinden welke activiteit er bezig is, welke activiteiten
                        niet te
                        missen zijn die dag en een overzicht van de reservaties enerzijds voor activiteiten
                        anderzijds voor de scheldesafari.</p>
                    <p>
                        <b>Animatieprogramma:</b> dit is een overzicht van al de activiteiten per dag</p>
                    <p>
                        <b>Detail pagina:</b> hier vind men extra informatie terug over een activiteit. Waar, wanneer,
                        hoe
                        laat,
                        toegangsprijs, type activiteit, leeftijd, beschrijving,.. .
                        Via deze pagina kan men zeggen van ik wil mij inschrijven als er maar beperkt plaats is voor de
                        activiteit en kan men er voor kiezen om een herinnering in te stellen voor een activiteit. Deze
                        herinnering geeft een kwartier voor aanvang van de activiteit een melding dat deze activiteit
                        zak plaats nemen.
                    </p>
                    <p>
                        <b>Scheldeoord safari:</b> dit is een extra activiteit georganiseerd door de camping uitbater.
                        Men kan via een vaartocht op de Westerschelde opzoek gaan naar zeehonden. Deze liggen bij laag
                        water op zandbanken.
                        Op deze pagina vind men de prijzen en kan men ee reservatie maken.
                    </p>
                    <p>
                        <b> Minimum vereisten:</b>
                        <ul>
                            <li>4 pagina's</li>
                            <li>2 plugins</li>
                            <li>1 online service</li>
                            <li>Logo & Splash screen</li>
                            <li>PWA</li>
                            <li>Gebouwd met dynamische gegevens</li>
                        </ul>
                    </p>
                    <p>
                        <b> Uitwerking:</b> Angular, Ionic framework, HTML en CSS
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
