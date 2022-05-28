import {Header} from "../../../componenten/header/Header";
import {Card} from "../../../componenten/card/Card";
import React from "../../../../assets/logos/react.png";
import {useEffect} from "react";
import {Footer} from "../../../componenten/footer/Footer";
import HeaderImg from "../../../../assets/work/Rule/Space_huisstijl_groot_kleur.jpg";
import Gebouw from "../../../../assets/work/Rule/Space_gebouw.jpg";
import Huisstijl from "../../../../assets/work/Rule/space_huistijl.jpg";
import Jaarrapport from "../../../../assets/work/Rule/Space_jaarraport.jpg";
import Melk from "../../../../assets/work/Rule/Space_melk.jpg";
import Tassen from "../../../../assets/work/Rule/tassan.jpg";
import Vlag from "../../../../assets/work/Rule/Space_vlag.jpg";
import {SwiperProjecten} from "../../../componenten/swiper/swiper";

export const Rule = (props) => {

    const photo = [
        {
            id: 1,
            img: Huisstijl,
        },
        {
            id: 2,
            img: Jaarrapport,
        },
        {
            id: 3,
            img: Gebouw,
        },
        {
            id: 4,
            img: Tassen,
        },
        {
            id: 5,
            img: Melk,
        },
        {
            id: 6,
            img: Vlag,
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
                    <Card size={'_sqr-header'} img={HeaderImg}/>
                </div>
                <div className={"basis-full  md:basis-1/2"}>
                    <p>
                        <b>Huisstijl Rule</b>
                    </p>
                    <p>
                        Fictieve opdracht: ontwerp een logo en bijpassende huisstijl voor een ruimte leger.
                    </p>
                    <p>
                        <b> Uitwerking:</b> Illustrator en Indesign
                    </p>
                    <p>
                        <b>Jaar:</b> 2020
                    </p>
                </div>
            </div>
            <SwiperProjecten info={photo} size={'_lg'}/>
        </div>
        <Footer/>
    </div>
}
