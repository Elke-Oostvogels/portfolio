import {Header} from "../../../componenten/header/Header";
import {Card} from "../../../componenten/card/Card";
import {useEffect} from "react";

import Logo from "../../../../assets/work/Historas/Historas_logo.jpg";
import {Footer} from "../../../componenten/footer/Footer";
import {SwiperInfo, SwiperProjecten} from "../../../componenten/swiper/swiper";
import Cover from "../../../../assets/work/Historas/brochure.jpg";
import Brochure_1 from "../../../../assets/work/Historas/brochure2.jpg";
import Brochure_2 from "../../../../assets/work/Historas/brochure3.jpg";
import Brochure_3 from "../../../../assets/work/Historas/brochure4.jpg";
import Brochure_4 from "../../../../assets/work/Historas/brochure5.jpg";
import Brochure_5 from "../../../../assets/work/Historas/brochure6.jpg";
import Brochure_6 from "../../../../assets/work/Historas/brochure7.jpg";
import Brochure_7 from "../../../../assets/work/Historas/brochure8.jpg";
import Brochure_8 from "../../../../assets/work/Historas/brochure9.jpg";
import Brochure_9 from "../../../../assets/work/Historas/brochure10.jpg";
import PosterJonge from "../../../../assets/work/Historas/Historas_poster_jongen.jpg";
import PosterMeisje from "../../../../assets/work/Historas/Historas_poster_meisje.jpg";


export const Historas = (props) => {

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
        },
        {
            id: 7,
            img: Brochure_6,
        }
        ,
        {
            id: 8,
            img: Brochure_7,
        }
        ,
        {
            id: 9,
            img: Brochure_8,
        }
        ,
        {
            id: 10,
            img: Brochure_9,
        }
        ,
        {
            id: 12,
            img: PosterJonge,
        }
        ,
        {
            id: 12,
            img: PosterMeisje,
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
                    <Card size={'_sqr-header'} img={Logo}/>
                </div>
                <div className={"basis-full  md:basis-1/2"}>
                    <p>
                        <b>Gip opdracht:</b> verzin een fictief product maakt hiervoor een huisstijl.
                    </p>
                    <p>
                        Voor deze opdracht heb ik de Historas koekjes uitgevonden. Deze koekjes zijn educatieve koekjes
                        waar kinderen voor een korte periode terug in de tijd kunnen reizen. Hierdoor leren de kinderen
                        door ervaringen en wat ze zien in plaats van saai aan hun bureau te zitten en naar de leerkracht
                        te luisteren.
                    </p>
                    <p>
                        <b> Uitwerking:</b> Poster, logo, folder en verpakking
                    </p>
                    <p>
                        <b>Jaar:</b> 2018-2019
                    </p>
                </div>
            </div>
            <SwiperProjecten info={photo} size={'_lg'}/>
        </div>
        <Footer/>
    </div>
}
