import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../assets/images/cartonn1.png';
import img2 from '../assets/images/cartoon2.png';
import img3 from '../assets/images/cartoon3.png';
import img4 from '../assets/images/cartoon4.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Myslider2() {
    return (
        <>
            <div className='py-5 my-5'>
                <Swiper
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
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={img1} alt="img1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} alt="img1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt="img1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} alt="img1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img1} alt="img1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} alt="img1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt="img1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} alt="img1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} alt="img1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt="img1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} alt="img1" />
                    </SwiperSlide>

                </Swiper>
            </div>
        </>
    );
}