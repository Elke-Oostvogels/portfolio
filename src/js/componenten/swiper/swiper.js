import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "./swiper.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import {Card} from "../card/Card";
import {Mousewheel} from "swiper";
import {Progressbar} from "../progressbar/Progressbar";
import {Link} from "react-router-dom";

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
        >
            {props.info.map(i =>
                <SwiperSlide key={i.id}>
                    {console.log(i)}
                    {i.url !== undefined?
                        <Link to={i.url}>
                            <Card size={props.size} {...i} color={props.color}/>
                            {props.class === "card__progressbar" ? <Progressbar proc={i.rating}/> : <></>}
                        </Link>
                    : <Card size={props.size} {...i} color={props.color}/>}
                    {props.class === "card__progressbar" ? <Progressbar proc={i.rating}/> : <></>}
                </SwiperSlide>
            )}
        </Swiper>
    </div>
}
