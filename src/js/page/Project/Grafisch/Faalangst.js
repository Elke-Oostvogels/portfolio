import {Header} from "../../../componenten/header/Header";
import {Card} from "../../../componenten/card/Card";
import React from "../../../../assets/logos/react.png";
import {useEffect} from "react";
import {Footer} from "../../../componenten/footer/Footer";
import HeaderImg from "../../../../assets/work/Faalangst/Brochure_faalangst_cover.jpg";
import Cover from "../../../../assets/work/Faalangst/Brochure_faalangst_cover.jpg";
import Brochure_1 from "../../../../assets/work/Faalangst/Brochure_faalangst2_groot.jpg";
import Brochure_2 from "../../../../assets/work/Faalangst/Brochure_faalangst3_groot.jpg";
import Brochure_3 from "../../../../assets/work/Faalangst/Brochure_faalangst4_groot.jpg";
import Brochure_4 from "../../../../assets/work/Faalangst/Brochure_faalangst6_groot.jpg";
import Brochure_5 from "../../../../assets/work/Faalangst/Brochure_faalangst8_groot.jpg";
import Brochure_6 from "../../../../assets/work/Faalangst/Brochure_faalangst9_groot.jpg";
import Brochure_7 from "../../../../assets/work/Faalangst/Brochure_faalangst13_groot.jpg";

import {SwiperProjecten} from "../../../componenten/swiper/swiper";

export const Faalangst = (props) => {

    const photo = [
        {
            id: 1,
            img: Cover,
        },
        {
            id: 2,
            img: Brochure_1,
        },
        {
            id: 3,
            img: Brochure_2,
        },
        {
            id: 4,
            img: Brochure_3,
        },
        {
            id: 5,
            img: Brochure_4,
        },
        {
            id: 6,
            img: Brochure_5,
        }
        ,
        {
            id: 7,
            img: Brochure_6,
        }
        ,
        {
            id: 8,
            img: Brochure_7,
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
                        <b>Brochure Faalangst</b>
                    </p>
                    <p>
                        Fictieve opdracht: maak een design voor een brochure rond faalangst.

                        Omdat het om een fictief leger ging had ik het idee om er op een grappige manier met de opdracht
                        om te gaan. Want wat zouden soldaten in de ruimte kunnen doen, in mijn ogen niks. Dus zo is het
                        idee ontstaan om astronauten aardse dingen in de ruimte te laten doen. Bv fietsen,
                        schommelen,... Dit heb ik doorgetrokken in de website en huisstijl.
                    </p>
                    <p>
                        <b> Formaat:</b> 15cm op 15cm
                    </p>
                    <p>
                        <b> Uitwerking:</b> Indesign
                    </p>
                    <p>
                        <b>Jaar:</b> 2019
                    </p>
                </div>
            </div>
            <SwiperProjecten info={photo} size={'_lg'}/>
        </div>
        <Footer/>
    </div>
}
