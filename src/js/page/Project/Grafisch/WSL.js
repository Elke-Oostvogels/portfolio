import {Header} from "../../../componenten/header/Header";
import {Card} from "../../../componenten/card/Card";
import React from "../../../../assets/logos/react.png";
import {useEffect} from "react";
import {Footer} from "../../../componenten/footer/Footer";
import HeaderImg from "../../../../assets/work/WSL/right.jpg";
import {SwiperProjecten} from "../../../componenten/swiper/swiper";
import left from "../../../../assets/work/WSL/left.jpg";
import right from "../../../../assets/work/WSL/right.jpg";
import back from "../../../../assets/work/WSL/back.jpg";


export const WSL = (props) => {
    const photo = [
        {
            id: 1,
            img: left,
        },
        {
            id: 2,
            img: right,
        },
        {
            id: 3,
            img: back,
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
                        <b>Bestickering WSL</b>
                    </p>
                    <p>
                        Ontwerp voor reclame op de camionetten van WSL.

                        Photoshoot van de bussen voor promotie materiaal
                    </p>
                    <p>
                        <b> Uitwerking:</b> Illustrator
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
