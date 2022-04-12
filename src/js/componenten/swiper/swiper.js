import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "./swiper.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import {Card} from "../card/Card";
import {Mousewheel} from "swiper";
import {Progressbar} from "../progressbar/Progressbar";

export const SwiperInfo = (props) => {

    return <div>
        <Swiper
            direction={"horizontal"}
            mousewheel={true}
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
            }}
            modules={[Mousewheel]}
            // direction={"horizontal"}
            // slidesPerView={3}
            // mousewheel={true}
            // breakpoints={{
            //     640: {
            //         slidesPerView: 2,
            //         spaceBetween: 20,
            //     },
            //     768: {
            //         slidesPerView: 4,
            //         spaceBetween: 40,
            //     },
            //     1024: {
            //         slidesPerView: 5,
            //         spaceBetween: 50,
            //     },
            // }}
            // modules={[Mousewheel]}
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
