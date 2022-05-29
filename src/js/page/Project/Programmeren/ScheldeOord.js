import {Header} from "../../../componenten/header/Header";
import {Card} from "../../../componenten/card/Card";
import React from "../../../../assets/logos/react.png";
import {useEffect} from "react";
import {Footer} from "../../../componenten/footer/Footer";
import HeaderImage from "../../../../assets/work/ScheldeOord/logo.jpg";
import {SwiperProjecten} from "../../../componenten/swiper/swiper";
import Home from "../../../../assets/work/ScheldeOord/home.jpg";
import Animatie from "../../../../assets/work/ScheldeOord/animatieprogramma.jpg";
import Detail from "../../../../assets/work/ScheldeOord/detail.jpg";
import Safari from "../../../../assets/work/ScheldeOord/safari.jpg";

export const ScheldeOord = (props) => {

    const photo = [
        {
            id: 1,
            img: Home,
        },
        {
            id: 2,
            img: Animatie,
        },
        {
            id: 3,
            img: Detail,
        },
        {
            id: 4,
            img: Safari,
        }
    ];
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
                        werkt op android toestellen en als PWA.
                        Het onderwerp mochten we zelf kiezen. Voor dit project koos ik comfort scheldeoord. Dit is een camping
                        in Zeeland waar ik vaak naartoe ga.
                        Uit ervaring wist ik dat de online reservatiesystemen niet gebruiksvriendelijk waren en dat
                        deze niet allemaal op een website te vinden zijn, hier wou ik verandering in brengen met mij
                        idee.
                    </p>
                    <p>
                        <b> Uitwerking:</b> Angular, Ionic framework, HTML en CSS
                    </p>
                    <p>
                        <b>Jaar:</b> 2021 - 2022
                    </p>
                </div>
            </div>

            <SwiperProjecten info={photo} size={'_lg'}/>

            <div className={"flex flex-row flex-wrap mt-8"}>
                <div className={"basis-full  md:basis-1/2 md:p-8"}>
                    <p>
                        Mijn idee omvatte volgende pagina's:
                    </p>
                    <p>
                        <b>Home pagina:</b> hier kan men terug vinden welke activiteit er bezig is, welke activiteiten
                        niet te missen zijn die dag en een overzicht van de reservaties voor activiteiten en
                        anderzijds voor de scheldesafari.</p>
                    <p>
                        <b>Animatieprogramma:</b> dit is een overzicht van al de activiteiten per dag.</p>
                    <p>
                        <b>Detail pagina:</b> hier vind men extra informatie terug over een activiteit. Waar, wanneer,
                        hoe laat, toegangsprijs, type activiteit, leeftijd, beschrijving,...
                        Via deze pagina kan men zich inschrijven als er maar beperkt plaats is voor de
                        activiteit en kan men er voor kiezen om een herinnering in te stellen voor een activiteit. Deze
                        herinnering geeft een kwartier voor aanvang van de activiteit een melding dat deze activiteit
                        gaat beginnen.
                    </p>
                    <p>
                        <b>Scheldeoord safari:</b> dit is een extra activiteit georganiseerd door de camping uitbater.
                        Men kan via een vaartocht op de Westerschelde op zoek gaan naar zeehonden. Deze liggen bij laag
                        water op de zandbanken.
                        Op deze pagina vind men de prijzen en kan men een reservatie maken.
                    </p>
                </div>
                <div className={"basis-full  md:basis-1/2 md:p-8"}>
                    <p>
                        <b> Minimum vereisten:</b>
                        <ul>
                            <li>4 pagina's
                            </li>
                            <li>2 plugins
                                <ul>
                                    <li>Netwerk plugin</li>
                                    <li>Notification plugin</li>
                                </ul>
                            </li>
                            <li>1 online service
                                <ul>
                                    <li>Firebase, opslaan van reservaties</li>
                                    <li>Eigen API, voor het animatieprogramma</li>
                                </ul>
                            </li>
                            <li>Logo & Splash screen</li>
                            <li>PWA</li>
                            <li>Gebouwd met dynamische gegevens</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
}
