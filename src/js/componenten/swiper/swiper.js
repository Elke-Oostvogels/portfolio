import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import {Swiper, SwiperSlide} from "swiper/react";
import {Card} from "../card/Card";
import {Mousewheel} from "swiper";
import {Progressbar} from "../progressbar/Progressbar";

export const SwiperInfo = (props) => {

    return <div>
        <Swiper
            direction={"horizontal"}
            slidesPerView={3}
            mousewheel={true}
            modules={[Mousewheel]}
        >
            {props.info.map(i =>
                <SwiperSlide key={i.id}>
                    {console.log(i)}
                    <Card size={props.size} {...i} color={props.color}/>
                    {props.class === "card__progressbar" ? <Progressbar proc={i.rating}/> : <></>}
                </SwiperSlide>
            )}
        </Swiper>
    </div>
}
