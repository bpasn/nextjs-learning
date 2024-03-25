'use client';
import Image from 'next/image';
import SwiperComponent from './SwiperComponent';
import { SwiperSlide } from 'swiper/react';

const BannerComponent = () => {
    return (
        <div className='relative mb-20 '>
            <SwiperComponent indicator={"text-left"} slidesPerView={1}>
                {Array.from({ length: 10 }, (_, i) => i + 1).map((_, i) => (
                    <SwiperSlide key={i} className='relative  h-[550px_!important] space-x-1'>
                        <Image
                            priority={_ === 1}
                            fill
                            src={"https://www.free-css.com/assets/files/free-css-templates/preview/page287/eflyer/assets/images/banner-bg.png"}
                            alt="sliderImg2"
                            className='object-cover'
                        />
                    </SwiperSlide>
                ))}
            </SwiperComponent>
        </div >
    )
}

export default BannerComponent