import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/navigation";

interface PropsType {
    photos: string[],
    advertTitle: string
}

export default function ProductDetailSlider(props: PropsType) {

    const renderedSwiperSlide = () => {
        return props.photos.map((photoUrl: string) => {

            return (<SwiperSlide>
                <img
                    className="object-contain w-full h-96 text-orange-500"
                    src={photoUrl}
                    alt={props.advertTitle}
                />
            </SwiperSlide>
            )
        })

    };

    return (<>
        <Swiper
            navigation={true}
            modules={[Navigation]}
            className="text-orange-500"
        >
            {renderedSwiperSlide()}
        </Swiper>
    </>
    )
}
