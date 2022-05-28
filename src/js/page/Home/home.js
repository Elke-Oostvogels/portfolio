import {Header} from "../../componenten/header/Header";
import {Card} from "../../componenten/card/Card";
import Handen from "../../../assets/work/handen.jpg";
import {SubTitle} from "../../componenten/subTitle/SubTitle";
import Ster from "../../../assets/work/ster.jpg";
import Sfeer from "../../../assets/work/sfeer.jpg";
import {Footer} from "../../componenten/footer/Footer";
import React from "../../../assets/logos/react.png";

export const Home = (props) => {

    return <div>
        <Header title={"Home"} bg={"_warm-dark"} color={"base_warm_light"}/>
        <div className={"container container_bg-light"}>
            <div className={"flex flex-row flex-wrap"}>
                <div className={"basis-full md:basis-2/4"}>
                    <Card size={'_sqr-header'}/>
                </div>
                <div className={"basis-full  md:basis-2/4"}>
                    <SubTitle title={"Wie ben ik?"} color={"base-warm-dark"} size={"sm"}/>
                    <p>
                        Hoi, ik ben Elke Oostvogels. Ik ben een 22 jarige studente. Momenteel ben ik bezig aan mijn
                        laatste
                        jaar
                        van het graduaat Programmeren. Na deze studie zou ik graag aan de slag gaan als Front-end
                        developer,
                        dit
                        omvangt mijn interesses. Namelijk het coderen ik vind het geweldig om een applicatie te zien
                        ontstaan
                        maar ook het grafische aspect dat alles ook mooi staat.
                    </p>
                </div>
            </div>
        </div>
        <div className={"container container_bg-warm-light"}>
            <div className={"flex md:justify-center flex-row flex-wrap"}>
                <q className={"hobby__quote"}>Fotografie is voor mij een manier om herinneringen vast te leggen. Een
                    mooie foto is de aanleiding
                    tot een goede herinnering. <br/>
                    Fotograferen laat toe om mensen die ik lief heb en die er niet meer zijn toch levendig te houden in
                    mijn herinneringen.<br/> Dat is voor mij de kracht van fotografie.</q>
            </div>
        </div>
        <div className={"container container_bg-light"}>
            <SubTitle title={"Bekijk zeker"} color={"base-warm-dark"} size={"sm"}/>
            <div className={"flex flex-col lg:flex-row"}>
                <Card size={'_sqr'} stijl={"hover_stijl"} img={Sfeer} title={"Portfolio"} url={"/portfolio"}/>
                <Card size={'_sqr'} stijl={"hover_stijl"} img={Sfeer} title={"Hobby"} url={"/hobby"}/>
                <Card size={'_sqr'} stijl={"hover_stijl"} img={Sfeer} title={"Wie ben ik?"} url={"/wie"}/>
            </div>
        </div>
        <Footer/>
    </div>
}
