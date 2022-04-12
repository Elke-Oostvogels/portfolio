import {Header} from "../../componenten/header/Header";
import {Card} from "../../componenten/card/Card";
import './wie.scss';
import {SwiperInfo} from "../../componenten/swiper/swiper";
import {Footer} from "../../componenten/footer/Footer";

// images
//logo's opleidingen
import SintMaria from '../../../../src/assets/logos/sint-maria.png';
import HeiligGraf from '../../../../src/assets/logos/heilig-graf.png';
import ThomasMore from '../../../../src/assets/logos/thomas-more.png';

//logo's computertalen
import HTML from '../../../../src/assets/logos/logo_html.png';
import CSS from '../../../../src/assets/logos/logo_css.png';
import C from '../../../../src/assets/logos/logo_c.png';
import React from '../../../../src/assets/logos/react.png';
import Angular from '../../../../src/assets/logos/angular.png';
import Bootstrap from '../../../../src/assets/logos/logo_bootstrap.png';
import WordPress from '../../../../src/assets/logos/logo_wordpress.png';

//logo's andere
import Indesign from '../../../../src/assets/logos/logo_c.png';
import Illustration from '../../../../src/assets/logos/logo_c.png';
import Adobe from '../../../../src/assets/logos/logo_c.png';
import {SubTitle} from "../../componenten/subTitle/SubTitle";

const talen = [
    {
        id: 1,
        title: 'HTML',
        img: HTML,
        rating: 0.85,
    },
    {
        id: 2,
        title: 'CSS',
        img: CSS,
        rating: 0.75
    },
    {
        id: 3,
        title: 'React',
        img: React,
        rating: 0.70
    },
    {
        id: 4,
        title: 'C#',
        img: C,
        rating: 0.75
    },
    {
        id: 5,
        title: 'Angular',
        img: Angular,
        rating: 0.65
    },
    {
        id: 6,
        title: 'Bootstrap',
        img: Bootstrap,
        rating: 0.85
    },
    {
        id: 7,
        title: 'WordPress',
        img: WordPress,
        rating: 0.75
    }
]

export const Wie = () => {

    return <div>
        <Header title={"Wie"} bg={"_warm-dark"} color={"base_warm_light"}/>
        <div className={"container container_bg-light"}>
            <div className={"flex flex-row flex-wrap"}>
                <div className={"basis-2/4"}>
                    <Card size={'_sqr'}/>
                </div>
                <div className={"basis-2/4  md:basis-1/2"}>
                    <SubTitle title={"Wie ben ik?"} color={"base-warm-dark"}/>
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
            <div className={"py-10"}>
                <SubTitle title={"Talen kennis"} color={"base-cold"}/>
                <SwiperInfo info={talen} size={'_md'} class={"card__progressbar"} color={'img_black-white'}/>
            </div>
            <div className={"py-10"}>
                <SubTitle title={"Opleidingen"} color={"base-cold"}/>
                <div className={"flex flex-row justify-between flex-wrap "}>
                    <div className={"basis-1/4"}>
                        <Card size={'_md'} img={ThomasMore}/>
                        <div className={"wie__content"}>
                            <h4>Programmeren</h4>
                            <p className={"light"}>Thomas more - Turnhout</p>
                            <p className={"light"}>2020-2022</p>
                        </div>
                    </div>
                    <div className={"basis-1/4"}>
                        <Card size={'_md'} img={SintMaria}/>
                        <div className={"wie__content"}>
                            <h4>Webdesign</h4>
                            <p className={"light"}>Instituut Sint-Maria - Antwerpen</p>
                            <p className={"light"}>2019-2020</p>
                        </div>
                    </div>
                    <div className={"basis-1/4"}>
                        <Card size={'_md'} img={HeiligGraf}/>
                        <div className={"wie__content"}>
                            <h4>Publiciteit</h4>
                            <p className={"light"}>Heilig graf - Turnhout</p>
                            <p className={"light"}>2015-2019</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
}
