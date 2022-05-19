import {Header} from "../../componenten/header/Header";
import {Card} from "../../componenten/card/Card";
import React from "../../../assets/logos/react.png";
import {useEffect} from "react";

export const Project = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return <div>
        <Header title={props.title} bg={"_warm-dark"} color={"base-cold"} size={"sm"}/>
        <div className={"container "}>
            <div className={"flex flex-row flex-wrap"}>
                <div className={"basis-2/4"}>
                    <Card size={'_sqr'}/>
                </div>
                <div className={"basis-2/4"}>
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
        </div>
    </div>
}
