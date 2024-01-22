import BannerComponent from '@/components/BannerComponent'
import React, { Suspense } from 'react'
import DashboardClient from './component/client'
import Loading from '../(page)/shop/(root)/loading'
import { delay } from '@/lib/utils'
const fetchData = async (): Promise<CategoryModel[]> => {
  'use server';
  const response = await fetch("https://api.escuelajs.co/api/v1/categories");
  const data = await response.json();
  return data as CategoryModel[];
}

const Dashboard = async () => {
  const data = await fetchData();
  return (
    <div className="">
      <BannerComponent category={data} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 -mt-10 z-10 relative px-5">
        <DashboardClient data={data} />
      </div>
    </div>

  )
}

export default Dashboard