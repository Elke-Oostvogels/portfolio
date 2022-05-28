import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "./swiper.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import {Card} from "../card/Card";
import {Mousewheel} from "swiper";
import {Navigation} from "swiper";
import {Progressbar} from "../progressbar/Progressbar";

export const SwiperInfo = (props) => {

    return <div>
        <Swiper
            navigation={true}
            direction={"horizontal"}
            mousewheel={true}
            slidesPerView={1}
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
                1500: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
                1700: {
                    slidesPerView: 5,
                    spaceBetween: 40,
                }
            }}
            modules={[Mousewheel, Navigation]}
        >
            {props.info.map(i =>
                <SwiperSlide key={i.id}>
                    {console.log(i)}
                    <Card size={props.size} {...i} color={props.color} stijl={props.stijl}/>
                    {props.class === "card__progressbar" ? <Progressbar proc={i.rating}/> : <></>}
                </SwiperSlide>
            )}
        </Swiper>
    </div>
}
