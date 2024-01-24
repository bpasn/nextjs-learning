import BannerComponent from '@/components/BannerComponent'
import React from 'react'
import DashboardClient from './component/client'
import SwiperComponent from '@/components/SwiperComponent';
import { EachElement } from '@/EachElement';
import FlashSaleDailyClient from './component/FlashSaleDaily';
import ProductHistory from './component/ProductHistory';
import Promotions from './component/Promotions';
import BestSeller from './component/BestSeller';
import NewProduct from './component/NewProduct';
const fetchData = async (): Promise<CategoryModel[]> => {
  'use server';
  const response = await fetch("https://api.escuelajs.co/api/v1/categories");
  const data = await response.json();
  return data as CategoryModel[];
}

const Dashboard = async () => {
  const data = await fetchData();
  return (
    <div>
      <BannerComponent />
      <div className={"container"}>
        <section className='mb-10'>
          <FlashSaleDailyClient />
        </section>
        <section className="ProductHistory">
          <ProductHistory />
        </section>
        <section className="Promotion">
          <Promotions />
        </section>
        <section className="bestSeller">
          <BestSeller />
        </section>
        <section className="newProduct">
          <NewProduct />
        </section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 z-10 relative px-5">
          <DashboardClient data={data} />
          S</div>
        bBS</div>
    </div>

  )
}

export default Dashboard