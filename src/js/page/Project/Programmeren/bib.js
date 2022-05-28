import {Header} from "../../../componenten/header/Header";
import {Card} from "../../../componenten/card/Card";
import React from "../../../../assets/logos/react.png";
import {useEffect} from "react";

export const Bib = (props) => {

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
                        <b>Bib applicatie</b>
                    </p>
                    <p>
                        Voor de vakken Gevorderde programmeertechnieken en Agile had ik een overkoepeld groepsproject.
                        In groep van 4 medestudenten werd er gevraagd om een fictieve applictatie te bouwen voor een
                        bibliotheek.
                    </p>
                    <p>
                        <b>Briefing opdracht: </b>
                        Deze bibliotheek heeft als hoofddoel om boeken
                        uit te
                        lenen. Deze boeken worden in de bibliotheek gestockeerd op basis van een categorie en een
                        leeftijdsklasse. (0-10, 10-18, 18+). Een boek uitlenen is gratis voor iedereen met een
                        maximumduur van
                        drie weken. Wie een uitgeleend boek na drie weken niet opnieuw binnen brengt, zal een boete
                        krijgen.
                        Mensen die lid zijn van de bibliotheek, hebben een voordeel en kunnen een boek uitlenen voor
                        vier
                        weken. De applicatie moet het hele boekenbestand alsook de uitleenhistoriek kunnen bijhouden
                        Op het einde van de levensduur van een boek wil de bibliotheek het verkopen aan een opgegeven
                        prijs.
                        Leden kunnen hier interesse op intekenen, het systeem kiest daarna willekeurig wie het boek kan
                        kopen.
                        Naast het uitlenen van boeken wil de bibliotheek ook beginnen met het houden van boekenbeurzen
                        om
                        meer mensen te trekken. Voor deze boekenbeurs moet een systeem gemaakt worden waarbij mensen
                        kunnen inschrijven. Op basis van het aantal inschrijvingen zal de bibliotheek dan kunnen bepalen
                        welke
                        zaal ze moeten huren. Een boekenbeurs bijwonen is gratis voor leden en kost drie euro voor
                        niet-leden
                    </p>
                    <p>
                        <b> Gevorderde programmeertechnieken: </b> er waren een paar minimum vereiseten waar we aan
                        moesten voldoen
                        <ul>
                            <li>WPF-programma</li>
                            <li>Code first principe</li>
                            <li>MVVM principe</li>
                            <li>Alle CRUD operaties zijn aanwezig</li>
                        </ul>
                    </p>
                    <p>
                        <b> Agile: </b>voor dit project moesten we volgens de principes van Agile samen werken.
                        We werkte in sprints van 1 week. Hierbij was het een goede oefening welke taken nemen we op, wanneer doen we een daily scrum, ... .
                    </p>
                    <p>
                        <b> Uitwerking:</b>C# & Agile
                    </p>
                    <p>
                        <b>Jaar:</b> 2021 - 2022
                    </p>
                </div>
            </div>
        </div>
    </div>
}
