'use client';

import CardItemComponent from "@/components/CardItemComponent";
import SwiperComponent from "@/components/SwiperComponent";
import { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";


const ProductHistory = () => {
  return (
    <div>
      <h1 className="text-2xl font-medium mb-10">สินค้าฮิตติดเทรนด์!</h1>
      <SwiperComponent indicator="text-right" slidesPerView={5}>
        {[
          "https://media-cdn.bnn.in.th/332626/iPhone_15_Pink_1-square_medium.jpg",
          "https://media-cdn.bnn.in.th/332616/iPhone_15_Green_1-square_medium.jpg",
          "https://media-cdn.bnn.in.th/332609/iPhone_15_Blue_1-square_medium.jpg",
          "https://media-cdn.bnn.in.th/332596/TH_iPhone_15_Black_1-square_medium.jpg",
          "https://media-cdn.bnn.in.th/332609/iPhone_15_Blue_1-square_medium.jpg"
        ].map((src, i) => {
          return (
            <SwiperSlide key={i} className=''>
              <CardItemComponent
                id={""}
                category={"IPhon"}
                image={src}
                price="30000"
                title="Apple iPhone 15 128GB Green"
              />
            </SwiperSlide>
          )
        })}
      </SwiperComponent>
    </div>
  )
}

export default ProductHistory