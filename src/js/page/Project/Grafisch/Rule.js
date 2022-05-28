import {Header} from "../../../componenten/header/Header";
import {Card} from "../../../componenten/card/Card";
import React from "../../../../assets/logos/react.png";
import {useEffect} from "react";
import {Footer} from "../../../componenten/footer/Footer";
import HeaderImg from "../../../../assets/work/Rule/space_huistijl.jpg";

export const Rule = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return <div>
        <Header title={props.title} bg={"_warm-dark"} color={"base-cold"} size={"sm"}/>
        <div className={"container "}>
            <div className={"flex flex-row flex-wrap"}>
                <div className={"basis-2/4"}>
                    <Card size={'_sqr-header'} img={HeaderImg}/>
                </div>
                <div className={"basis-2/4"}>
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
        </div>
        <Footer/>
    </div>
}
