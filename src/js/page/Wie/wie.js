import {Header} from "../../componenten/header/Header";
import {Card} from "../../componenten/card/Card";
import './wie.scss';
import {SwiperInfo} from "../../componenten/swiper/swiper";

const talen = [
    {
        id: 1,
        title: 'HTML',
        img: '',
        rating: 0.85,
    },
    {
        id: 2,
        title: 'CSS',
        img: '',
        rating: 0.85
    },
    {
        id: 3,
        title: 'React',
        img: '',
        rating: 0.85
    },
    {
        id: 4,
        title: 'C#',
        img: '',
        rating: 0.85
    },
    {
        id: 5,
        title: 'Angular',
        img: '',
        rating: 0.85
    },
    {
        id: 6,
        img: '',
        rating: 0.85
    },
]

export const Wie = () => {

    return <div>
        <Header title={"Wie"} bg={"_base-light"}/>
        <div className={"container "}>
            <div className={"flex"}>
                <div className={"flex-col flex-col-md--5"}>
                    <Card size={'_sqr'}/>
                </div>
                <div className={"flex-col flex-col-md--6"}>
                    <h3>Wie ben ik?</h3>
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
            <h3>Talen kennis</h3>
            <SwiperInfo info={talen} size={'_md'} class={"card__progressbar"}/>
            <h3>Opleidingen</h3>
            <div className={"flex"}>

                <div className={"flex-col-md--4"}>
                    <Card size={'_md'}/>
                    <div className={"wie__content"}>
                        <h4>Programmeren</h4>
                        <p className={"light"}>Thomas more - Turnhout</p>
                        <p className={"light"}>2020-2022</p>
                    </div>

                </div>

                <div className={"flex-col-md--4"}>
                    <Card size={'_md'}/>
                    <div className={"wie__content"}>
                        <h4>Webdesign</h4>
                        <p className={"light"}>Instituut Sint-Maria - Antwerpen</p>
                        <p className={"light"}>2019-2020</p>
                    </div>

                </div>
                <div className={"flex-col-md--4"}>
                    <Card size={'_md'}/>
                    <div className={"wie__content"}>
                        <h4>Publiciteit</h4>
                        <p className={"light"}>Heilig graf - Turnhout</p>
                        <p className={"light"}>2015-2019</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
}
