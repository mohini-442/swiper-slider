import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';
import img1 from '../assets/images/img1.png'
import img2 from '../assets/images/img2.png'
import img3 from '../assets/images/img3.png'
import img4 from '../assets/images/img4.png'
import img5 from '../assets/images/img6.png'
import img6 from '../assets/images/img7.png'


const Myswiper = () => {
    return (
        <div className='pt-5 my-container'>
            <Swiper effect={'flip'} grabCursor={true} pagination={true} navigation={true} modules={[EffectFlip, Pagination, Navigation]}>
                <SwiperSlide>
                    <img className='w-100' src={img1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-100' src={img2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-100' src={img3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-100' src={img4} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-100' src={img5} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-100' src={img6} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Myswiper