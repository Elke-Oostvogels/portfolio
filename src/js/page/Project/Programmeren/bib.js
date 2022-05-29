import {Header} from "../../../componenten/header/Header";
import {Card} from "../../../componenten/card/Card";
import React from "../../../../assets/logos/react.png";
import {useEffect} from "react";
import {Footer} from "../../../componenten/footer/Footer";
import HeaderImage from "../../../../assets/work/Bib/Inlog-scherm.jpg";
import {SwiperProjecten} from "../../../componenten/swiper/swiper";
import Dashboard_Beheerder from "../../../../assets/work/Bib/Beheerders-Dashboard.jpg";
import BoekenBeursAanmaken from "../../../../assets/work/Bib/Boekenbeurs aanmaken-1.jpg";
import Boekverkoop from "../../../../assets/work/Bib/Boekenverkoop.jpg";
import DetailPagina from "../../../../assets/work/Bib/DetailPagina.jpg";
import HuidigeUitleningen from "../../../../assets/work/Bib/Huidige uitlening.jpg";
import Inloggen from "../../../../assets/work/Bib/Inlog-scherm.jpg";
import InschrijvenBoekenbeurs from "../../../../assets/work/Bib/Inschrijvingen boekenbeurs.jpg";
import LedenBoekenbeurs from "../../../../assets/work/Bib/Leden-Boekenbeurs.jpg";
import DashboardLeden from "../../../../assets/work/Bib/Leden-Dashboard.jpg";
import Lijst_Boekenbeurs from "../../../../assets/work/Bib/Lijst boekenbeurs.jpg";
import Lijst_Media from "../../../../assets/work/Bib/Lijst Media.jpg";
import Overzicht_Boetes from "../../../../assets/work/Bib/Overzicht boetes.jpg";
import Overzicht_Tebetalen from "../../../../assets/work/Bib/Overzicht openstaande bedragen-1.jpg";
import Registreren from "../../../../assets/work/Bib/Registratie-scherm.jpg";
import Reservatie_Beheer from "../../../../assets/work/Bib/Reservatie beheer.jpg";
import Reserveren_Boek from "../../../../assets/work/Bib/Reserveren boek.jpg";
import Uitleenhistoriek from "../../../../assets/work/Bib/Uitleenhistoriek.jpg";

export const Bib = (props) => {

    const photo = [
        {
            id: 1,
            img: Inloggen,
        },
        {
            id: 2,
            img: Registreren,
        },
        {
            id: 3,
            img: DashboardLeden,
        },
        {
            id: 4,
            img: Reserveren_Boek,
        },
        {
            id: 5,
            img: DetailPagina,
        },
        {
            id: 6,
            img: Boekverkoop,
        },
        {
            id: 7,
            img: LedenBoekenbeurs,
        }
        ,
        {
            id: 8,
            img: Dashboard_Beheerder,
        }
        ,
        {
            id: 9,
            img: BoekenBeursAanmaken,
        }
        ,
        {
            id: 10,
            img: InschrijvenBoekenbeurs,
        }
        ,
        {
            id: 11,
            img: Lijst_Boekenbeurs,
        }
        ,
        {
            id: 12,
            img: Lijst_Media,
        }
        ,
        {
            id: 13,
            img: Uitleenhistoriek,
        }
        ,
        {
            id: 14,
            img: HuidigeUitleningen,
        }
        ,
        {
            id: 15,
            img: Overzicht_Boetes,
        }
        ,
        {
            id: 16,
            img: Overzicht_Tebetalen,
        }
        ,
        {
            id: 17,
            img: Reservatie_Beheer,
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
                    <Card size={'_sqr-header'} img={HeaderImage} class={"cover"}/>
                </div>
                <div className={"basis-full  md:basis-1/2"}>
                    <p>
                        <b>Bib applicatie</b>
                    </p>
                    <p>
                        Voor de vakken Gevorderde programmeertechnieken en Agile had ik een overkoepelend groepsproject.
                        In een groep met 4 medestudenten werd er gevraagd om een fictieve applicatie te bouwen voor een
                        bibliotheek.
                    </p>
                    <p>
                        <b> Uitwerking:</b>C# & Agile
                    </p>
                    <p>
                        <b>Jaar:</b> 2021 - 2022
                    </p>
                </div>
            </div>
            <SwiperProjecten info={photo} size={'_lg'}/>
            <div className={"flex flex-row flex-wrap"}>
                <div className={"basis-full  md:basis-1/2  md:p-8"}>
                    <p>
                        <b>Briefing opdracht: </b>
                        Deze bibliotheek heeft als hoofddoel om boeken
                        uit te lenen. Deze boeken worden in de bibliotheek gestockeerd op basis van een categorie en een
                        leeftijdsklasse. (0-10, 10-18, 18+). Een boek uitlenen is gratis voor iedereen met een
                        maximumduur van drie weken. Wie een uitgeleend boek na drie weken niet opnieuw binnen brengt, zal een boete
                        krijgen. Mensen die lid zijn van de bibliotheek hebben een voordeel en kunnen een boek uitlenen voor
                        vier weken. De applicatie moet het hele boekenbestand alsook de uitleenhistoriek kunnen bijhouden
                        Op het einde van de levensduur van een boek wil de bibliotheek het verkopen aan een opgegeven
                        prijs. Leden kunnen hier interesse op intekenen, het systeem kiest daarna willekeurig wie het boek kan
                        kopen. Naast het uitlenen van boeken wil de bibliotheek ook beginnen met het houden van boekenbeurzen
                        om meer mensen te trekken. Voor deze boekenbeurs moet een systeem gemaakt worden waarbij mensen
                        kunnen inschrijven. Op basis van het aantal inschrijvingen zal de bibliotheek dan kunnen bepalen
                        welke zaal ze moeten huren. Een boekenbeurs bijwonen is gratis voor leden en kost drie euro voor
                        niet-leden
                    </p>
                </div>
                <div className={"basis-full  md:basis-1/2 md:p-8"}>
                    <p>
                        <b> Gevorderde programmeertechnieken: </b> er waren een paar minimum vereisten waar we aan
                        moesten voldoen.
                        <ul>
                            <li>WPF-programma</li>
                            <li>Code first principe</li>
                            <li>MVVM principe</li>
                            <li>Alle CRUD operaties zijn aanwezig</li>
                        </ul>
                    </p>
                    <p>
                        <b> Agile: </b>voor dit project moesten we volgens de principes van Agile samen werken.
                        We werkten in sprints van 1 week. Hierbij was het een goede oefening welke taken nemen we op,
                        wanneer doen we een daily scrum, ...
                    </p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
}
