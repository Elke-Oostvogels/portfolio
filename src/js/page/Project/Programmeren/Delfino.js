import {Header} from "../../../componenten/header/Header";
import {Card} from "../../../componenten/card/Card";
import React from "../../../../assets/logos/react.png";
import {useEffect} from "react";
import {Footer} from "../../../componenten/footer/Footer";
import Logo from "../../../../assets/work/delfino.png";
export const Delfino = (props) => {

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
                        <b>Website Delfino</b>
                    </p>
                    <p>
                        Effectieve opdracht: groepsopdracht voor zwemclub Delfino.
                        In een groep van 4 studenten maakte we in een week tijd de website voor Delfino. Voor dit
                        project heb ik ook het nieuwe logo ontworpen.
                    </p>
                    <p>
                        <b> Uitwerking:</b> Wordpress, Elementor en Woocommerce
                    </p>
                    <p>
                        <b>Jaar:</b> 2021
                    </p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
}
