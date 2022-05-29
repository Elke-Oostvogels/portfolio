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

//logo's stages
import Viavictor from '../../../../src/assets/logos/viavictor.svg';
import Silverfish from '../../../../src/assets/logos/silverfish.svg';
import deSter from '../../../../src/assets/logos/dester.png';

//logo's computertalen
import HTML from '../../../../src/assets/logos/html.jpg';
import CSS from '../../../../src/assets/logos/CSS.jpg';
import C from '../../../../src/assets/logos/logo_c.png';
import React from '../../../../src/assets/logos/react.jpg';
import Angular from '../../../../src/assets/logos/Angular.jpg';
import Bootstrap from '../../../../src/assets/logos/bootrsrap.jpg';
import WordPress from '../../../../src/assets/logos/logo_wordpress.png';

// logo's andere
import Indesign from '../../../../src/assets/logos/logo_indesign.png';
import Illustration from '../../../../src/assets/logos/illustrator.jpg';
import Adobe from '../../../../src/assets/logos/logo_photoshop.png';
import {SubTitle} from "../../componenten/subTitle/SubTitle";
import {useEffect} from "react";

const hard_skills = [
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
        id: 7,
        title: 'WordPress',
        img: WordPress,
        rating: 0.75
    },
    {
        id: 6,
        title: 'Bootstrap',
        img: Bootstrap,
        rating: 0.85
    },

    {
        id: 8,
        title: 'Adobe Indesign',
        img: Indesign,
        rating: 0.75
    }
    ,
    {
        id: 9,
        title: 'Adobe Illustrator',
        img: Illustration,
        rating: 0.75
    },
    {
        id: 10,
        title: 'Adobe Photoshop',
        img: Adobe,
        rating: 0.75
    }
];
const soft_skills = [
    {
        id: 8,
        title: 'Plannen',
        rating: 0.85,
    },
    {
        id: 9,
        title: 'Leergierig',
        rating: 0.75
    },
    {
        id: 10,
        title: 'Creatief',
        rating: 0.70
    },
    {
        id: 11,
        title: 'Behulpzaam',
        rating: 0.75
    },
    {
        id: 12,
        title: '',
        rating: 0.65
    }
];

export const Wie = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return <div className={"wie"}>
        <Header title={"Wie"} bg={"_warm-dark"} color={"base_warm_light"}/>
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
                <div className={"basis-48 sm:basis-full md:basis-1/4 wie__info"}>
                    <ul>
                        <li>Elke Oostvogels</li>
                        <li>21 april 1999</li>
                        <li>Meerle</li>
                    </ul>
                </div>
                <div className={"basis-48 sm:basis-full md:basis-1/4 wie__info"}>
                    <ul>
                        <li>+32 493 50 61 24</li>
                        <li>elkeoostvogels@outlook.com</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={"container container_bg-light"}>
            <div className={"py-10"}>
                <SubTitle title={"Hard Skills"} color={"base-cold"} size={"sm"}/>
                <SwiperInfo info={hard_skills} size={'_md'} class={"card__progressbar"} color={'img_black-white'}/>
            </div>
            <div className={"py-10"}>
                <SubTitle title={"Soft Skills"} color={"base-cold"} size={"sm"}/>
                <SwiperInfo info={soft_skills} size={'_md'} class={"card__progressbar"} color={'img_black-white'}/>
            </div>
            <div className={"flex flex-row flex-wrap"}>
                <div className={"basis-full  md:basis-1/2 mt-8"}>
                    <SubTitle title={"Opleidingen"} color={"base-warm-dark"}
                              size={"sm"}
                              line={"_xl-height"}/>
                    <div className={"flex flex-col"}>
                        <div className={"flex basis-full  mt-4"}>
                            <img className={"wie__img wie__img-logos"} src={ThomasMore}/>
                            <div className={"wie__content justify-center"}>
                                <h4>Programmeren</h4>
                                <p>Thomas more - Turnhout</p>
                                <p>2020-2022</p>
                            </div>
                        </div>
                        <div className={" flex basis-full mt-4"}>
                            <img className={"wie__img wie__img-logos"} src={SintMaria}/>
                            <div className={"wie__content"}>
                                <h4>Webdesign</h4>
                                <p>Instituut Sint-Maria - Antwerpen</p>
                                <p>2019-2020</p>
                            </div>
                        </div>
                        <div className={" flex basis-full mt-4"}>
                            <img className={"wie__img wie__img-logos"} src={HeiligGraf}/>
                            <div className={"wie__content"}>
                                <h4>Publiciteit</h4>
                                <p>Heilig graf - Turnhout</p>
                                <p>2015-2019</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"basis-full  md:basis-1/2 mt-8"}>
                    <SubTitle title={"Stage"} color={"base-warm-dark"} size={"sm"}/>
                    <div className={"flex flex-row justify-between  flex-wrap"}>
                        <div className={"flex basis-full mt-4"}>
                            <a href="https://viavictor.com/" target={"_blank"}>
                                <img className={"wie__img wie__img-logos"} src={Viavictor}/>
                            </a>

                            <div className={"wie__content justify-center"}>
                                <h4>ViaVictor</h4>
                                <p>Front-end</p>
                                <p>4 maanden</p>
                            </div>
                        </div>
                        <div className={" flex basis-full mt-4"}>
                            <a href="https://silverfish.nl/" target={"_blank"}>
                                <img className={"wie__img wie__img-logos"} src={Silverfish}/>
                            </a>
                            <div className={"wie__content"}>
                                <h4>Silverfish</h4>
                                <p>Webdesign</p>
                                <p>2 maanden</p>
                            </div>
                        </div>
                        <div className={" flex basis-full mt-4"}>
                            <a href="https://dester.com/" target={"_blank"}>
                                <img className={"wie__img wie__img-logos"} src={deSter}/>
                            </a>
                            <div className={"wie__content"}>
                                <h4>deSter</h4>
                                <p>Grafische afdelig</p>
                                <p>2 maanden</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
}
