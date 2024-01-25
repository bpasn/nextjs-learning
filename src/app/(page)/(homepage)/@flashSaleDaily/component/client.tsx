'use client';

import SwiperComponent from "@/components/SwiperComponent";
import Image from "next/image";
import { SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import CardItemComponent from "@/components/CardItemComponent";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
type Props = {}
let DateSeven = new Date().setDate(new Date().getDate() + 7);
const FlashSaleDailyClient = (props: Props) => {
  const [days, setDays] = useState(0);
  const [hrs, setHrs] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);

  useEffect(() => {
    const target = new Date("01/31/2024 23:59:59");
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (100 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHrs(h);

      const m = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      setMins(m);
      const s = Math.floor(
        (difference % (1000 * 60) / 1000)
      );
      setSecs(s)

    }, 1000);
    return () => clearInterval(interval);
  }, [])
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
      <div className="pb-[1.7rem_!important]">
        <picture className="relative">
          <Image
            src={"https://media-cdn.bnn.in.th/275791/Re-Design_Banner_%2b_Cover_Daily_FLASH_SALE_Banner_PC.jpeg"}
            alt="flasSell"
            width={2000}
            height={500}
            style={{
              width: "100%",
              maxHeight: "530px"
            }}
            className="object-contain"
          />
          <div className="md:flex md:flex-col hidden mb-auto absolute t-10 z-10 bottom-0 w-full">
            <span className="text-sm text-center text-foreground/80">Ends in...</span>
            <div className="flex flex-row text-white space-x-5 items-center justify-center">
              <div className="day flex flex-col">
                <span className="text-2xl ">{days}</span>
                <code className="text-lg">Days</code>
              </div>
              <div className="hrs flex flex-col">
                <span className="text-2xl">{hrs}</span>
                <code className="text-lg">Hrs</code>
              </div>
              <div className="mins flex flex-col">
                <span className="text-2xl">{mins}</span>
                <code className="text-lg">Mins</code>
              </div>
              <div className="secs flex flex-col">
                <span className="text-2xl">{secs}</span>
                <code className="text-lg">Secs</code>
              </div>
            </div>
          </div>
        </picture>
      </div>

      <div className="md:col-span-3">
        <SwiperComponent indicator="text-right" slidesPerView={4}>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((_, i) => {
            return (
              <SwiperSlide key={i} className=''>
                <CardItemComponent
                  id={""}
                  category={"Display"}
                  image={i % 2 === 0 ? 'https://media-cdn.bnn.in.th/188543/Samsung-Smartphone-Galaxy-A23-1-square_medium.jpg' : "https://media-cdn.bnn.in.th/335700/dahua-monitor-lm30-e33cw-va-200hz-1-square_medium.jpg"}
                  price="10"
                  title="สมาร์ทโฟน Realme 10T (8+256) Dash Blue (5G)"
                  footer={(
                    <div className="ml-auto ">
                      <Button size={"lg"}>Add to cart</Button>
                    </div>
                  )}
                />
              </SwiperSlide>
            )
          })}
        </SwiperComponent>
      </div>
    </div>
  )
}

export default FlashSaleDailyClient