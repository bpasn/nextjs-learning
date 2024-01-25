'use client';
import CardItemComponent from '@/components/CardItemComponent'
import SwiperComponent from '@/components/SwiperComponent'
import React from 'react'
import { SwiperSlide } from 'swiper/react'

type Props = {}

const BestSellerClient = (props: Props) => {
    return (
        <SwiperComponent indicator="text-right" slidesPerView={5}>
            {Array.from({ length: 5 }, (_, i) => i + 1).map((_, i) => {
                return (
                    <SwiperSlide key={i} className=''>
                        <CardItemComponent
                            id={""}
                            category={"Display"}
                            image={i % 2 === 0 ? 'https://media-cdn.bnn.in.th/188543/Samsung-Smartphone-Galaxy-A23-1-square_medium.jpg' : "https://media-cdn.bnn.in.th/335700/dahua-monitor-lm30-e33cw-va-200hz-1-square_medium.jpg"}
                            price="10"
                            title="สมาร์ทโฟน Realme 10T (8+256) Dash Blue (5G)"
                        />
                    </SwiperSlide>
                )
            })}
        </SwiperComponent>
    )
}

export default BestSellerClient