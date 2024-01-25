'use client';
import React, { useEffect, useState } from 'react'
import { Swiper } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";
import { Navigation, Pagination, Grid } from 'swiper/modules';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
interface SwiperComponentProps {
  children: React.ReactNode;
  indicator: 'text-left' | 'text-right' | 'text-center';
  slidesPerView: number;
  grid?: number;
  slidesPerViewMd?: number;
  slidesPerViewSm?: number;
  slidesPerViewlg?: number;
  slidesPerViewxl?: number;

}

const SwiperComponent = ({
  children,
  indicator,
  slidesPerView,
  grid,
  slidesPerViewMd = 5,
  slidesPerViewSm = 2,
  slidesPerViewlg = 3,
}: SwiperComponentProps) => {
  const [isMounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!isMounted) return null;
  return (

    <div>
      <Swiper
        autoplay={{
          delay: 2000
        }}
        className='pb-[1.7rem_!important]'
        modules={[Navigation, Pagination, Grid]}
        pagination={{
          clickable: true,
          el: ".pagination-custom"
        }}
        navigation={{
          nextEl: ".navigation-next",
          prevEl: ".navigation-prev",
        }}
        breakpoints={{
          576: {
            slidesPerView: slidesPerViewSm,
            spaceBetween: 20
          },
          992: {
            slidesPerView: slidesPerViewlg,
            spaceBetween: 20
          },
          1200: {
            slidesPerView: slidesPerView,
            spaceBetween: 20
          }
        }}
        spaceBetween={20}
        slidesPerView={slidesPerView}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {children}
        <div className={cn(
          "pagination-custom px-3   space-x-2 -top-10",
          indicator
        )} />
        <div className="navigation-next h-auto">
          <Button variant={"outline"} size={"icon"} className='w-10 h-20 opacity-50 hover:opacity-100 text-foreground/40' >
            <ChevronRight size={32} />
          </Button>
        </div>
        <div className="navigation-prev  h-auto">
          <Button variant={"outline"} size={"icon"} className='w-10 h-20 opacity-50 hover:opacity-100 text-foreground/40' >
            <ChevronLeft size={32} />
          </Button>
        </div>
      </Swiper>

    </div>
  )
}

export default SwiperComponent