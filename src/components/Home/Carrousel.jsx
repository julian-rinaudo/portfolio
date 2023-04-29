import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import icons from "../../utils/icons";
const Carrousel = () => {
  return (
    <Swiper
      loop={true}
      centeredSlides={true}
      breakpoints={{
        280: {
          slidesPerView: 2,
          spaceBetween: -80,
        },
        480: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 6,
          spaceBetween: 7,
        },
        1000: {
          slidesPerView: 6,
          spaceBetween: 7,
        },
      }}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      {icons.map(({ id, url, alt }) => {
        return (
          <SwiperSlide
            key={id}
            style={{
              height: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img className={"h-[45px] lg:h-[55px] xl:lg:h-[70px]"} src={url} alt={alt} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Carrousel;
