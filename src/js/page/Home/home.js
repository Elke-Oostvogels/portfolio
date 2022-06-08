import {Header} from "../../componenten/header/Header";
import {Card} from "../../componenten/card/Card";
import Blaasbloem from "../../../assets/work/blaasbloem.jpg";
import {SubTitle} from "../../componenten/subTitle/SubTitle";
import Ster from "../../../assets/work/ster.jpg";
import Sfeer from "../../../assets/work/sfeer.jpg";
import Portfolio from "../../../assets/work/Rule/Space_huisstijl_groot_kleur.jpg";
import Wie from "../../../assets/elke.jpg";
import {Footer} from "../../componenten/footer/Footer";
import React from "../../../assets/logos/react.png";

export const Home = (props) => {

    return <div>
        <Header title={"Home"} bg={"_warm-dark"} color={"base_warm_light"}/>
        <div className={"container container_bg-light"}>
            <div className={"flex flex-row flex-wrap"}>
                <div className={"basis-full md:basis-2/4"}>
                    <Card size={'_sqr-header'} class={"cover"} img={Blaasbloem}/>
                </div>
                <div className={"basis-full  md:basis-2/4"}>
                    <SubTitle title={"Hoi en welkom"} color={"base-warm-dark"} size={"sm"}/>
                    <p className={"mt-5"}>
                        Mijn naam is Elke Oostvogels, een 23 jarige studente programmeren. Als u deze website bekijkt
                        ben ik net klaar met mijn afstudeerstage.
                    </p>
                    <p>
                        Op deze website vind je een paar projecten
                        terug deze van programmeren tot grafisch werk.
                    </p>
                </div>
            </div>
        </div>
        <div className={"container container_bg-warm-light"}>
            <div className={"flex md:justify-center flex-row flex-wrap"}>
                <q className={"hobby__quote"}>Van jongs af aan ben ik al graag creatief bezig. Van knutselen en tekenen
                    tot fotografie. Toen ik de grafische wereld leerde kennen wist ik dat het iets voor mij was.
                    De grafische wereld wil ik dan ook graag combineren met de online wereld. Daarom de keuze om
                    programmeren te studeren.</q>
            </div>
        </div>
        <div className={"container container_bg-light"}>
            <SubTitle title={"Bekijk zeker"} color={"base-warm-dark"} size={"sm"}/>
            <div className={"flex flex-col xl:flex-row"}>
                <Card size={'_sqr'} stijl={"hover_stijl"} img={Portfolio} title={"Portfolio"} url={"/portfolio"}/>
                <Card size={'_sqr'} stijl={"hover_stijl"} img={Sfeer} title={"Hobby"} url={"/hobby"}/>
                <Card size={'_sqr'} stijl={"hover_stijl"} img={Wie} title={"Wie ben ik?"} url={"/wie"}/>
            </div>
        </div>
        <Footer/>
    </div>
}
